// cypress/plugins/index.js

module.exports = (on, config) => {
    require('@cypress/code-coverage/task')(on, config);
    require('cypress-xpath');  // Adicione o plugin cypress-xpath
    return config;
  };
  