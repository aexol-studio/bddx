# BDDx [![NPM Version](https://img.shields.io/npm/v/bddx.svg?style=flat)](https://www.npmjs.com/package/bddx) [![NPM Version](https://img.shields.io/github/checks-status/aexol-studio/bddx/main)](https://www.npmjs.com/package/bddx) [![NPM Version](https://img.shields.io/github/last-commit/aexol-studio/bddx)](https://github.com/aexol-studio/bddx)

Inspired by generative programming and weed :). Behavior driven development CLI

![Alt Text](sandbox/mdtx-nextjs-example/public/PresentationOfMDtx.gif)

# What is BDDx?

- Write tests in Gherkin, Cucumber's simply structured plain-text language
- Upload BDD test files in bulk,
- Run tests to execute them line by line for all your files
- Get a detailed summary on **what** failed and **why**
- Failed tests can be made to automatically result in a Jira task or Github issue to automate the fixing process

# What we serve?

## [![GitHub package.json version (subfolder of monorepo)](https://img.shields.io/github/package-json/v/aexol-studio/bddx?color=yellow&filename=%2Fpackages%2Fbddx%2Fpackage.json&label=CLI&style=for-the-badge)](https://github.com/aexol-studio/bddx) | [![GitHub package.json version (subfolder of monorepo)](https://img.shields.io/github/package-json/v/aexol-studio/bddx?color=green&filename=%2Fpackages%2Fbddx-core%2Fpackage.json&label=CORE&style=for-the-badge)](https://github.com/aexol-studio/bddx/tree/main/packages/bddx-core)

## Readme CLI

#### Instaling BDDx

```
npm i bddx
```

#### Initializing BDDx

```
bddx init
```

#### After initalizing the config file contains:

```
{
  "in": "./bddx/tests",
  "out": "./bddx/results",
}
```

- in: string - means folder with test files, **(default: "./bddx/tests")**
- out: string - means folder to generate test result files, **(default: "./bddx/results")**

#### You can set custom in and out directory by --in and --out arguments in init (or one of those)

```
bddx init --in ./yourInDirectory --out ./yourOutDirectory
```

#### Result:

```
{
  "in": "./yourInDirectory",
  "out": "./yourOutDirectory",
}
```

#### [Readme CORE](https://github.com/aexol-studio/bddx/blob/main/Readme.md)

## Roadmap

- [x] 2 test scenarios: display test & pass or fail test
- [ ] Jira plugin
- [ ] GitHub plugin

