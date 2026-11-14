# TypeScript template

This starter uses strict TypeScript, Jest, Yarn workspaces, Lage for workspace
orchestration, and Just for package tasks. Packages compile to CommonJS and include
TypeScript declarations.

## Prerequisites

Use Node.js 26 LTS, the default in `.node-version`. Node.js 22 (22.22.0 or later)
and 24 LTS are also supported. CI covers all three versions on Linux and Windows.

Yarn Classic 1.22.22 is pinned in `package.json`. Install Corepack if it is not
already available, then enable it so the project selects the pinned Yarn version:

```sh
npm install --global corepack
corepack enable
yarn --version
```

If Yarn was previously installed globally through npm, uninstall that global
installation before enabling Corepack.

## Install dependencies

```sh
yarn install --frozen-lockfile
```

Use `yarn install` when intentionally changing dependencies, and commit the updated
`yarn.lock`.

## Tasks

Run these commands from the repository root:

| Command | Purpose |
| --- | --- |
| `yarn clean` | Remove generated package output. |
| `yarn typecheck` | Check source and tests without emitting files. |
| `yarn build` | Compile package source and declarations into `lib`. |
| `yarn test` | Build packages, then run Jest tests. |
| `yarn start` | Build packages, then run the example. |

Target a package with `yarn <task> --to typescript-template-package`. Lage caches
builds, type-checks, and tests; clean and start always execute. Use `--no-cache`
to force a task to run again.

## Configuration and maintenance

The package's `tsconfig.json` checks both source and tests. Its
`tsconfig.build.json` excludes tests from generated JavaScript and declarations.
CommonJS output is explicit in the package manifest; `NodeNext` module resolution
supports modern Node package exports without requiring an ESM migration.

TypeScript is intentionally held on 6.0.x because the current `ts-jest` peer range
excludes TypeScript 7. Upgrade TypeScript, Jest, `ts-jest`, and Jest types together,
checking peer compatibility before moving to a new major version.

GitHub Actions runs type-checks, builds, tests, the example, and cleanup.
Dependabot checks npm dependencies and GitHub Actions weekly.