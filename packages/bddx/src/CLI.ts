#!/usr/bin/env node
import {
  initConfig,
  readConfig,
  checkConfigDirectories,
  GLOBAL_CONFIG_FILE,
  message,
  getTestsDirectories,
  getResultsDirectories,
  // messageWithoutLog,
} from "bddx-core";
import {
  doTests,
  doUnfinishedTest,
  getUnfinishedTestsNames,
} from "./doTests.js";
import yargs from "yargs";
import { Version3Client } from "jira.js";
import inquirer from "inquirer";
import { checkJiraToken, initJira } from "./initJira.js";
import conf from "conf";
import { cloudIntegration } from "./cloudIntegration.js";

process.on("SIGINT", () => {
  message("Exiting...(file with unsuccessful test was created)", "redBright");
  process.exit();
});

yargs(process.argv.slice(2))
  .usage(
    `BDDX 🤯 - Perform and save BDD tests results. Run to watch directory with .feature files and perform each test`
  )
  .command("$0", "the default command to run all bdd tests", async () => {
    const config = readConfig("./bddx.json");
    if (config) {
      message(
        `Read config: tests files are in ${config.in} and result of tests will be saved in ${config.out}`,
        "blueBright"
      );
      await checkConfigDirectories(config);
      const fileRoutes = getTestsDirectories(config.in);
      if (fileRoutes.length > 0) {
        await doTests(fileRoutes, config.out);
      }
    }
  })
  .command("cloud", "Run bddx tests with BDDX Cloud integration", async () => {
    const config = readConfig("./bddx.json");
    if (config) {
      const resultsRoutes = getResultsDirectories(config.out);
      if (resultsRoutes.length > 0) {
        await cloudIntegration(resultsRoutes);
      }
    } else {
      message("Invalid BDDX config", "yellow");
    }

    return;
  })
  .command("jira", "Run bddx tests with Jira integration", async () => {
    const confi = new conf.default();
    const mail = confi.get("bddxJ.mail") as string;
    const token = confi.get("bddxJ.token") as string;
    const config = readConfig("./bddx.json", true);
    if (
      mail &&
      token &&
      config &&
      "organizationName" in config &&
      "projectName" in config &&
      "issueTypeName" in config
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
        host: `https://${config.organizationName}`,
        authentication: {
          basic: {
            email: mail,
            apiToken: saferToken,
          },
        },
      });
      message(
        `Read config: tests files are in ${config.in} and result of tests will be saved in ${config.out}`,
        "blueBright"
      );
      await checkConfigDirectories(config);
      const fileRoutes = getTestsDirectories(config.in);
      if (fileRoutes.length > 0) {
        await doTests(fileRoutes, config.out, {
          client,
          issueTypeName: config.issueTypeName,
          projectName: config.projectName,
        });
      }
    } else {
      message("Invalid jira BDDX config - use bddx jiraInit command", "yellow");
    }
  })
  .command("init", "Init BDDX config", async () => {
    const directories = await inquirer.prompt<{
      in: string;
      out: string;
      withJira: boolean;
    }>([
      {
        type: "input",
        name: "in",
        message: "Folder directory with BDD files",
        default: GLOBAL_CONFIG_FILE.in,
      },
      {
        type: "input",
        name: "out",
        message: "Folder directory to output results of performed manual tests",
        default: GLOBAL_CONFIG_FILE.out,
      },
      {
        type: "confirm",
        name: "withJira",
        message: "Do you want to integrate your JIRA project with BDDX?",
        default: false,
      },
    ]);
    if (directories.withJira) {
      const jiraData = await initJira();
      if (jiraData) {
        await initConfig({
          in: directories.in,
          out: directories.out,
          ...jiraData,
        });
      }
    } else {
      await initConfig({
        in: directories.in,
        out: directories.out,
      });
    }
  })
  .command("jiraInit", "Init BDDX Jira integration config ", async () => {
    const config = readConfig("./bddx.json");
    if (config) {
      await checkConfigDirectories(config);
      const jiraData = await initJira();
      if (jiraData) {
        await initConfig({ ...config, ...jiraData });
      }
    }
  })
  .command(
    "continue",
    "Start BDDX tests from output file where you did not went through al tests",
    async () => {
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
              message:
                "Do you want to run rest of tests with Jira integration?",
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

              await doUnfinishedTest(config.out, selected.path, {
                client,
                issueTypeName: configJira.issueTypeName,
                projectName: configJira.projectName,
              });
            }
          } else {
            await doUnfinishedTest(config.out, selected.path);
          }
        }
      }
    }
  )
  .command(
    "checkToken",
    "Check if Jira API Token is valid and set new if previous expired",
    async () => {
      const result = await checkJiraToken();
      result
        ? message("Jira API token is valid", "green")
        : message("Jira API token is not valid", "red");
    }
  )
  .strict()
  .demandCommand()
  .parse();
