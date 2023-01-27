import fs from "fs";
import { message } from "./console.js";

export type ConfigFile = {
  out: string;
  in: string;
};
export type ConfigJiraFile = {
  organizationName: string;
  projectName: string;
  issueTypeName: string;
  out: string;
  in: string;
};

export const GLOBAL_CONFIG_FILE: ConfigFile = {
  out: `./bddx/results`,
  in: "./bddx/tests",
};

export const EXAMPLE_JIRA_CONFIG_FILE: ConfigJiraFile = {
  out: `./bddx/results`,
  in: "./bddx/tests",
  organizationName: "https://organizationName.atlassian.net/",
  projectName: "Project",
  issueTypeName: "Task",
};

export const readConfig = (
  path: string,
  withJira = false
): ConfigJiraFile | ConfigFile | undefined => {
  if (!fs.existsSync(path)) {
    withJira
      ? message(
          "No config for bddx please create one using jiraInit command or create correct bddx.json",
          "red"
        )
      : message(
          "No config for bddx please create one using init command or create correct bddx.json",
          "red"
        );
    return undefined;
  }
  const config = JSON.parse(fs.readFileSync(path).toString("utf8"));
  const errors: string[] = [];
  Object.keys(withJira ? EXAMPLE_JIRA_CONFIG_FILE : GLOBAL_CONFIG_FILE).forEach(
    (key) => {
      const v = config[key as keyof ConfigFile];
      if (typeof v === "undefined" || v === null) {
        errors.push(
          `Invalid config file. Please include "${key}" in your config`
        );
      }
    }
  );
  if (errors.length > 0) {
    message(errors.join("\n"), "red");
    return undefined;
  }
  return config;
};

export const checkConfigDirectories = async (config: ConfigFile) => {
  if (!fs.existsSync(config.in)) {
    fs.mkdirSync(config.in, { recursive: true });
    message(
      "In directory was not present. It was created automatically",
      "yellow"
    );
  }
  if (!fs.existsSync(config.out)) {
    fs.mkdirSync(config.out, { recursive: true });
    message(
      "Out directory was not present. It was created automatically",
      "yellow"
    );
  }
};
export const initConfig = async (
  values: ConfigJiraFile | ConfigFile = GLOBAL_CONFIG_FILE
) => {
  fs.writeFileSync("bddx.json", JSON.stringify({ ...values }, null, 4));
};
