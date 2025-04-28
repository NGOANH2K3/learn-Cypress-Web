const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
      return config
    },
    projectId: 'ngoanh',
    reporter: 'mochawesome',
    specPattern:"./cypress/tests/**/*.*",
    baseUrl: "https://www.demoblaze.com"
  },
  defaultCommandTimeout:10000
});
