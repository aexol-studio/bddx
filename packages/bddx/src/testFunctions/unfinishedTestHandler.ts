import { JiraType, Results, TEST_STATUS } from "@/coreFunctions/index.js";
import { message } from "bddx-core";
import fs from "fs";
import { testHandler } from "./testHandler.js";

export const unfinishedTestHandler = async (
  outTestsPath: string,
  fileName: string,
  jira?: JiraType
) => {
  const testFilePath = `${outTestsPath}/${fileName}`;
  if (!fs.existsSync(testFilePath)) {
    message("Selected file does not exists", "red");
    return;
  }
  const results: Results = JSON.parse(
    fs.readFileSync(testFilePath).toString("utf-8")
  );

  if (results.testStatus?.status === TEST_STATUS.FINISHED) {
    message("Selected file is a save where all test were performed", "yellow");
    return;
  }

  const allRoutes = [...results.testStatus.testFilesRoutes];
  const restOfTests = allRoutes.splice(
    allRoutes.indexOf(results.testStatus.currentTestPath || "")
  );
  await testHandler(restOfTests, results, fileName, outTestsPath, jira);
};
