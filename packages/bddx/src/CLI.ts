#!/usr/bin/env node
import {
  initConfig,
  readConfig,
  checkConfigDirectories,
  GLOBAL_CONFIG_FILE,
  message,
  getTestsDirectories,
} from "bddx-core";
import {
  doTests,
  doUnfinishedTest,
  getUnfinishedTestsNames,
} from "@/doTests.js";
import yargs from "yargs";
import { Version3Client } from "jira.js";
import inquirer from "inquirer";
import { initJira, loginJira } from "@/initJira.js";
import conf from "conf";
import dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

process.on("SIGINT", () => {
  message("Exiting...(file with unsuccessful test was created)", "redBright");
  process.exit();
});

yargs(process.argv.slice(2))
  .usage(
    `BDDX 🤯 - Perform and save BDD tests results. Run to watch directory with .feature files and perform each test`
  )
  .command(
    "$0",
    "the default command",
    (yargs) => {
      yargs.option("jira", {
        alias: "j",
        describe: "Run with Jira from config",
        type: "boolean",
        default: false,
      });
    },
    async (argv) => {
      // piotr@aexol.com
      // 7P6fg8mPYv8G0EvJmmxx2B21
      //      aexoldev.atlassian.net
      if (argv.jira) {
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
          const client = new Version3Client({
            host: `https://${config.organizationName}`,
            authentication: {
              basic: {
                email: mail,
                apiToken: token,
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
          message(
            "Invalid jira BDDX config - use bddx jiraInit command",
            "yellow"
          );
        }
      } else {
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
      }
    }
  )
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
      //////////////////no jira integration yet
      const config = readConfig("./bddx.json");
      if (config) {
        message(
          `Read config: tests files are in ${config.in} and result of tests will be saved in ${config.out}`,
          "blueBright"
        );
        await checkConfigDirectories(config);
        const unfinished = await getUnfinishedTestsNames(config.out);
        if (unfinished) {
          const selected = await inquirer.prompt<{
            path: string;
          }>([
            {
              type: "list",
              name: "path",
              choices: unfinished,
              message: "Select file of unfinished BDDX session",
              default: GLOBAL_CONFIG_FILE.in,
            },
          ]);
          await doUnfinishedTest(config.out, selected.path);
        } else {
          message("There are no unfinished BDDX files", "yellow");
        }
      }
    }
  )
  .command("login", "Log in to Jira and get your token", async () => {
    await loginJira();
  })
  .strict()
  .demandCommand()
  .parse();
