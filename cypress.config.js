const { defineConfig } = require("cypress");
const { cloudPlugin } = require("cypress-cloud/plugin");
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return cloudPlugin(on, config);
    },
    projectId: 'Cypress-Web',
    reporter: 'mochawesome',
    specPattern:"./cypress/tests/**/*.*",
    baseUrl: "https://www.demoblaze.com"
  },
  defaultCommandTimeout:10000
});
