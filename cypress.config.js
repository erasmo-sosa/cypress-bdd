const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const cucumber = require('cypress-cucumber-preprocessor').default
      const browserify = require('@cypress/browserify-preprocessor');
      const options = {
        ...browserify.defaultOptions,
        typescript: require.resolve('typescript'),
      }
      on('file:preprocessor', cucumber(options))
    },
    "excludeSpecPattern": ["*.js","*.md"],
    "specPattern": "**/*.{feature,features}"
  },
  "video":false,
  "defaultCommandTimeout": 5000,
  "pageLoadTimeout": 30000,
  //"ignoreTestFiles": ["*.js","*.md"],
  //"testFiles": "**/*.{feature,features}"
});
