import { message, GLOBAL_CONFIG_FILE } from "bddx-core";
import fs from "fs";
import inquirer from "inquirer";
import { Results, TEST_STATUS } from "./doTests.js";
import { Chain, ModelTypes } from "./zeus/index.js";

const chain = (option: "query" | "mutation", Key: string) =>
  Chain("https://bddx-p-api.azurewebsites.net/graphql", {
    headers: {
      "Content-type": "application/json",
      Key,
    },
  })(option);

const uploadReports = async (
  uploadReportInput: ModelTypes["UploadReportInput"],
  key: string
) => {
  const response = await chain(
    "mutation",
    key
  )({
    cli: {
      uploadReport: [
        {
          uploadReportInput,
        },
        true,
      ],
    },
  });
  if (!response) {
    message("We cannot upload your reports to BDDX Cloud right now.", "red");
    return;
  }
  return response.cli?.uploadReport;
};

export const cloudIntegration = async (resultsPaths: string[]) => {
  const selected = await inquirer.prompt<{
    pathtoresult: string;
    key: string;
  }>([
    {
      type: "list",
      name: "pathtoresult",
      choices: resultsPaths,
      message: "Select file to publish on cloud",
      default: GLOBAL_CONFIG_FILE.in,
    },
    {
      type: "input",
      name: "key",
      message: "Insert your project key from BDDX Cloud:",
    },
  ]);
  if (selected.key && selected.pathtoresult) {
    const content: Results = JSON.parse(
      fs.readFileSync(selected.pathtoresult).toString("utf-8")
    );
    if (content.testStatus.status === TEST_STATUS.FINISHED) {
      const arrayToSend: ModelTypes["UploadReportInput"] = { results: [] };
      content.passedTests.map((test) => {
        const testContent = fs.readFileSync(test.testPath).toString();
        arrayToSend.results.push({
          testPath: test.testPath,
          testContent: testContent,
          feature: test.scenarioTitle,
        });
      });
      content.failedTests.map((test) => {
        const testContent = fs.readFileSync(test.testPath).toString();
        arrayToSend.results.push({
          testPath: test.testPath,
          testContent: testContent,
          reasonOfFail: test.reasonOfFail,
          feature: test.scenarioTitle,
        });
      });
      if (arrayToSend.results.length === 0) {
        message("No results to send.", "red");
        return;
      }
      if (!selected.key) {
        message("Missing BDDX Cloud key.", "red");
        return;
      }
      if (arrayToSend.results.length) {
        try {
          const response = await uploadReports(arrayToSend, selected.key);
          if (!response) {
            message("Error occurred while uploading results.", "red");
            return;
          }
          message(`Success upload results with id: ${response}.`, "blue");
          return;
        } catch {
          message("Cannot upload results now, try again.", "red");
          return;
        }
      }
    } else {
      message("This results have status of unfinished.", "red");
      return;
    }
  } else {
    message("You provided wrong value into fields.", "red");
    return;
  }
};
