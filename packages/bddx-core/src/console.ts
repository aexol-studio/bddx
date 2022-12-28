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

export const messageWithoutLog = (m: string, color: Colors) => chalk[color](m);

export const message = (m: string, color: Colors) => {
  console.log(chalk[color](m));
};

export const rebuildToGherkin = (val: string) => {
  return val
    .replaceAll("Given", chalk["blueBright"]("Given"))
    .replaceAll("And", chalk["blueBright"]("And"))
    .replaceAll("When", chalk["blueBright"]("When"))
    .replaceAll("Then", chalk["blueBright"]("Then"))
    .replaceAll("And", chalk["blueBright"]("And"))
    .replaceAll("But", chalk["blueBright"]("But"));
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
