describe("Compra de Produto", () => {
  beforeEach(() => {
    cy.visit("https://practicesoftwaretesting.com/");
    cy.login("emaildostestes2@teste.com", "Senh@segura1234");
  });

  it("deve cadastrar um produto com sucesso", () => {
    cy.get('[data-test="nav-home"]').click();
    cy.contains("h5", "Combination Pliers").click();
    cy.get('[data-test="add-to-cart"]').click();
    cy.contains("Product added to shopping cart.").should("be.visible");
    cy.get('[data-test="nav-cart"]').click();
    cy.get('[data-test="proceed-1"]').click();
    cy.get('[data-test="email"]').type("emaildostestes2@teste.com");
    cy.get('[data-test="password"]').type("Senh@segura1234");
    cy.get('[data-test="login-submit"]').click();
    //cy.contains('Hello Carlos Roberto, you are already logged in. You can proceed to checkout.').should('be.visible');
    cy.get('[data-test="proceed-2"]').click();
    cy.get('[data-test="proceed-3"]').click();
    cy.get('[data-test="payment-method"]').select("Credit Card");
    cy.get('[data-test="credit_card_number"]').type("5555-2222-3333-4562");
    cy.get('[data-test="expiration_date"]').type("12/2035");
    cy.get('[data-test="cvv"]').type("678");
    cy.get('[data-test="card_holder_name"]').type("Carlos Roberto");
    cy.get('[data-test="finish"]').click();
    cy.contains("Payment was successful").should("be.visible");
    cy.get('[data-test="finish"]').click();
    cy.contains("Thanks for your order! Your invoice number").should(
      "be.visible",
    );
  });
});
