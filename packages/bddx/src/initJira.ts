import inquirer from "inquirer";
import { message } from "bddx-core";
import conf from "conf";
import { Version3Client } from "jira.js";
import express from "express";
import open from "open";
import fetch from "node-fetch";
// const dateDelta = (date1: Date, date2: Date) => {
//   const d1 = date1.getTime();
//   const d2 = date2.getTime();
//   const secDiff = Math.floor((d2 - d1) / 1000);
//   const hoursDiff = secDiff / 3600.0;
//   return hoursDiff;
// };

export const loginJira = async () => {
  const YOUR_USER_BOUND_VALUE = "AAAA";
  await open(
    `https://auth.atlassian.com/authorize?audience=api.atlassian.com&client_id=p2Zl57WIWDRKDEProBxyWt1GIz0EAfT6&scope=write%3Ajira-work%20read%3Ajira-work&redirect_uri=http%3A%2F%2Flocalhost%3A2137%2Fapi%2Fjira-callback&state=${YOUR_USER_BOUND_VALUE}&response_type=code&prompt=consent`
  );
  let x: { access_token: string } = { access_token: "" };
  const app = express();
  const server = app.listen(2137);
  app.get("/api/jira-callback", async (req) => {
    const { code } = req.query;
    if (code) {
      const responseToken = await fetch(
        "http://localhost:3000/api/jira-callback",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ code }),
        }
      );
      const responseJSON = (await responseToken.json()) as {
        access_token: string;
      };
      x = responseJSON;
      server.close();
    }
  });
  // if (x.access_token !== "") {
  //   const client = new Version3Client({
  //     host: `https://aexoldev.atlassian.net/`,
  //     authentication: {
  //       oauth2: { accessToken: x.access_token },
  //     },
  //   });
  //   const a = await client.projects.getAllProjects();
  //   console.log(a);
  // }
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
  const config = new conf.default();
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
