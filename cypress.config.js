const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php/",
    video: false,
    watchForFileChanges: false,
    defaultCommandTimeout: 3000,
    retries: 3,
    screenshotOnRunFailure: true
  },
});
