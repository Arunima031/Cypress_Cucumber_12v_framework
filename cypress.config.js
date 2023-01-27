const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor")
const addCucumberPreprocessorPlugin =require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const nodePolyfills =
  require('@esbuild-plugins/node-modules-polyfill').NodeModulesPolyfillPlugin
  const allureWriter = require('@shelex/cypress-allure-plugin/writer');


module.exports = defineConfig({
  

viewport:(1920, 1080),

e2e: {
    specPattern:
    ["**/*.feature", "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"],

async setupNodeEvents(on, config) {
const bundler = createBundler({
plugins: [createEsbuildPlugin(config)],
plugins: [nodePolyfills(), createEsbuildPlugin(config)],
});

on("file:preprocessor", bundler);
await addCucumberPreprocessorPlugin(on, config);
allureWriter(on, config);


return config;
},
env:{
  ENV:"qa",
  allureReuseAfterSpec: true,
  allure:true,
 
  
},
defaultCommandTimeout:10000
},
});