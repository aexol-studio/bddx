import { message } from "bddx-core";
import fs from "fs";
import inquirer from "inquirer";
import { Version3Client } from "jira.js";

enum TEST_STATUS {
  FINISHED = "finished",
  UNFINISHED = "in progress",
}
type Results = {
  testStatus: {
    currentTestPath?: string;
    status: TEST_STATUS;
    testFilesRoutes: string[];
  };
  failedTests: { testPath: string; reasonOfFail: string }[];
};
export const doTests = async (
  testsPaths: string[],
  outPath: string,
  jira?: { client: Version3Client; projectName: string; issueTypeName: string }
) => {
  const results: Results = {
    failedTests: [],
    testStatus: {
      status: TEST_STATUS.UNFINISHED,
      currentTestPath: testsPaths[0],
      testFilesRoutes: testsPaths,
    },
  };
  const date = new Date().toISOString().split(".")[0].replaceAll(":", "-");
  const fileName = `result-${date}.json`;
  fs.writeFileSync(`${outPath}/${fileName}`, JSON.stringify(results, null, 4));
  message(
    `This run fo bddx was saved as ${fileName} in ${outPath}\nEach test result is saved and you can reenter session by finishPrevious command`,
    "bgGreen"
  );
  for (const file of testsPaths) {
    const content = await fs.promises
      .readFile(file, "utf-8")
      .catch((e) => message(e.message, "bgRed"));
    if (content) {
      message(`test file content in ${file}`, "bgBlue");
      console.log(content);
      const answers = await inquirer.prompt<{
        confirmation: boolean;
        message?: string;
      }>([
        {
          type: "confirm",
          name: "confirmation",
          message: "Is everything Ok?",
          default: true,
        },
        {
          type: "input",
          name: "message",
          message: "Type what gone wrong in test:",
          when: (answers) => !answers.confirmation,
        },
      ]);

      if (!answers.confirmation && answers.message) {
        results.failedTests = [
          ...results.failedTests,
          {
            testPath: file,
            reasonOfFail: answers.message,
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
    if (
      fileContent.testStatus.status === TEST_STATUS.UNFINISHED &&
      file.startsWith("result-") &&
      file.endsWith(".json")
    ) {
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

  if (results.testStatus.status === TEST_STATUS.FINISHED) {
    message("Selected file is a save where all test were performed", "yellow");
    return;
  }
  const allRoutes = [...results.testStatus.testFilesRoutes];
  const restOfTests = allRoutes.splice(
    allRoutes.indexOf(results.testStatus.currentTestPath || "")
  );

  for (const file of restOfTests) {
    const content = await fs.promises
      .readFile(file, "utf-8")
      .catch((e) => message(e.message, "bgRed"));
    if (content) {
      message(`test file content in ${file}`, "bgBlue");
      console.log(content);
      const answers = await inquirer.prompt<{
        confirmation: boolean;
        message?: string;
      }>([
        {
          type: "confirm",
          name: "confirmation",
          message: "Is everything Ok?",
          default: true,
        },
        {
          type: "input",
          name: "message",
          message: "Type what gone wrong in test:",
          when: (answers) => !answers.confirmation,
        },
      ]);
      if (!answers.confirmation && answers.message) {
        results.failedTests = [
          ...results.failedTests,
          {
            testPath: file,
            reasonOfFail: answers.message,
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
      if (restOfTests.indexOf(file) === restOfTests.length - 1) {
        results.testStatus = {
          status: TEST_STATUS.FINISHED,
          testFilesRoutes: [...results.testStatus.testFilesRoutes],
        };
      } else {
        results.testStatus.currentTestPath =
          restOfTests[restOfTests.indexOf(file) + 1];
      }

      fs.writeFileSync(
        `${outTestsPath}/${fileName}`,
        JSON.stringify(results, null, 4)
      );
    }
  }
  if (results && Object.keys(results).length === 0) {
    message(`All of unfinished earlier tests passed`, "bgGreen");
  } else {
    message(`End of test files`, "blue");
  }
};
