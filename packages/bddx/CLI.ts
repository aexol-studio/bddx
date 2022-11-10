#!/usr/bin/env node
import {
  initConfig,
  readConfig,
  checkConfigDirectories,
  GLOBAL_CONFIG_FILE,
} from "bddx-core/lib/config.js";
import { message } from "bddx-core/lib/console.js";
import { getTestsDirectories } from "bddx-core/lib/fsAddons.js";
import { doTests } from "@/src/doTests.js";
import yargs from "yargs";

process.on("exit", () => {
  message(
    "Exiting...(file with unsuccessful test was created if there were any)",
    "redBright"
  );
});
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
      }
      const config = readConfig("./bddx.json");
      if (config) {
        message(
          `Read config: tests files are in ${config.in} and result of tests will be saved in ${config.out}`,
          "blueBright"
        );
        await checkConfigDirectories(config);
        const fileRoutes = getTestsDirectories(config.in);
        if (fileRoutes.length > 0) {
          doTests(fileRoutes, config.out);
        }
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
