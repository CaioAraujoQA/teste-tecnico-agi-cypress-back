
Cypress.on('run:end', () => {
  setTimeout(() => {
    if (Cypress.browser.isHeaded) {
      window.top.close();
    }
  }, 1000);
});


// import '@cypress/code-coverage/support';


import 'cypress-xpath';


module.exports = {
  
};

