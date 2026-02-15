Cypress.Commands.add("login", (email, password) => {
  cy.get('[data-test="nav-sign-in"]').click();
  cy.get('[data-test="email"]').type(email);
  cy.get('[data-test="password"]').type(password);
  cy.get('[data-test="login-submit"]').click();
});

Cypress.Commands.add("logout", () => {
  cy.get('[data-test="nav-menu"]').click();
  cy.get('[data-test="nav-sign-out"]').click();
});

Cypress.Commands.add("loginIncorreto", () => {
  cy.get('[data-test="nav-sign-in"]').click();
  cy.get('[data-test="login-submit"]').click();
  cy.contains("Email is required").should("be.visible");
  cy.contains("Password is required").should("be.visible");
});

Cypress.Commands.add("cadastro", (usuario) => {
  cy.get('[data-test="first-name"]').type(usuario.primeironome);
  cy.get('[data-test="last-name"]').type(usuario.sobrenome);
  cy.get('[data-test="dob"]').type(usuario.datanascimento);
  cy.get('[data-test="street"]').type(usuario.rua);
  cy.get('[data-test="postal_code"]').type(usuario.codigopostal);
  cy.get('[data-test="city"]').type(usuario.cidade);
  cy.get('[data-test="state"]').type(usuario.estado);
  cy.get('[data-test="country"]').select(usuario.pais);
  cy.get('[data-test="phone"]').type(usuario.telefone);
  cy.get('[data-test="email"]').type(usuario.email);
  cy.get('[data-test="password"]').type(usuario.senha);
  cy.get('[data-test="register-submit"]').click();
});

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
