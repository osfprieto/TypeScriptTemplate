# Template package

A strict TypeScript example using CommonJS output, Jest, and Just tasks.

## Tooling

- `typescript` checks source and tests with `tsconfig.json`.
- `tsconfig.build.json` emits JavaScript and declarations into `lib`, excluding
  tests. The package's `main` and `types` entries point to that output.
- `just-scripts` defines build, clean, test, and start tasks in `just-task.js`.
- `jest` and `ts-jest` execute TypeScript tests using `jest.config.js`.
- `@types/jest` and `@types/node` provide test and runtime types.

TypeScript remains on 6.0.x until `ts-jest` supports TypeScript 7. Jest automatically
restores spies between tests.

## Workspace usage

Install dependencies from the repository root. See the [root README](../../README.md)
for runtime setup and workspace commands. To target this package:

```sh
yarn typecheck --to typescript-template-package
yarn test --to typescript-template-package
```

## Standalone usage

Copy this package, use a supported Node.js version, and run:

```sh
npm install
npm run typecheck
npm run build
npm test
npm start
```

Standalone start uses the existing build; run `npm run build` first.
Commit the generated standalone lockfile for reproducible installs.
