import { message, messageWithContent, rebuildToGherkin } from "bddx-core";
import fs from "fs";
import inquirer from "inquirer";
import { Version3Client } from "jira.js";

enum TEST_STATUS {
  FINISHED = "finished",
  UNFINISHED = "in progress",
}

export type Results = {
  testStatus: {
    currentTestPath?: string;
    status: TEST_STATUS;
    testFilesRoutes: string[];
  };
  passedTest: {
    testPath: string;
    scenarioTitle: string;
  }[];
  skippedTest: {
    testPath: string;
    scenarioTitle: string;
  }[];
  failedTests: {
    testPath: string;
    reasonOfFail: string;
    scenarioTitle: string;
  }[];
};

export const doTests = async (
  testsPaths: string[],
  outPath: string,
  jira?: { client: Version3Client; projectName: string; issueTypeName: string }
) => {
  const results: Results = {
    failedTests: [],
    passedTest: [],
    skippedTest: [],
    testStatus: {
      status: TEST_STATUS.UNFINISHED,
      currentTestPath: testsPaths[0],
      testFilesRoutes: testsPaths,
    },
  };
  const date = new Date().toISOString().split(".")[0].replaceAll(":", "-");
  const fileName = `result-${date}.json`;
  const getResultsNames = fs.readdirSync(outPath).map((o) => o);
  const answers = await inquirer.prompt<{
    skip: boolean;
    fileName?: string;
  }>([
    {
      type: "confirm",
      name: "skip",
      message: `Do you want to change result file name from ${fileName}?`,
      default: false,
    },
    {
      type: "input",
      name: "fileName",
      message:
        "Type name for result file: (there is validation for proper file name with .json extension)",
      when: (answers) => answers.skip,
      validate: async (fileName) =>
        /^\w+.json$/.test(fileName) &&
        !getResultsNames.find((o) => o == fileName),
    },
  ]);
  if (answers.skip) {
    if (answers.fileName) {
      fs.writeFileSync(
        `${outPath}/${answers.fileName}`,
        JSON.stringify(results, null, 4)
      );
      message(
        `                                                                                                                                      `,
        "bgYellow"
      );
      message(
        `This run from bddx was saved as ${answers.fileName} in ${outPath}\nEach test result is saved and you can reenter session by continue command`,
        "greenBright"
      );
      message(
        `                                                                                                                                      `,
        "bgYellow"
      );
      await doTestsFunction(
        testsPaths,
        results,
        answers.fileName,
        outPath,
        jira
      );
    }
  } else {
    fs.writeFileSync(
      `${outPath}/${fileName}`,
      JSON.stringify(results, null, 4)
    );
    message(
      `                                                                                                                                      `,
      "bgYellow"
    );
    message(
      `This run from bddx was saved as ${fileName} in ${outPath}\nEach test result is saved and you can reenter session by continue command`,
      "greenBright"
    );
    message(
      `                                                                                                                                      `,
      "bgYellow"
    );
    await doTestsFunction(testsPaths, results, fileName, outPath, jira);
  }
};

export const getUnfinishedTestsNames = async (outPath: string) => {
  if (!fs.existsSync(outPath)) {
    message("Output path does not exists", "red");
    return;
  }
  const fileNames: string[] = [];
  fs.readdirSync(outPath).forEach((file) => {
    const fileContent: Results = JSON.parse(
      fs.readFileSync(outPath + "/" + file).toString("utf8")
    );
    if (fileContent.skippedTest.length && file.endsWith(".json")) {
      fileNames.push(file);
    }
  });
  return fileNames;
};

export const doUnfinishedTest = async (
  outTestsPath: string,
  fileName: string,
  jira?: { client: Version3Client; projectName: string; issueTypeName: string }
) => {
  const testFilePath = `${outTestsPath}/${fileName}`;
  if (!fs.existsSync(testFilePath)) {
    message("Selected file does not exists", "red");
    return;
  }
  const results: Results = JSON.parse(
    fs.readFileSync(testFilePath).toString("utf-8")
  );

  if (!results.skippedTest.length) {
    message("Selected file is a save where all test were performed", "yellow");
    return;
  }

  const allRoutes = results.skippedTest.map((o) => o.testPath);

  await doTestsFunction(allRoutes, results, fileName, outTestsPath, jira);
};

const doTestsFunction = async (
  testsPaths: string[],
  results: Results,
  fileName: string,
  outPath: string,
  jira?: { client: Version3Client; projectName: string; issueTypeName: string }
) => {
  for (const file of testsPaths) {
    const content = await fs.promises
      .readFile(file, "utf-8")
      .catch((e) => message(e.message, "bgRed"));
    if (content) {
      message(`Test file content in ${file}`, "blueBright");
      const splittedByScenario: string[] = content.split("Scenario:");
      for (let i = 1; i < splittedByScenario.length; i++) {
        messageWithContent(
          "Feature:",
          splittedByScenario[0].replace("Feature:", ""),
          "yellow"
        );
        messageWithContent(
          "Scenario:",
          rebuildToGherkin(splittedByScenario[i]),
          "red"
        );
        const scenarioTitle: string = splittedByScenario[i]
          .split("\n")[0]
          .replaceAll("\r", "")
          .trim();
        const answers = await inquirer.prompt<{
          confirmation: "✅ Pass" | "❌ Report issue" | "⏭️ Skip";
          message?: string;
        }>([
          {
            type: "list",
            name: "confirmation",
            message: "What to do with this Scenario?",
            choices: ["✅ Pass", "❌ Report issue", "⏭️ Skip"],
            default: "⏭️ Skip",
          },
          {
            type: "input",
            name: "message",
            message: "Type what gone wrong in test:",
            when: (answers) => answers.confirmation === "❌ Report issue",
          },
        ]);
        if (answers.confirmation === "✅ Pass") {
          results.skippedTest = [
            ...results.skippedTest.filter((x) => x.testPath !== file),
          ];
          results.passedTest = [
            ...results.passedTest,
            {
              testPath: file,
              scenarioTitle,
            },
          ];
        }
        if (answers.confirmation === "⏭️ Skip") {
          results.skippedTest = [
            ...results.skippedTest,
            {
              testPath: file,
              scenarioTitle,
            },
          ];
        }
        if (answers.confirmation === "❌ Report issue" && answers.message) {
          results.skippedTest = [
            ...results.skippedTest.filter((x) => x.testPath !== file),
          ];
          results.failedTests = [
            ...results.failedTests,
            {
              testPath: file,
              reasonOfFail: answers.message,
              scenarioTitle,
            },
          ];
          if (jira && jira.client) {
            jira.client.issues
              .createIssue({
                fields: {
                  issuetype: {
                    name: jira.issueTypeName,
                  },
                  project: { key: jira.projectName },
                  summary: `Test ${file} failed at ${new Date()
                    .toISOString()
                    .split(".")[0]
                    .replace(":", "-")}`,
                  description: answers.message,
                },
              })
              .catch(() =>
                message(
                  "Task was not created in Jira. Something went wrong",
                  "red"
                )
              );
          }
        }
      }

      if (testsPaths.indexOf(file) === testsPaths.length - 1) {
        results.testStatus = {
          status: TEST_STATUS.FINISHED,
          testFilesRoutes: [...results.testStatus.testFilesRoutes],
        };
      } else {
        results.testStatus.currentTestPath =
          testsPaths[testsPaths.indexOf(file) + 1];
      }
      fs.writeFileSync(
        `${outPath}/${fileName}`,
        JSON.stringify(results, null, 4)
      );
    }
  }
  if (results && Object.keys(results).length === 0) {
    message(`All tests passed`, "bgGreen");
  } else {
    message(`End of test files`, "blue");
  }
};
