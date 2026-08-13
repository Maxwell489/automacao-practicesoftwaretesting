import { fakerPT_BR } from '@faker-js/faker';
import {CadastroContatoElements as elementsCadastrocontato} from "./elements/cadastro-contato.elements";

class PaginaCadastroContato {
  fazerLogin() {
    cy.get(elementsCadastrocontato.botaoEntrar)
      .click();

    cy.get(elementsCadastrocontato.campoEmail)
      .type(Cypress.env("email"));

    cy.get(elementsCadastrocontato.campoSenha)
      .type(Cypress.env("password"));

    cy.get(elementsCadastrocontato.botaoLogin)
      .click();
  }

  irParaInicio() {
    cy.get(elementsCadastrocontato.linkInicio)
      .click();
  }

  irParaContato() {
    cy.get(elementsCadastrocontato.linkContato)
      .click();
  }

  preencherFormularioContato() {
    cy.get(elementsCadastrocontato.campoPrimeiroNome)
      .type(fakerPT_BR.person.firstName());

    cy.get(elementsCadastrocontato.campoSobrenome)
      .type(fakerPT_BR.person.lastName());

    cy.get(elementsCadastrocontato.campoEmail)
      .type(fakerPT_BR.internet.email());

    cy.get(elementsCadastrocontato.campoAssunto)
      .select(Cypress._.random(1, 6));

    cy.get(elementsCadastrocontato.campoMensagem)
      .type(fakerPT_BR.lorem.paragraph());
  }

  submeter() {
    cy.get(elementsCadastrocontato.botaoEnviar)
      .click();
  }

  verificarMensagemDeSucesso() {
    cy.contains(elementsCadastrocontato.mensagemSucesso)
      .should("be.visible");
  }
}

export default new PaginaCadastroContato();