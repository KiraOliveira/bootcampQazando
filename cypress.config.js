const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '5pgmyp',
  e2e: {
    baseUrl: 'http://automationpratice.com.br/',
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
})
