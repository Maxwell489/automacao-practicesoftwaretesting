import PaginaCadastroContato from "../../support/pages/cadastroContato";

describe("Cadastro de Contato", () => {
  beforeEach(() => {
    cy.visit("/");
    PaginaCadastroContato.fazerLogin();
  });

  it("deve cadastrar um contato com sucesso", () => {
    PaginaCadastroContato.irParaInicio();
    PaginaCadastroContato.irParaContato();
    PaginaCadastroContato.preencherFormularioContato();
    PaginaCadastroContato.submeter();
    PaginaCadastroContato.verificarMensagemDeSucesso();
  });
});
