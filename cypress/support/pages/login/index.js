import { LoginElements as elements } from "./elements/login.elements";

class PaginaLogin {
  visitar() {
    cy.visit("/");
  }

  fazerLogin() {
    cy.get(elements.botaoEntrar).click();
    cy.get(elements.campoEmail).type(Cypress.env("email"));
    cy.get(elements.campoSenha).type(Cypress.env("password"));
    cy.get(elements.botaoLogin).click();
  }

  fazerLoginInvalido() {
    cy.get(elements.botaoEntrar).click();
    cy.get(elements.botaoLogin).click();
    cy.contains(elements.erroEmailObrigatorio).should("be.visible");
    cy.contains(elements.erroSenhaObrigatoria).should("be.visible");
  }

  fazerLogout() {
    cy.get(elements.botaoMenu).click();
    cy.get(elements.botaoSair).click();
  }
}

export default new PaginaLogin();