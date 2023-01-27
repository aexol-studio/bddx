import inquirer from "inquirer";
import { message, messageWithContent, rebuildToGherkin } from "bddx-core";
import { GraphQLTypes } from "@/zeus/index.js";
import { parseResultIntoGherkin } from "./testParsers.js";
import { JiraType } from "@/coreFunctions/index.js";

type newType = GraphQLTypes["TestResultInput"] & { resultId: string };

export const failedTestHandler = async (
  outTestsPath: string,
  fileName: string,
  jira?: JiraType
) => {
  const selected = await inquirer.prompt<{
    key: string;
  }>([
    {
      type: "input",
      name: "key",
      message: "Insert report_id from BDDX Cloud:",
    },
  ]);
  if (selected.key) {
    const _failedTest: GraphQLTypes["TestResultInput"][] = [
      {
        testPath: "./bdd/Pro/Graph/activeNode.feature",
        testContent:
          "Given User is in the schema graph view\n        And edit mode is on\n        And node is selected\n        And Schema has some directives\n\n        When User clicks add directives\n        And Selects the directives\n\n        Then directive is visible and implemented under the title",
        featureContent:
          "Easiliy create new fields and use node editor\n\n    The user can use edit mode of the active node",
        scenario: "User wants main type to implement directives",
        reasonOfFail:
          "mialem error, ze przeskakiwalo mi na edycje dyrekktywy po dodaniu/usunieciu z node. moze naprawione na localhoscie u Artura",
      },
    ];

    const newResults: newType[] = [];

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
          ...test,
          resultId: selected.key,
        });
      }
      if (answers.confirmation === "❌ Report issue" && answers.message) {
        newResults.push({
          ...test,
          reasonOfFail: answers.message,
          resultId: selected.key,
        });
      }
    }
    console.log(selected.key, newResults);
    return;
  } else {
    message("You provided wrong value into command line.", "red");
    return;
  }
};
