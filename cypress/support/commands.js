Cypress.Commands.add('createPost', (post) => {
    return cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', post);
  });
  
  Cypress.Commands.add('getPost', (id) => {
    return cy.request('GET', `https://jsonplaceholder.typicode.com/posts/${id}`);
  });
  
  Cypress.Commands.add('updatePost', (id, post) => {
    return cy.request('PUT', `https://jsonplaceholder.typicode.com/posts/${id}`, post);
  });

  Cypress.Commands.add('updatePost', (id, post) => {
    return cy.request('PATCH', `https://jsonplaceholder.typicode.com/posts/${id}`, post);
  });
  
  Cypress.Commands.add('deletePost', (id) => {
    return cy.request('DELETE', `https://jsonplaceholder.typicode.com/posts/${id}`);
  });
  