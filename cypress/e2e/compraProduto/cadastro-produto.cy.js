import PaginaCompraProduto from "../../support/pages/compraProduto";

describe("Compra de Produto", () => {
  beforeEach(() => {
    PaginaCompraProduto.visitar();
    PaginaCompraProduto.fazerLogin();
  });

  it("deve cadastrar um produto com sucesso", () => {
    PaginaCompraProduto.irParaInicio();
    PaginaCompraProduto.selecionarProduto();
    PaginaCompraProduto.adicionarAoCarrinho();
    PaginaCompraProduto.verificarProdutoAdicionado();
    PaginaCompraProduto.irParaCarrinho();
    PaginaCompraProduto.prosseguirParaCheckout();
    PaginaCompraProduto.fazerLoginNoCheckout();
    PaginaCompraProduto.prosseguirParaCobranca();
    PaginaCompraProduto.prosseguirParaPagamento();
    PaginaCompraProduto.preencherDadosPagamento();
    PaginaCompraProduto.finalizar();
    PaginaCompraProduto.verificarPagamentoRealizado();
    PaginaCompraProduto.finalizar();
    PaginaCompraProduto.verificarPedidoRealizado();
  });
});
