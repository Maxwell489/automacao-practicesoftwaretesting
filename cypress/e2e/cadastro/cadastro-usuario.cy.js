describe("Cadastro do usuario", () => {
  beforeEach(() => {
    cy.visit("https://practicesoftwaretesting.com/");
  });

  context("Cadastro correto", () => {
    it("Deve permitir o cadastro do usuario", () => {
      cy.get('[data-test="nav-sign-in"]').click();
      cy.location("pathname").should("eq", "/auth/login");
      cy.get('[data-test="register-link"]').click();
      cy.location("pathname").should("eq", "/auth/register");
      cy.cadastro(
        "Carlos",
        "Roberto",
        "1990-02-01",
        "Rua dos Testes, 123",
        "12345-678",
        "Cidade Exemplo",
        "Estado Exemplo",
        "Argentina",
        "1591587115",
        "emaildostestes2@teste.com",
        "Senh@segura1234",
      );
      cy.location("pathname").should("eq", "/auth/login");
    });
  });

  context("Cadastro incorreto", () => {
    it("Não deve permitir o cadastro do usuario", () => {
      cy.visit("https://practicesoftwaretesting.com/");
      cy.get('[data-test="nav-sign-in"]').click();
      cy.get('[data-test="register-link"]').click();
      cy.get('[data-test="register-submit"]').click();
      cy.contains("First name is required").should("be.visible");
      cy.contains("Last name is required").should("be.visible");
      cy.contains("Date of Birth is required").should("be.visible");
      cy.contains("Street is required").should("be.visible");
      cy.contains("Postcode is required").should("be.visible");
      cy.contains("City is required").should("be.visible");
      cy.contains("State is required").should("be.visible");
      cy.contains("Country is required").should("be.visible");
      cy.contains("Phone is required").should("be.visible");
      cy.contains("Email is required").should("be.visible");
      cy.contains("Password is required").should("be.visible");
      cy.contains("Password must be minimal 6 characters long.").should(
        "be.visible",
      );
      cy.contains("Password must include invalid characters.").should(
        "be.visible",
      );
    });
  });
});
