#!/usr/bin/env node
import { message } from "bddx-core";
import yargs from "yargs";
import {
  initCLI,
  cloudCLI,
  jiraCLI,
  jiraCLIinit,
  jiraCLIverifyToken,
  failedTestsCLI,
  continueTestsCLI,
  defaultCLI,
} from "@/cliFunctions/index.js";

process.on("SIGINT", () => {
  message("Exiting...(file with unsuccessful test was created)", "redBright");
  process.exit();
});

const BDDX = `
 _
|_)  _|  _| \\/ 
|_) (_| (_| /\\ 
`;

yargs(process.argv.slice(2))
  .usage(BDDX)
  .command(
    "$0",
    "The default command to run all BDD tests.",
    {
      help: {
        describe: "Command help bddx [command] --help",
      },
    },
    async () => {
      if (process.argv.length === 2) {
        await defaultCLI();
      }
      return;
    }
  )
  .command(
    "init",
    "Initialize BDDX configuration",
    {
      help: {
        describe: `This command will create a simple BDDX configuration file named "bddx.json". You can edit the config file as needed.`,
      },
    },
    async () => await initCLI()
  )
  .command(
    "cloud",
    "Run BDDX tests with BDDX cloud integration",
    {
      help: {
        describe:
          "To get project key You have to create an account on https://app.bddtests.com/. Then create project, and key.",
      },
    },
    async () => await cloudCLI()
  )
  .command(
    "failedTest",
    "Run all the failed BDDX tests.",
    {
      help: {
        describe:
          "This command will run all the failed BDDX tests in a folder.",
      },
    },
    async () => await failedTestsCLI()
  )
  .command(
    "continue",
    "Continue BDDX tests from the from the point where you left off.",
    {
      help: {
        describe:
          "This command allows you to continue unfinished tests from the output file, saved in the config `IN` path",
      },
    },
    async () => await continueTestsCLI()
  )
  .command(
    "jira",
    "Run BDDX tests integrated with Jira.",
    {
      help: {
        describe: "Run BDDX tests with the Jira integration.",
      },
    },
    async () => await jiraCLI()
  )
  .command(
    "jiraInit",
    "Initialize the BDDX Jira integration configuration.",
    {
      help: {
        describe:
          "This command lets you set up or configure the Jira integration",
      },
    },
    async () => await jiraCLIinit()
  )
  .command(
    "checkToken",
    "Check if the Jira API Token is valid or set a new one.",
    {
      help: {
        describe:
          "Check if the Jira API Token is valid or set a new one if the previous one has expired",
      },
    },
    async () => await jiraCLIverifyToken()
  )
  .help()
  .showHelpOnFail(true)
  .version()
  .strict()
  .strictCommands()
  .demandCommand()
  .parse();
