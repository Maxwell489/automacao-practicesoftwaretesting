import { faker } from '@faker-js/faker';

describe("Cadastro de Contato", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.login("emaildostestes2@teste.com", "Senh@segura1234");
  });

  it("deve cadastrar um contato com sucesso", () => {
    const contactData = {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      message: faker.lorem.paragraph()
    };

    cy.get('[data-test="nav-home"]').click();
    cy.get('[data-test="nav-contact"]').click();
    cy.get('[data-test="first-name"]').type(contactData.firstName);
    cy.get('[data-test="last-name"]').type(contactData.lastName);
    cy.get('[data-test="email"]').type(contactData.email);
    cy.get('[data-test="subject"]').select("Webmaster");
    cy.get('[data-test="message"]').type(contactData.message);

    //cy.get('[data-test="attachment"]').selectFile("cypress/fixtures/teste.txt");
    cy.get('[data-test="contact-submit"]').click();
    cy.contains("Thanks for your message! We will contact you shortly.").should(
      "be.visible",
    );
  });
});
