import { faker } from "@faker-js/faker";
import PaginaCadastroContato from "../../support/pages/cadastroContato";

describe("Cadastro de Contato", () => {
  beforeEach(() => {
    cy.visit("/");
    PaginaCadastroContato.fazerLogin();
  });

  it("deve cadastrar um contato com sucesso", () => {
    const contactData = {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      message: faker.lorem.paragraph(),
    };

    PaginaCadastroContato.irParaInicio();
    PaginaCadastroContato.irParaContato();
    PaginaCadastroContato.preencherFormularioContato(contactData);
    PaginaCadastroContato.submeter();
    PaginaCadastroContato.verificarMensagemDeSucesso();
  });
});
