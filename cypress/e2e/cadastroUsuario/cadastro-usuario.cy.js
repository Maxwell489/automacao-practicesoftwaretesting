import PaginaCadastroUsuario from "../../support/pages/cadastroUsuario";

describe("Cadastro do usuario", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  context("Cadastro correto", () => {
    it("Deve permitir o cadastro do usuario", () => {
      PaginaCadastroUsuario.irParaLogin();
      cy.location("pathname").should("eq", "/auth/login");

      PaginaCadastroUsuario.irParaCadastro();
      cy.location("pathname").should("eq", "/auth/register");

      PaginaCadastroUsuario.cadastrar();
      
      //cy.location("pathname").should("eq", "/auth/login");
    });
  });

  context("Cadastro incorreto", () => {
    it("Não deve permitir o cadastro do usuario", () => {
      PaginaCadastroUsuario.irParaLogin();
      PaginaCadastroUsuario.irParaCadastro();
      PaginaCadastroUsuario.submeter();
      PaginaCadastroUsuario.verificarCamposObrigatorios();
    });
  });
});
