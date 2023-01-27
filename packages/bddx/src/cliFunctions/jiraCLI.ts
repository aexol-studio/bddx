import {
  message,
  readConfig,
  checkConfigDirectories,
  initConfig,
  getTestsDirectories,
} from "bddx-core";
import conf from "conf";
import { Version3Client } from "jira.js";
import { doTests } from "@/coreFunctions/doTests.js";
import { checkJiraToken, initJira } from "@/coreFunctions/index.js";

export const jiraCLIverifyToken = async () => {
  const result = await checkJiraToken();
  if (result) {
    message("Jira API token is valid", "green");
  } else message("Jira API token is not valid", "red");
};

export const jiraCLIinit = async () => {
  const config = readConfig("./bddx.json");
  if (config) {
    await checkConfigDirectories(config);
    const jiraData = await initJira();
    if (jiraData) {
      await initConfig({ ...config, ...jiraData });
    }
  }
};

export const jiraCLI = async () => {
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
};
