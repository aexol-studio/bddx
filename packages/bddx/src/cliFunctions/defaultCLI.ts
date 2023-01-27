import {
  message,
  getTestsDirectories,
  readConfig,
  checkConfigDirectories,
} from "bddx-core";
import { doTests } from "@/coreFunctions/doTests.js";

export const defaultCLI = async () => {
  const config = readConfig("./bddx.json");
  if (config) {
    message(
      `Read config: tests files are in ${config.in} and result of tests will be saved in ${config.out}`,
      "blueBright"
    );
    await checkConfigDirectories(config);
    const fileRoutes = getTestsDirectories(config.in);
    if (fileRoutes.length > 0) {
      await doTests(fileRoutes, config.out);
    }
  }
};
