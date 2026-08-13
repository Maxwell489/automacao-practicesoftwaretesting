import { fakerPT_BR } from '@faker-js/faker';
import { CompraProdutoElements as elementsCompraProdutos } from "./elements/compra-produto.elements";

class PaginaCompraProduto {
  visitar() {
    cy.visit("/");
  }

  fazerLogin() {
    cy.get(elementsCompraProdutos.botaoEntrar)
      .click();

    cy.get(elementsCompraProdutos.campoEmail)
      .type(Cypress.env("email"));

    cy.get(elementsCompraProdutos.campoSenha)
      .type(Cypress.env("password"));

    cy.get(elementsCompraProdutos.botaoLogin)
      .click();
  }

  irParaInicio() {
    cy.get(elementsCompraProdutos.linkInicio)
      .click();
  }

  selecionarProduto() {
    cy.wait(1000); // Espera para garantir que o produto seja exibido
    cy.contains(elementsCompraProdutos.nomeProduto)
      .click();
  }

  adicionarAoCarrinho() {
    cy.get(elementsCompraProdutos.botaoAdicionarAoCarrinho)
      .click();
  }

  verificarProdutoAdicionado() {
    cy.wait(1000); // Espera para garantir que a mensagem seja exibida
    cy.contains(elementsCompraProdutos.mensagemProdutoAdicionado)
      .should("be.visible");
  }

  irParaCarrinho() {
    cy.get(elementsCompraProdutos.linkCarrinho)
      .click();
  }

  prosseguirParaCheckout() {
    cy.get(elementsCompraProdutos.botaoProsseguirCheckout)
      .click();
  }

  fazerLoginNoCheckout() {
    cy.get(elementsCompraProdutos.campoEmail)
      .type(Cypress.env("email"));

    cy.get(elementsCompraProdutos.campoSenha)
      .type(Cypress.env("password"));

    cy.get(elementsCompraProdutos.botaoLogin)
      .click();
  }

  prosseguirParaCobranca() {
    cy.get(elementsCompraProdutos.botaoProsseguirCobranca)
      .click();
  }

  prosseguirParaPagamento() {
    cy.get(elementsCompraProdutos.seletorPaisPagamento)
      .select("Brazil");

    cy.get(elementsCompraProdutos.campoCodigoPostalpagamento)
      .type(fakerPT_BR.location.zipCode());

    cy.get(elementsCompraProdutos.campoNumeroCasaPagamento)
      .type(fakerPT_BR.string.numeric(3));

    cy.get(elementsCompraProdutos.campoRuaPagamento)
      .type(fakerPT_BR.location.streetAddress());

    cy.get(elementsCompraProdutos.campoCidadePagamento)
      .type(fakerPT_BR.location.city());

    cy.get(elementsCompraProdutos.campoEstadoPagamento)
      .type(fakerPT_BR.location.state());

    cy.get(elementsCompraProdutos.botaoProsseguirPagamento)
      .click();
  }

  preencherDadosPagamento() {
    cy.get(elementsCompraProdutos.metodoPagamento)
      .select("Credit Card");

    cy.get(elementsCompraProdutos.numeroCartao)
      .type(fakerPT_BR.finance.creditCardNumber({ issuer: '63[7-9]#-####-####-###L' }));

    cy.get(elementsCompraProdutos.dataValidade)
      .type("12/2035");

    cy.get(elementsCompraProdutos.cvv)
      .type(fakerPT_BR.finance.creditCardCVV());

    cy.get(elementsCompraProdutos.nomeTitularCartao)
      .type(fakerPT_BR.person.fullName());
  }

  finalizar() {
    cy.get(elementsCompraProdutos.botaoFinalizar)
      .click();
  }

  verificarPagamentoRealizado() {
    cy.contains(elementsCompraProdutos.mensagemPagamentoSucesso)
      .should("be.visible");
  }

}

export default new PaginaCompraProduto();