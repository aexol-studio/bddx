#!/usr/bin/env node
import { initConfig } from "bddx-core/lib/config.js";
import { message } from "bddx-core/lib/console.js";
import yargs from "yargs";

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
      yargs.option("build", {
        alias: "b",
        describe: "Build project",
        boolean: true,
      });
    },
    async (argv) => {
      if (argv.build) {
        // await build();
        console.log(argv);
      } else {
        // await watch();
      }
    }
  )
  .command(
    "init",
    "Init BDDX config",
    async (yargs) => {
      yargs.options({
        in: {
          default: "./content",
          describe: "Folder with markdown files",
          type: "string",
        },
        out: {
          default: "./src",
          describe: "Folder to output generated markdown.ts file",
          type: "string",
        },
        markdownToHtml: {
          default: false,
          describe: "Boolean to active markdown conversion",
          type: "boolean",
        },
      });
    },
    async (argv) => {
      const args = argv as unknown as {
        in: string;
        out: string;
        markdownToHtml: boolean;
      };
      console.log(args);
      if ("in" in argv && "out" in argv) {
        await initConfig({
          in: args.in,
          out: args.out,
        });
      }
    }
  )
  .strict()
  .demandCommand()
  .parse();
