import { cloudIntegration } from "@/coreFunctions/index.js";
import { getResultsDirectories, message, readConfig } from "bddx-core";

export const cloudCLI = async () => {
  const config = readConfig("./bddx.json");
  if (config) {
    const resultsRoutes = getResultsDirectories(config.out);
    if (resultsRoutes.length > 0) {
      await cloudIntegration(resultsRoutes);
    }
  } else {
    message("Invalid BDDX config", "yellow");
    return;
  }
};
