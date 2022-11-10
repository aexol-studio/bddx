import fs from "fs";
import { message } from "./console.js";
export const GLOBAL_CONFIG_FILE = {
  out: `./bddx/results`,
  in: "./bddx/tests",
};

export type ConfigFile = typeof GLOBAL_CONFIG_FILE;

export const readConfig = (path: string) => {
  if (!fs.existsSync(path)) {
    message(
      "No config for bddx please create one using init or create correct bddx.json",
      "red"
    );
    return undefined;
  }

  const config: ConfigFile = JSON.parse(fs.readFileSync(path).toString("utf8"));
  const errors: string[] = [];
  Object.keys(GLOBAL_CONFIG_FILE).forEach((key) => {
    const v = config[key as keyof ConfigFile];
    if (typeof v === "undefined" || v === null) {
      errors.push(
        `Invalid config file. Please include "${key}" in your config`
      );
    }
  });
  if (errors.length > 0) {
    message(errors.join("\n"), "red");
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
export const initConfig = async (values = GLOBAL_CONFIG_FILE) => {
  fs.writeFileSync("bddx.json", JSON.stringify(values, null, 4));
};
