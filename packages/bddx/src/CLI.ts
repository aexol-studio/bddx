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
|_)  _|  _|  
|_) (_| (_| >< 
\n
`;

yargs(process.argv.slice(2))
  .usage(
    BDDX +
      "Perform and save BDD tests results. \n" +
      "Make run. \n" +
      "Watch directory with .feature files. \n" +
      "Then perform each test. \n"
  )
  .command(
    "$0",
    "the default command to run all bdd tests",
    {
      help: {
        describe: "bddx [command] --help",
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
    "Init BDDX config",
    {
      help: {
        describe: `This command will create for You simple bddx config, called "bddx.json". You can edit config as you needed.`,
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
    "Run BDDX test for failed test from BDDX cloud",
    {
      help: {
        describe: "INC",
      },
    },
    async () => await failedTestsCLI()
  )
  .command(
    "continue",
    "Start BDDX tests from output file where you did not went through al tests",
    {
      help: {
        describe:
          "This command allow to continue unfinished tests, saved in config `IN` path",
      },
    },
    async () => await continueTestsCLI()
  )
  .command(
    "jira",
    "Run BDDX tests with Jira integration",
    {
      help: {
        describe: "Run BDDX tests with Jira integration",
      },
    },
    async () => await jiraCLI()
  )
  .command(
    "jiraInit",
    "Init BDDX Jira integration config",
    {
      help: {
        describe: "Init BDDX Jira integration config",
      },
    },
    async () => await jiraCLIinit()
  )
  .command(
    "checkToken",
    "Check if Jira API Token is valid and set new if previous expired",
    {
      help: {
        describe:
          "Check if Jira API Token is valid and set new if previous expired",
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
