const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth:1536,
  viewportHeight:960,
  
  e2e: {
    URL: "https://blogdoagi.com.br",
    setupNodeEvents(on, config) {
      // implement node event listeners here
     
    },
  },
});
