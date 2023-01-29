import inquirer from "inquirer";
import { message, messageWithContent, rebuildToGherkin } from "bddx-core";
import { parseResultIntoGherkin } from "./testParsers.js";
import { getReport, getReports, updateReport } from "@/api/api.js";
import { ResultsType } from "@/api/selectors.js";

export const failedTestHandler = async () => {
  const FirstSelected = await inquirer.prompt<{
    method: "I know failed report ID" | "List failed tests on BDDX project key";
  }>([
    {
      type: "list",
      name: "method",
      message: "Pick method:",
      choices: [
        "I know failed report ID",
        "List failed tests on BDDX project key",
      ],
      default: `I know failed report ID`,
    },
  ]);

  if (FirstSelected.method === "I know failed report ID") {
    const SecondSelected = await inquirer.prompt<{
      key: string;
    }>([
      {
        type: "input",
        name: "key",
        message: "Insert report_id from BDDX Cloud:",
      },
    ]);
    if (!SecondSelected.key) {
      message("You provided wrong value into command line.", "red");
      return;
    } else await doFailedTestFunction(SecondSelected.key);
  } else if (FirstSelected.method === "List failed tests on BDDX project key") {
    const SecondSelected = await inquirer.prompt<{
      key: string;
    }>([
      {
        type: "input",
        name: "key",
        message: "Insert BDDX project key from BDDX Cloud:",
      },
    ]);
    if (SecondSelected.key) {
      const reports = await getReports(SecondSelected.key);
      if (!reports) {
        message("There is no project with this key", "red");
        return;
      }
      const ThirdSelected = await inquirer.prompt<{
        project: string;
      }>([
        {
          type: "list",
          name: "project",
          choices: reports.map(
            (o) =>
              `Project name: ${o.project.name} - with ${o.results.length} failed tests - reportID: ${o._id}`
          ),
          message: "Select file of unfinished BDDX session",
          default: `Project name: ${reports[0].project.name} - with ${reports[0].results.length} failed tests`,
        },
      ]);
      if (ThirdSelected.project) {
        const lookingFor = ThirdSelected.project.split("reportID:")[1].trim();
        await doFailedTestFunction(lookingFor);
      }
    } else {
      message("You provided wrong value into command line.", "red");
      return;
    }
  } else {
    message("You provided wrong value into command line.", "red");
    return;
  }
};

const doFailedTestFunction = async (key: string) => {
  if (key) {
    const report = await getReport(key);
    if (!report) {
      message("There is no report with this id", "red");
      return;
    }
    const _failedTest: ResultsType[] = report.results;
    const newResults: ResultsType[] = [];
    for (const test of _failedTest) {
      const failedTest = parseResultIntoGherkin(test);
      console.log(rebuildToGherkin(failedTest), "red");
      messageWithContent(
        "\nPrevious reason of fail: ",
        `${test.reasonOfFail}\n`,
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
        newResults.push({
          featureContent: test.featureContent,
          scenario: test.scenario,
          testContent: test.testContent,
          testPath: test.testPath,
          inherited: key,
        });
      }
      if (answers.confirmation === "❌ Report issue" && answers.message) {
        newResults.push({
          ...test,
          reasonOfFail: answers.message,
          inherited: key,
        });
      }
    }
    const response = await updateReport({ results: newResults }, key);
    if (!response) {
      message("Error occurred when sending updated report", "red");
      return;
    }
    message("Success, updated report just landed on BDDX cloud", "green");
    return;
  } else {
    message("You provided wrong value into command line.", "red");
    return;
  }
};
