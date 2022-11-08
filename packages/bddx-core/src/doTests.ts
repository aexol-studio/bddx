import { getFeatureFilesPathsRecursive } from "./fsAddons.js";
import fs from "fs";
import { message } from "./console.js";

export const performTests = async (inPath: string, outPath: string) => {
  if (!fs.existsSync(inPath)) {
    throw new Error(`There is no input directory: ${inPath}`);
  }
  if (!fs.existsSync(outPath)) {
    fs.mkdirSync(outPath, { recursive: true });
    message(`Directory ${outPath} was created`, "greenBright");
  }
  const testFilesNames = getFeatureFilesPathsRecursive(inPath, ".feature");
  if (testFilesNames.length === 0) {
    message(`No .feature files found in input directory`, "yellowBright");
  } else {
    message(`.feature files founded`, "greenBright");
    for (const e of testFilesNames) {
      console.log(e);
    }
  }
};
