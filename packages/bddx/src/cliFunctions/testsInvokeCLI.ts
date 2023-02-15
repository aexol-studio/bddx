import {
  GLOBAL_CONFIG_FILE,
  message,
  readConfig,
  checkConfigDirectories,
} from "bddx-core";
import { failedTestHandler } from "@/testFunctions/failedTestHandler.js";
import {
  getUnfinishedTestsNames,
  unfinishedTestHandler,
} from "@/testFunctions/index.js";
import inquirer from "inquirer";
import { Version3Client } from "jira.js";
import conf from "conf";
import { checkJiraToken } from "@/coreFunctions/index.js";

export const failedTestsCLI = async () => {
  const config = readConfig("./bddx.json");
  if (config) {
    await checkConfigDirectories(config);
    await failedTestHandler();
  }
};

export const continueTestsCLI = async () => {
  const config = readConfig("./bddx.json");
  if (config) {
    message(
      `Read config: tests files are in ${config.in} and result of tests will be saved in ${config.out}`,
      "blueBright"
    );
    await checkConfigDirectories(config);
    const unfinished = await getUnfinishedTestsNames(config.out);
    if (!unfinished || unfinished.length === 0) {
      message("There are no unfinished BDDX files", "yellow");
      return;
    } else if (unfinished.length > 0) {
      const selected = await inquirer.prompt<{
        path: string;
        withJira: boolean;
      }>([
        {
          type: "list",
          name: "path",
          choices: unfinished,
          message: "Select file of unfinished BDDX session",
          default: GLOBAL_CONFIG_FILE.in,
        },
        {
          type: "confirm",
          name: "withJira",
          message: "Do you want to run rest of tests with Jira integration?",
        },
      ]);
      if (selected.withJira) {
        const confi = new conf.default();
        const mail = confi.get("bddxJ.mail") as string;
        const token = confi.get("bddxJ.token") as string;
        const configJira = readConfig("./bddx.json", true);
        if (
          mail &&
          token &&
          configJira &&
          "organizationName" in configJira &&
          "projectName" in configJira &&
          "issueTypeName" in configJira
        ) {
          const result = await checkJiraToken();
          if (!result) {
            message(
              "Jira API token is not valid. Run 'npx bddx checkToken' for repair",
              "red"
            );
            return;
          }
          const saferToken = confi.get("bddxJ.token") as string;
          const client = new Version3Client({
            host: `https://${configJira.organizationName}`,
            authentication: {
              basic: {
                email: mail,
                apiToken: saferToken,
              },
            },
          });

          await unfinishedTestHandler(config.out, selected.path, {
            client,
            issueTypeName: configJira.issueTypeName,
            projectName: configJira.projectName,
          });
        }
      } else {
        await unfinishedTestHandler(config.out, selected.path);
      }
    }
  }
};
