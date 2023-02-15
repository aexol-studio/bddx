import { message } from "bddx-core";
import { Chain, ModelTypes } from "@/zeus/index.js";
import { JiraType } from "@/coreFunctions/index.js";
import { testResultsSelector } from "./selectors.js";

// const API_LOCAL = "http://localhost:8080/graphql";
const API_DEV = "https://bddx-api.azurewebsites.net/graphql";
// const API_PROD = "https://bddx-p-api.azurewebsites.net/graphql";

const chain = (option: "query" | "mutation", Key: string) =>
  Chain(API_DEV, {
    headers: {
      "Content-type": "application/json",
      Key,
    },
  })(option);

export const getReport = async (key: string) => {
  const response = await chain(
    "query",
    key
  )({
    cli: {
      getReport: {
        runs: {
          results: testResultsSelector,
        },
      },
    },
  });
  if (!response) {
    message("We cannot get this report right now.", "red");
    return;
  }
  return response.cli?.getReport.runs;
};

export const getReports = async (key: string) => {
  const response = await chain(
    "query",
    key
  )({
    cli: {
      getReports: {
        numberOfFailedResults: true,
        numberOfResults: true,
        numberOfRuns: true,
        projectId: true,
        projectName: true,
        reportId: true,
      },
    },
  });
  if (!response) {
    message("We cannot get this report right now.", "red");
    return;
  }
  return response.cli?.getReports;
};

export const updateReport = async (
  uploadReportInput: ModelTypes["UploadReportInput"],
  key: string
) => {
  const response = await chain(
    "mutation",
    key
  )({
    cli: {
      updateReport: [
        {
          uploadReportInput,
        },
        true,
      ],
    },
  });
  if (!response) {
    message("We cannot upload your reports to BDDX Cloud right now.", "red");
    return;
  }
  return response.cli?.updateReport;
};

export const uploadReports = async (
  uploadReportInput: ModelTypes["UploadReportInput"],
  key: string
) => {
  const response = await chain(
    "mutation",
    key
  )({
    cli: {
      uploadReport: [
        {
          uploadReportInput,
        },
        true,
      ],
    },
  });
  if (!response) {
    message("We cannot upload your reports to BDDX Cloud right now.", "red");
    return;
  }
  return response.cli?.uploadReport;
};

export const createJiraIssue = async (
  jira: JiraType,
  input: { scenario: string; description: string }
) => {
  const { description, scenario } = input;
  const { client, issueTypeName, projectName } = jira;
  if (jira && client) {
    await client.issues
      .createIssue({
        fields: {
          issuetype: {
            name: issueTypeName,
          },
          project: { key: projectName },
          summary: `Test ${scenario} failed at ${new Date()
            .toISOString()
            .split(".")[0]
            .replace(":", "-")}`,
          description,
        },
      })
      .catch(() => {
        message("Task was not created in Jira. Something went wrong", "red");
        return;
      });
  }
  message("Task was not created in Jira. Something went wrong", "red");
  return;
};
