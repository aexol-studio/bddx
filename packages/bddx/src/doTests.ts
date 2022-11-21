import { message } from "bddx-core";
import fs from "fs";
import inquirer from "inquirer";
import { Version3Client } from "jira.js";

const FINISHED = "tests finished";
type Results = {
  testFilesRoutes: string[];
  atTest: string;
  failedTests: { testPath: string; reasonOfFail: string }[];
};
export const doTests = async (
  testsPaths: string[],
  outPath: string,
  jira?: { client: Version3Client; projectName: string; issueTypeName: string }
) => {
  let results: Results = {
    atTest: testsPaths[0],
    testFilesRoutes: testsPaths,
    failedTests: [],
  };
  const date = new Date().toISOString().split(".")[0];
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
      results = {
        ...results,
        atTest: file,
      };
      if (!answers.confirmation && answers.message) {
        results = {
          ...results,
          failedTests: [
            ...results.failedTests,
            {
              testPath: file,
              reasonOfFail: answers.message,
            },
          ],
        };

        if (jira && jira.client) {
          jira.client.issues
            .createIssue({
              fields: {
                issuetype: {
                  name: jira.issueTypeName,
                },
                project: { key: jira.projectName },
                summary: `Test ${file} failed at ${
                  new Date().toISOString().split(".")[0]
                }`,
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
      fs.writeFileSync(
        `${outPath}/${fileName}`,
        JSON.stringify(results, null, 4)
      );
    }
  }
  if (results && Object.keys(results).length === 0) {
    message(`All tests passed`, "bgGreen");
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
      fileContent.atTest !== FINISHED &&
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
  fileName: string
) => {
  const testFilePath = `${outTestsPath}/${fileName}`;
  if (!fs.existsSync(testFilePath)) {
    message("Selected file does not exists", "red");
    return;
  }
  let results: Results = JSON.parse(
    fs.readFileSync(testFilePath).toString("utf8")
  );
  if (results.atTest === FINISHED) {
    message("Selected file is a save where all test were performed", "yellow");
    return;
  }
  const restOfTests = results.testFilesRoutes.splice(
    results.testFilesRoutes.findIndex((e) => e === results.atTest) + 1
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
      results = {
        atTest: file,
        failedTests: results.failedTests,
        testFilesRoutes: results.testFilesRoutes,
      };

      if (!answers.confirmation && answers.message) {
        results = {
          atTest: results.atTest,
          testFilesRoutes: results.testFilesRoutes,
          failedTests: [
            ...results.failedTests,
            {
              testPath: file,
              reasonOfFail: answers.message,
            },
          ],
        };
      }
      await fs.promises.writeFile(
        `${outTestsPath}/${fileName}`,
        JSON.stringify(results, null, 4)
      );
    }
    ///////////usuwa ppliki w testFilesRoutes - nie wiem dlaczego
  }
  if (results && Object.keys(results).length === 0) {
    message(`All tests passed`, "bgGreen");
  }
};
