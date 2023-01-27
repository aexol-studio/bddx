import fs from "fs";
import { message } from "bddx-core";
import { Results, TEST_STATUS } from "@/coreFunctions/doTests.js";

export const getFailedTestsNames = async (outPath: string) => {
  if (!fs.existsSync(outPath)) {
    message("Output path does not exists", "red");
    return;
  }
  const fileNames: string[] = [];
  fs.readdirSync(outPath).forEach((file) => {
    const fileContent: Results = JSON.parse(
      fs.readFileSync(outPath + "/" + file).toString("utf8")
    );
    if (file.endsWith(".json") && fileContent.failedTests.length > 0) {
      fileNames.push(file);
    }
  });
  return fileNames;
};

export const getUnfinishedTestsNames = async (outPath: string) => {
  if (!fs.existsSync(outPath)) {
    message("Output path does not exists", "red");
    return;
  }
  const fileNames: string[] = [];
  fs.readdirSync(outPath).forEach((file) => {
    const fileContent: Results = JSON.parse(
      fs.readFileSync(outPath + "/" + file).toString("utf8")
    );
    if (
      fileContent.testStatus.status === TEST_STATUS.UNFINISHED &&
      file.endsWith(".json")
    ) {
      fileNames.push(file);
    }
  });
  return fileNames;
};
