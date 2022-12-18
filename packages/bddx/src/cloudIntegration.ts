// import { message } from "bddx-core";
import { message } from "bddx-core";
import fs from "fs";
import { Results } from "./doTests.js";
import { Chain, ModelTypes } from "./zeus/index.js";

const chain = (option: "query" | "mutation") =>
  Chain("https://bddx-api.azurewebsites.net/graphql", {
    headers: {
      "Content-type": "application/json",
      Key: "----",
    },
  })(option);

const uploadReports = async (
  uploadReportInput: ModelTypes["UploadReportInput"]
) => {
  const response = await chain("mutation")({
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

export const cloudIntegration = async (resultsPaths: string[]) => {
  const resultsContent = resultsPaths.map((path) => {
    const content = JSON.parse(fs.readFileSync(path).toString("utf-8"));
    return {
      path,
      content,
    };
  });
  const arrayToSend: ModelTypes["UploadReportInput"] = { results: [] };
  resultsContent.map((o) => {
    const content: Results = JSON.parse(fs.readFileSync(o.path).toString());
    content.failedTests.map((test) => {
      const testContent = fs.readFileSync(test.testPath).toString();
      const feature = testContent.split("\n")[0].replace("\r", "");
      arrayToSend.results.push({
        testPath: test.testPath,
        reasonOfFail: test.reasonOfFail,
        feature: feature,
        testContent: testContent,
      });
    });
  });
  if (arrayToSend.results.length) {
    console.log(arrayToSend.results);
    const response = await uploadReports({ results: arrayToSend.results });
    if (!response) {
      message("Error", "red");
      return;
    }
    message(`Success ${response}`, "blue");
  }
};
