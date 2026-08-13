import { CompraProdutoElements as elements } from "./elements/compra-produto.elements";

class PaginaCompraProduto {
  visitar() {
    cy.visit("/");
  }

  fazerLogin() {
    cy.get(elements.botaoEntrar).click();
    cy.get(elements.campoEmail).type(Cypress.env("email"));
    cy.get(elements.campoSenha).type(Cypress.env("password"));
    cy.get(elements.botaoLogin).click();
  }

  irParaInicio() {
    cy.get(elements.linkInicio).click();
  }

  selecionarProduto(nomeProduto = elements.nomeProduto) {
    cy.contains("h5", nomeProduto).click();
  }

  adicionarAoCarrinho() {
    cy.get(elements.botaoAdicionarAoCarrinho).click();
  }

  verificarProdutoAdicionado() {
    cy.contains(elements.mensagemProdutoAdicionado).should("be.visible");
  }

  irParaCarrinho() {
    cy.get(elements.linkCarrinho).click();
  }

  prosseguirParaCheckout() {
    cy.get(elements.botaoProsseguirCheckout).click();
  }

  fazerLoginNoCheckout() {
    cy.get(elements.campoEmail).type(Cypress.env("email"));
    cy.get(elements.campoSenha).type(Cypress.env("password"));
    cy.get(elements.botaoLogin).click();
  }

  prosseguirParaCobranca() {
    cy.get(elements.botaoProsseguirCobranca).click();
  }

  prosseguirParaPagamento() {
    cy.get(elements.botaoProsseguirPagamento).click();
  }

  preencherDadosPagamento() {
    cy.get(elements.metodoPagamento).select("Credit Card");
    cy.get(elements.numeroCartao).type("5555-2222-3333-4562");
    cy.get(elements.dataValidade).type("12/2035");
    cy.get(elements.cvv).type("678");
    cy.get(elements.nomeTitularCartao).type("Carlos Roberto");
  }

  finalizar() {
    cy.get(elements.botaoFinalizar).click();
  }

  verificarPagamentoRealizado() {
    cy.contains(elements.mensagemPagamentoSucesso).should("be.visible");
  }

  verificarPedidoRealizado() {
    cy.contains(elements.mensagemPedidoSucesso).should("be.visible");
  }
}

export default new PaginaCompraProduto();