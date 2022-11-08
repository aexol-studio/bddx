import fs from "fs";
import path from "path";

export const fileRegex = /(.*)\.js$/;
const featureRegex = /(.*)\.feature$/;
const envRegex = /^\.env/;

export const isFeature = (p: string) => !!p.match(featureRegex);
export const isEnv = (p: string) => !!p.match(envRegex);
export const isDirectory = (p: string) => fs.statSync(p).isDirectory();

export const mayBeIndexFileOrWithoutExtension = (p: string) => {
  if (p.includes(".")) {
    return !p.split(".").pop()?.match(/[^/]*/gm);
  }
  return !p.match(/\/$/);
};

export const getPossibleFilePaths = (p: string) =>
  [
    ".ts",
    ".tsx",
    ".js",
    ".jsx",
    "/index.ts",
    "/index.tsx",
    "/index.js",
    "/index.jsx",
  ].map((e) => `${p}${e}`);
export const isStaticFile = (p: string) => !isFeature(p) && !isEnv(p);

export const mkFileDirSync = async (p: string) => {
  const dir = path.dirname(p);
  if (!fs.existsSync(dir)) {
    await fs.promises.mkdir(dir, { recursive: true });
  }
};

export const existsJSONOrDefaultSync = <T>(p: string, defaultValue: T) =>
  fs.existsSync(p)
    ? JSON.parse(fs.readFileSync(p).toString("utf-8"))
    : defaultValue;

export const fileWriteRecuirsiveAsync = async (
  p: string,
  data: string | Uint8Array
) => {
  await mkFileDirSync(p);
  fs.promises.writeFile(p, data);
};

export const fileWriteRecuirsiveIfContentDifferent = async (
  p: string,
  data: string
) => {
  await mkFileDirSync(p);
  if (fs.existsSync(p)) {
    const content = (await fs.promises.readFile(p)).toString("utf-8");
    if (content !== data) {
      return fs.promises.writeFile(p, data);
    }
  }
  return fs.promises.writeFile(p, data);
};

export const fileTouchSync = (p: string) => {
  const time = new Date();
  try {
    fs.utimesSync(p, time, time);
  } catch (err) {
    fs.closeSync(fs.openSync(p, "w"));
  }
};


export const getFeatureFilesPathsRecursive = (
  dir: string,
  extn: string,
  files?: string[],
  result?: string[],
  regex?: RegExp
): string[] => {
  files = files || fs.readdirSync(dir);
  result = result || [];
  regex = regex || new RegExp(`\\${extn}$`);

  for (let i = 0; i < files.length; i++) {
    const file = path.join(dir, files[i]);
    if (fs.statSync(file).isDirectory()) {
      try {
        result = getFeatureFilesPathsRecursive(file, extn, fs.readdirSync(file), result, regex);
      } catch (error) {
        continue;
      }
    } else {
      if (regex.test(file)) {
        if (result) result.push("./" + file);
        else result = ["./" + file];
      }
    }
  }
  return result;
};
