import { fakerPT_BR } from '@faker-js/faker';
import { CadastroUsuarioElements as elementosCadastro } from "./elements/cadastro-usuario.elements";

class PaginaCadastroUsuario {
  irParaLogin() {
    cy.get(elementosCadastro.botaoEntrar).click();
  }

  irParaCadastro() {
    cy.get(elementosCadastro.linkCadastro).click();
  }

  cadastrar() {
    cy.get(elementosCadastro.campoPrimeiroNome)
      .type(fakerPT_BR.person.firstName());

    cy.get(elementosCadastro.campoSobrenome)
      .type(fakerPT_BR.person.lastName());

    cy.get(elementosCadastro.campoDataNascimento)
      .type(fakerPT_BR.date.birthdate({ mode: 'age', min: 18, max: 65 }).toISOString().split('T')[0]);

    cy.get(elementosCadastro.campoPais)
      .select('Brazil');

    cy.get(elementosCadastro.campoCodigoPostal)
      .type(fakerPT_BR.location.zipCode());

    cy.get(elementosCadastro.numeroCasa)
      .type(fakerPT_BR.string.numeric(3));

    cy.get(elementosCadastro.campoRua)
      .type(fakerPT_BR.location.streetAddress());

    cy.get(elementosCadastro.campoCidade)
      .type(fakerPT_BR.location.city());

    cy.get(elementosCadastro.campoEstado)
      .type(fakerPT_BR.location.state());

    cy.get(elementosCadastro.campoTelefone)
      .type(fakerPT_BR.string.numeric(11));

    cy.get(elementosCadastro.campoEmail)
      .type(fakerPT_BR.internet.email());

    cy.get(elementosCadastro.campoSenha)
      .type(fakerPT_BR.internet.password({ length: 20, symbols: true }));

    cy.get(elementosCadastro.botaoCadastrar)
      .click();
  }

  submeter() {
    cy.get(elementosCadastro.botaoCadastrar)
      .click();
  }

  verificarCamposObrigatorios() {
    cy.contains(elementosCadastro.erroPrimeiroNomeObrigatorio)
      .should("be.visible");

    cy.contains(elementosCadastro.erroSobrenomeObrigatorio)
      .should("be.visible");

    cy.contains(elementosCadastro.erroDataNascimentoObrigatoria)
      .should("be.visible");

    cy.contains(elementosCadastro.erroRuaObrigatoria)
      .should("be.visible");

    cy.contains(elementosCadastro.erroCodigoPostalObrigatorio)
      .should("be.visible");

    cy.contains(elementosCadastro.erroCidadeObrigatoria)
      .should("be.visible");

    cy.contains(elementosCadastro.erroEstadoObrigatorio)
      .should("be.visible");

    cy.contains(elementosCadastro.erroPaisObrigatorio)
      .should("be.visible");

    cy.contains(elementosCadastro.erroTelefoneObrigatorio)
      .should("be.visible");

    cy.contains(elementosCadastro.erroEmailObrigatorio)
      .should("be.visible");

    cy.contains(elementosCadastro.erroSenhaObrigatoria)
      .should("be.visible");

    cy.contains(elementosCadastro.erroSenhaTamanhoMinimo)
      .should("be.visible");

    cy.contains(elementosCadastro.erroSenhaCaracteresInvalidos)
      .should("be.visible");
  }
}

export default new PaginaCadastroUsuario();