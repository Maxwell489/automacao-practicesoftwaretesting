describe("Cadastro de Contato", () => {
  beforeEach(() => {
    cy.visit("https://practicesoftwaretesting.com/");
    cy.login("emaildostestes2@teste.com", "Senh@segura1234");
  });

  it.only("deve cadastrar um contato com sucesso", () => {
    cy.get('[data-test="nav-home"]').click();
    cy.get('[data-test="nav-contact"]').click();
    cy.get('[data-test="first-name"]').type("Ana");
    cy.get('[data-test="last-name"]').type("Silva");
    cy.get('[data-test="email"]').type("anasilva@email.com");
    cy.get('[data-test="subject"]').select("Webmaster");
    cy.get('[data-test="message"]').type(
      "Lorem ipsum turpis tempus massa donec semper donec bibendum, cursus libero erat eget ante vestibulum praesent porta, tempor aliquet ornare arcu condimentum neque maecenas.",
    );

    //cy.get('[data-test="attachment"]').selectFile("cypress/fixtures/teste.txt");
    cy.get('[data-test="contact-submit"]').click();
    cy.contains("Thanks for your message! We will contact you shortly.").should(
      "be.visible",
    );
  });
});
