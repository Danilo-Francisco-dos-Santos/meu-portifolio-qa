const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: 'cypress-multi-reporters',

  reporterOptions: {
    // Habilita os reporters desejados
    reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',
  },

  // Configura o relatório JUnit (Mocha)
  mochaJunitReporter: {
    // Define o caminho e o formato do arquivo XML de relatório JUnit
    mochaFile: 'cypress/reports/junit/results-[hash].xml'
  },

  // Configura o relatório Mochawesome (Visual/Gráfico)
  cypressMochawesomeReporter: {
    charts: true,
    reportPageTitle: 'Relatório de Testes',
    embeddeScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false
  },

  allowCypressEnv: false,
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on)
    },
  },
});
