describe("Pagina de Login", () => {
  beforeEach(() => {
    cy.visit("https://practicesoftwaretesting.com/"); 
    // Altere para a URL real da sua página de login
    
  });

  context("Login correto", () => {
    it("deve exibir o formulário de login", () => {
      cy.login("emaildostestes2@teste.com", "Senh@segura1234");
    });
  });

  context("Login incorreto", () => {
  it("deve exibir erro ao tentar logar com credenciais inválidas", () => {
    cy.loginIncorreto();
  });
  });

  context("logout", () => {
    it("deve fazer logout com sucesso", () => {
      cy.login("emaildostestes3@teste.com", "Senh@segura1234");
      cy.wait(2000); 
      // espera 2 segundos para garantir que o login foi concluído
      cy.logout();
    });
  });
});
