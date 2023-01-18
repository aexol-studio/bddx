import chalk from "chalk";
type Colors = keyof Pick<
  typeof chalk,
  | "bgBlue"
  | "bgBlueBright"
  | "bgGreen"
  | "bgMagenta"
  | "bgRed"
  | "bgRedBright"
  | "bgYellow"
  | "blue"
  | "blueBright"
  | "green"
  | "greenBright"
  | "magenta"
  | "red"
  | "redBright"
  | "yellow"
  | "yellowBright"
>;

export const message = (m: string, color: Colors) => {
  console.log(chalk[color](m));
};

const regex = (word: string) => new RegExp(`(?<!\\S)${word}(?!\\S)`, "g");

export const rebuildToGherkin = (val: string) => {
  return val
    .replaceAll(regex("Feature:"), chalk["yellow"]("Feature:"))
    .replaceAll(regex("Rule:"), chalk["red"]("Rule:"))
    .replaceAll(regex("Example:"), chalk["red"]("Example:"))
    .replaceAll(regex("Scenario:"), chalk["red"]("Scenario:"))
    .replaceAll(regex("Background:"), chalk["red"]("Background:"))
    .replaceAll(regex("Scenario Outline:"), chalk["red"]("Scenario Outline:"))
    .replaceAll(regex("Scenario Template:"), chalk["red"]("Scenario Template:"))
    .replaceAll(regex("Given"), chalk["blueBright"]("Given"))
    .replaceAll(regex("When"), chalk["blueBright"]("When"))
    .replaceAll(regex("Then"), chalk["blueBright"]("Then"))
    .replaceAll(regex("And"), chalk["blueBright"]("And"))
    .replaceAll(regex("But"), chalk["blueBright"]("But"));
};

export const messageWithContent = (
  m: string,
  content: string,
  color: Colors
) => {
  console.log(`${chalk[color](m)}${content}`);
};

export const calcTime = (m: string, color: Colors) => {
  console.time(chalk[color](m));
  return {
    end: () => console.timeEnd(chalk[color](m)),
  };
};
