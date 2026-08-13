import {CadastroContatoElements as elements,} from "./elements/cadastro-contato.elements";

class PaginaCadastroContato {
  fazerLogin() {
    cy.get(elements.botaoEntrar).click();
    cy.get(elements.campoEmail).type(Cypress.env("email"));
    cy.get(elements.campoSenha).type(Cypress.env("password"));
    cy.get(elements.botaoLogin).click();
  }

  irParaInicio() {
    cy.get(elements.linkInicio).click();
  }

  irParaContato() {
    cy.get(elements.linkContato).click();
  }

  preencherFormularioContato(dadosContato) {
    cy.get(elements.campoPrimeiroNome).type(dadosContato.firstName);
    cy.get(elements.campoSobrenome).type(dadosContato.lastName);
    cy.get(elements.campoEmail).type(dadosContato.email);
    cy.get(elements.campoAssunto).select("Webmaster");
    cy.get(elements.campoMensagem).type(dadosContato.message);
  }

  submeter() {
    cy.get(elements.botaoEnviar).click();
  }

  verificarMensagemDeSucesso() {
    cy.contains(elements.mensagemSucesso).should("be.visible");
  }
}

export default new PaginaCadastroContato();