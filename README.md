# vue-typescript-webpack Example

> Typescript & Webpack 2 Example

Based on the the [Jayway's Vue.js 2.0 workshop](https://jayway.github.io/vue-js-workshop/), this project upgrades it to contain
  * Production ready
  * Webpack 2
  * Hot reloading
  * vue-loader for .vue files
  * Typescript 2.0
  * Typescripting linting inside of Vue files
  * Unit testing with in Typescript for Vue components and other files
  * Code coverage in Vue and TypeScript files

# Usage
## vue-cli
This is a project template for [vue-cli](https://github.com/vuejs/vue-cli). It can be downloaded using:
```bash
vue init CaptainAchilles/vue-typescript-webpack newproject

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## Manual clone 
After cloning this repository, you can get started with:

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

# Commands

* `npm run install`: Installs project dependencies
* `npm run dev`: Development build
  * Webpack files
  * Launches site on localhost:8080
  * State preserving Hot reload
  * Source maps
  * Compiles typescript

* `npm run build`: Production build
  * Webpack files
  * Bundles project into ./dist 
  * Ready for deployment

* `npm run lint`: Runs linter
  * Linter also runs on build/dev
  * Lints all ts and ts components in Vue files
  * Also runs linter over test files

* `npm run unit`: Run Tests
  * Runs all `*.spec.ts` in `test/unit/*.spec.ts`
  * Generates code coverage for all `./src/components` in `./test/unit/coverage/html`

* `npm run e2e`: Run Integration tests
  * Runs all `*.js` in `test/e2e/`
  * Tests are currently JavaScript, but plan to be supported ts
  * Generates report in `./test/e2e/report`

# Code Linting within Editors

## VSCode
VSCode should automatically lint and display typescript errors in the editor.

## Vim
Vim can use the plugins [syntastic](https://github.com/vim-syntastic/syntastic) 
and [vim-vue](https://github.com/posva/vim-vue) with the 
following NPM packages

``` bash
npm install -g typescript typescript-eslint-parser eslint-config-google eslint
```

# License
See the license file in the root of the repository
