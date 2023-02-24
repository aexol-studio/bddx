import { GraphQLTypes, InputType, Selector } from "@/zeus/index.js";

export const testResultsSelector = Selector("TestResult")({
  featureContent: true,
  inherited: true,
  reasonOfFail: true,
  scenario: true,
  testContent: true,
  testPath: true,
});

export type ResultsType = InputType<
  GraphQLTypes["TestResult"],
  typeof testResultsSelector
>;
