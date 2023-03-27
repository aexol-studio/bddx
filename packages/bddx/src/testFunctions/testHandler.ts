import fs from "fs";
import inquirer from "inquirer";
import { message, messageWithContent, rebuildToGherkin } from "bddx-core";
import { createJiraIssue } from "@/api/index.js";
import { JiraType, Results, TEST_STATUS } from "@/coreFunctions/index.js";

export const testHandler = async (
  testsPaths: string[],
  results: Results,
  fileName: string,
  outPath: string,
  jira?: JiraType
) => {
  for (const file of testsPaths) {
    const content = await fs.promises
      .readFile(file, "utf-8")
      .catch((e) => message(e.message, "bgRed"));
    if (content) {
      message(`Test file content in ${file}`, "blueBright");

      const splittedByScenario: string[] = content.split("Scenario:");
      for (
        let i = results.testStatus.currentScenario
          ? results.testStatus.currentScenario + 1
          : 1;
        i < splittedByScenario.length;
        i++
      ) {
        const splitSplittedScenario = splittedByScenario[i].split("\n");
        const featureContent = splittedByScenario[0]
          .split("Feature:")[1]
          .trim();
        const scenarioTitle: string = splitSplittedScenario[0]
          .replaceAll("\r", "")
          .trim();
        splitSplittedScenario.shift();
        const scenarioContent: string = splitSplittedScenario.join("\n").trim();
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
        const answers = await inquirer.prompt<{
          confirmation: "✅ Pass" | "❌ Report issue";
          message?: string;
        }>([
          {
            type: "list",
            name: "confirmation",
            message: "What to do with this Scenario?",
            choices: ["✅ Pass", "❌ Report issue"],
            default: `✅ Pass`,
          },
          {
            type: "input",
            name: "message",
            message: "Type what gone wrong in Scenario:",
            when: (answers) => answers.confirmation === "❌ Report issue",
          },
        ]);
        if (answers.confirmation === "✅ Pass") {
          results.passedTests = [
            ...results.passedTests,
            {
              testPath: file,
              scenarioTitle,
              scenarioContent,
              featureContent,
            },
          ];
          if (i === splittedByScenario.length - 1) {
            results.testStatus.currentScenario = 0;
          } else {
            results.testStatus.currentScenario = i;
          }
          fs.writeFileSync(
            `${outPath}/${fileName}`,
            JSON.stringify(results, null, 4)
          );
        }

        if (answers.confirmation === "❌ Report issue" && answers.message) {
          results.failedTests = [
            ...results.failedTests,
            {
              testPath: file,
              reasonOfFail: answers.message,
              scenarioTitle,
              scenarioContent,
              featureContent,
            },
          ];
          if (i === splittedByScenario.length - 1) {
            results.testStatus.currentScenario = 0;
          } else {
            results.testStatus.currentScenario = i;
          }
          fs.writeFileSync(
            `${outPath}/${fileName}`,
            JSON.stringify(results, null, 4)
          );
          if (jira)
            await createJiraIssue(jira, {
              description: answers.message,
              testContent: splittedByScenario[i],
              scenarioTitle,
            });
        }
      }
    }

    if (testsPaths.indexOf(file) === testsPaths.length - 1) {
      results.testStatus = {
        savedTo: fileName.replace(".json", ""),
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
  if (results && Object.keys(results).length === 0) {
    message(`All tests passed`, "bgGreen");
  } else {
    message(`End of test files`, "blue");
  }
};
