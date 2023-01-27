import { GraphQLTypes } from "@/zeus/index.js";

export const parseResultsIntoGherkin = (
  results: GraphQLTypes["TestResultInput"][]
) => {
  return results.map(
    (testContent) =>
      `Feature: ${testContent.featureContent}\n\nScenario: ${
        testContent.scenario
      }${testContent.testContent
        .split("\n")
        .map((o) => o.trim())
        .join("\n    ")}`
  );
};

export const parseResultIntoGherkin = (
  result: GraphQLTypes["TestResultInput"]
) => {
  return `Feature: ${result.featureContent}\n\nScenario: ${
    result.scenario
  }${result.testContent
    .split("\n")
    .map((o) => o.trim())
    .join("\n    ")}`;
};
