import { LoginElements as elementslogin } from "./elements/login.elements";

class PaginaLogin {
  visitar() {
    cy.visit("/");
  }

  fazerLogin() {
    cy.get(elementslogin.botaoEntrar)
      .click();

    cy.get(elementslogin.campoEmail)
      .type(Cypress.env("email"));

    cy.get(elementslogin.campoSenha)
      .type(Cypress.env("password"));

    cy.get(elementslogin.botaoLogin)
      .click();
  }

  fazerLoginInvalido() {
    cy.get(elementslogin.botaoEntrar)
      .click();

    cy.get(elementslogin.botaoLogin)
      .click();

    cy.contains(elementslogin.erroEmailObrigatorio)
      .should("be.visible");
      
    cy.contains(elementslogin.erroSenhaObrigatoria)
      .should("be.visible");
  }

  fazerLogout() {
    cy.get(elementslogin.botaoMenu)
      .click();
    cy.get(elementslogin.botaoSair)
      .click();
  }
}

export default new PaginaLogin();