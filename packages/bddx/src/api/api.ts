import { message } from "bddx-core";
import { Chain, ModelTypes } from "@/zeus/index.js";
import { JiraType } from "@/coreFunctions/index.js";
import { testResultsSelector } from "./selectors.js";

const API_DEV =
  process.env.BDDX_BACKEND || "https://bddx-p-api.azurewebsites.net/graphql";

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
  updateReportInput: ModelTypes["UpdateReportInput"],
  key: string
) => {
  const response = await chain(
    "mutation",
    key
  )({
    cli: {
      updateReport: [
        {
          updateReportInput,
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
  try {
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
    return response.cli?.uploadReport;
  } catch (_error) {
    const error = _error as Error;
    const firstError = Object.values(error)[0];
    message(`\n${firstError.errors[0].message.split(":")[1].trim()}`, "red");
    return;
  }
};

export const createJiraIssue = async (
  jira: JiraType,
  input: { description: string; testContent: string; scenarioTitle: string }
) => {
  const { description, testContent, scenarioTitle } = input;
  const { client, issueTypeName, projectName } = jira;
  if (jira && client) {
    const task = await client.issues
      .createIssue({
        fields: {
          issuetype: {
            name: issueTypeName,
          },
          project: { key: projectName },
          summary: `${scenarioTitle}`,
          description: {
            version: 1,
            type: "doc",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    type: "text",
                    text: `Reason: ${description}`,
                    marks: [
                      {
                        type: "strong",
                      },
                    ],
                  },
                ],
              },
              {
                type: "codeBlock",
                attrs: {
                  language: "gherkin",
                },
                content: [
                  {
                    type: "text",
                    text: `Scenario: ${testContent.trimEnd()}`,
                  },
                ],
              },
            ],
          },
        },
      })
      .catch(() => {
        message("Task was not created in Jira. Something went wrong", "red");
        return;
      });
    if (!task) return;
    message("Task was created in Jira.", "green");
    return;
  }
  message("Task was not created in Jira. Something went wrong", "red");
  return;
};
