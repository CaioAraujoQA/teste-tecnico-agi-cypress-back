const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {

    baseUrl: "https://dog.ceo/api",

    specPattern: "cypress/e2e/**/*.cy.js",

    supportFile: "cypress/support/e2e.js",

    video: false,

    screenshotOnRunFailure: true,

    setupNodeEvents(on, config) {
      return config;
    }
  },

  reporter: "mochawesome",

  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: false,
    json: true,
    timestamp: "mmddyyyy_HHMMss"
  }

});