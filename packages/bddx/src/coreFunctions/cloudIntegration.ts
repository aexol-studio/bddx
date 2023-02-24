import { uploadReports } from "@/api/api.js";
import { ModelTypes } from "@/zeus/index.js";
import { message, GLOBAL_CONFIG_FILE, loader } from "bddx-core";
import fs from "fs";
import inquirer from "inquirer";
import { Results, TEST_STATUS } from "./doTests.js";

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
      const arrayToSend: ModelTypes["UploadReportInput"] = {
        results: [],
        name: content.testStatus.savedTo.replace(".json", ""),
      };
      content.passedTests.map((test) => {
        arrayToSend.results.push({
          testPath: test.testPath,
          featureContent: test.featureContent,
          testContent: test.scenarioContent,
          scenario: test.scenarioTitle,
        });
      });
      content.failedTests.map((test) => {
        arrayToSend.results.push({
          testPath: test.testPath,
          featureContent: test.featureContent,
          scenario: test.scenarioTitle,
          testContent: test.scenarioContent,
          reasonOfFail: test.reasonOfFail,
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
        const spinner = loader({
          text: " Sending results",
          onFail: " Failed...",
          onSuccess: " Successfully sended all results",
        });
        try {
          const response = await uploadReports(arrayToSend, selected.key);
          if (!response) {
            message("Error occurred while uploading results.", "red");
            spinner.fail();
            return;
          }
          spinner.succeed();
          message(`Success upload results with id: ${response}.`, "blue");
          return;
        } catch {
          message("Cannot upload results now, try again.", "red");
          spinner.fail();
          return;
        }
      }
    } else {
      message("This results have status of unfinished.", "red");
      return;
    }
  } else {
    message("You provided wrong value into command line.", "red");
    return;
  }
};
