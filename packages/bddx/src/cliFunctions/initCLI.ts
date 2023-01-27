import { initJira } from "@/coreFunctions/index.js";
import { GLOBAL_CONFIG_FILE, initConfig } from "bddx-core";
import inquirer from "inquirer";

export const initCLI = async () => {
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
};
