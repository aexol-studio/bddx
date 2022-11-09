import { message } from "bddx-core/lib/console.js";
import fs from "fs";
import inquirer from "inquirer";

type Results = Record<string, string>;

export const doTests = async (testsPaths: string[], outPath: string) => {
  const results: Results = {};
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
      }
    }
  }
  if (results && Object.keys(results).length === 0) {
    message(`All tests passed - result file will not be generated`, "bgGreen");
  } else {
    const fileName = `result-${new Date().toISOString()}.json`;
    fs.writeFileSync(
      `${outPath}/${fileName}`,
      JSON.stringify(results, null, 4)
    );
    message(
      `Result of all tests was saved as ${fileName} in ${outPath}`,
      "bgGreen"
    );
  }
};
