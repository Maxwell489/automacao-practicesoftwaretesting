import PaginaLogin from "../../support/pages/login";

describe("Pagina de Login", () => {
  beforeEach(() => {
    PaginaLogin.visitar();
  });

  context("Login correto", () => {
    it("Deve exibir o formulário de login", () => {
      PaginaLogin.fazerLogin();
    });
  });

  context("Login incorreto", () => {
    it("Deve exibir erro ao tentar logar com credenciais inválidas", () => {
      PaginaLogin.fazerLoginInvalido();
    });
  });

  context("logout", () => {
    it("Deve fazer logout com sucesso", () => {
      PaginaLogin.fazerLogin();
      cy.wait(2000);
      PaginaLogin.fazerLogout();
    });
  });
});