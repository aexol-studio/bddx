import { message } from "bddx-core";
import fs from "fs";
import inquirer from "inquirer";
import { Version3Client } from "jira.js";

export const doTests = async (
  testsPaths: string[],
  outPath: string,
  jira?: { client: Version3Client; projectName: string; issueTypeName: string }
) => {
  const results: Record<string, string> = {};
  const date = new Date().toISOString().split(".")[0];
  const fileName = `result-${date}.json`;

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
        results[file] = answers.message;
        fs.writeFileSync(
          `${outPath}/${fileName}`,
          JSON.stringify(results, null, 4)
        );
        if (jira && jira.client) {
          jira.client.issues
            .createIssue({
              fields: {
                issuetype: {
                  name: jira.issueTypeName,
                },
                project: { key: jira.projectName },
                summary: `Test ${file} failed at ${date}`,
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
  }
  if (results && Object.keys(results).length === 0) {
    message(`All tests passed`, "bgGreen");
  } else {
    message(
      `Result of all tests was saved as ${fileName} in ${outPath}`,
      "bgGreen"
    );
  }
};
