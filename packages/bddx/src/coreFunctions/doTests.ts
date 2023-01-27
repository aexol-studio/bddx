import { testHandler } from "@/testFunctions/index.js";
import { message } from "bddx-core";
import fs from "fs";
import inquirer from "inquirer";
import { JiraType } from "./index.js";

export enum TEST_STATUS {
  FINISHED = "finished",
  UNFINISHED = "in progress",
}

export type Results = {
  testStatus: {
    currentTestPath?: string;
    currentScenario?: number;
    status: TEST_STATUS;
    testFilesRoutes: string[];
  };
  passedTests: {
    testPath: string;
    scenarioTitle: string;
    scenarioContent: string;
    featureContent: string;
  }[];
  failedTests: {
    testPath: string;
    reasonOfFail: string;
    scenarioContent: string;
    scenarioTitle: string;
    featureContent: string;
  }[];
};

export const doTests = async (
  testsPaths: string[],
  outPath: string,
  jira?: JiraType
) => {
  const results: Results = {
    failedTests: [],
    passedTests: [],
    testStatus: {
      currentScenario: 0,
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
      await testHandler(testsPaths, results, answers.fileName, outPath, jira);
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
    await testHandler(testsPaths, results, fileName, outPath, jira);
  }
};
