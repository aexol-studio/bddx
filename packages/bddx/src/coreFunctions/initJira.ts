import inquirer from "inquirer";
import { message, readConfig } from "bddx-core";
import conf from "conf";
import { Version3Client } from "jira.js";

export type JiraType = {
  client: Version3Client;
  projectName: string;
  issueTypeName: string;
};

export const initJira = async () => {
  const answers = await inquirer.prompt<{
    mail: string;
    apiToken: string;
    organizationName: string;
  }>([
    {
      type: "input",
      name: "mail",
      message:
        "Type your email for JIRA account in project that you want to create issues",
    },
    {
      type: "input",
      name: "apiToken",

      message:
        "You can create API token at\n https://id.atlassian.com/manage-profile/security/api-tokens \nType your API token from your JIRA. ",
    },
    {
      type: "input",
      name: "organizationName",
      message:
        "Type your organization name url, e.g. 'my-organization.atlassian.net'",
    },
  ]);
  message(
    "Organization name will be saved in bddx.json configuration file.\nMail and token will be saved locally on your machine so you can use this credentials in all future projects with BDDX package !!!\n To change them just use init command again",
    "green"
  );
  const config = new conf.default({ projectName: "BDDX" });
  config.set("bddxJ.mail", answers.mail);
  config.set("bddxJ.token", answers.apiToken);

  const client = new Version3Client({
    host: `https://${answers.organizationName}`,
    authentication: {
      basic: {
        email: answers.mail,
        apiToken: answers.apiToken,
      },
    },
  });
  const projects = await client.projects.getAllProjects();

  if (projects.length >= 1) {
    const projectName = await inquirer.prompt<{
      name: string;
    }>([
      {
        type: "list",
        name: "name",
        choices: projects.map((p) => p.key),
        message: "Select project for testing in selected organization",
      },
    ]);

    const project = await client.projects
      .getProject({
        projectIdOrKey: projectName.name,
      })
      .catch(() =>
        message(
          "Something went wrong. Can not access types of issues in selected Jira project",
          "red"
        )
      );
    if (project) {
      const issueTypes =
        project.issueTypes && project.issueTypes.map((i) => i.name);

      if (issueTypes && issueTypes.length > 0) {
        const selectedIssueType = await inquirer.prompt<{
          type: string;
        }>([
          {
            type: "list",
            name: "type",
            message:
              "As what type of ticked in your Jira project reported failed tests should be created?\nPlease select issue type that represent task or bug.",
            choices: issueTypes,
          },
        ]);
        return {
          organizationName: answers.organizationName,
          projectName: projectName.name,
          issueTypeName: selectedIssueType.type,
        };
      }
    }
  } else {
    message(
      "Something went wrong. Can not access data in selected Jira project.\nMaybe credentials are incorrect or API token expired.",
      "red"
    );
  }
};

export const checkJiraToken = async (): Promise<boolean> => {
  const con = new conf.default({ projectName: "BDDX" });
  const mail = con.get("bddxJ.mail") as string;
  const token = con.get("bddxJ.token") as string;
  const config = readConfig("./bddx.json", true);
  let success = !!config && !!mail && !!token;
  if (config && "organizationName" in config) {
    const testClient = new Version3Client({
      host: `https://${config.organizationName}`,
      authentication: {
        basic: {
          email: mail,
          apiToken: token,
        },
      },
    });
    const project = await testClient.projects
      .getProject({
        projectIdOrKey: config.projectName,
      })
      .catch(() => {
        message(
          "Something went wrong. Can not access project from config. Check if API token exists on your Jira account",
          "red"
        );
      });
    if (!(project && project.key === config.projectName)) {
      success = false;
    }
  } else {
    message(
      "Something went wrong. Can not access types of issues in selected Jira project",
      "red"
    );
    success = false;
  }
  if (success) {
    return success;
  } else {
    if (!success && config && "organizationName" in config) {
      message(
        `Your Jira config: mail: ${mail},\n organization: ${config.organizationName},\n project: ${config.projectName},\n issue type: ${config.issueTypeName}`,
        "yellow"
      );
      const answers = await inquirer.prompt<{
        apiToken: string;
      }>([
        {
          type: "input",
          name: "apiToken",
          message:
            "You can create API token at\n https://id.atlassian.com/manage-profile/security/api-tokens \nType your new API token from your JIRA. ",
        },
      ]);
      con.set("bddxJ.token", answers.apiToken);
      const retry = await checkJiraToken();
      return retry;
    }
  }
  return false;
};
