#!/usr/bin/env node
import {
  initConfig,
  readConfig,
  GLOBAL_CONFIG_FILE,
} from "bddx-core/lib/config.js";
import { message } from "bddx-core/lib/console.js";
import yargs from "yargs";
import { performTests } from "bddx-core/lib/doTests.js";

process.on("SIGINT", function () {
  message("Exiting...", "redBright");
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
      yargs.option("init", {
        alias: "i",
        describe: "Init default DBBX config file",
        boolean: true,
      });
    },
    async (argv) => {
      if (argv.init) {
        message("Init config file", "blueBright");
        await initConfig({
          in: GLOBAL_CONFIG_FILE.in,
          out: GLOBAL_CONFIG_FILE.out,
        });
        message("Start performing tests1", "blueBright");
        performTests(GLOBAL_CONFIG_FILE.in, GLOBAL_CONFIG_FILE.out);
      } else {
        const config = readConfig("./bddx.json");
        message("Read config file", "blueBright");
        message("Start performing tests2", "blueBright");
        performTests(config.in, config.out);
      }
    }
  )
  .command(
    "init",
    "Init BDDX config",
    async (yargs) => {
      yargs.options({
        in: {
          default: GLOBAL_CONFIG_FILE.in,
          describe: "Folder with BDD files",
          type: "string",
        },
        out: {
          default: GLOBAL_CONFIG_FILE.out,
          describe: "Folder to output results of performed manual tests",
          type: "string",
        },
      });
    },
    async (argv) => {
      const args = argv as unknown as {
        in: string;
        out: string;
      };
      if ("in" in argv && "out" in argv) {
        await initConfig({
          in: args.in,
          out: args.out,
        });
      } else {
        message(
          "You need to give 2 input parameters of in and out directory",
          "red"
        );
      }
    }
  )
  .strict()
  .demandCommand()
  .parse();
