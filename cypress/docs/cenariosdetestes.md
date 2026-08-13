### Dentro desse arquivo está localizado os cenarios de testes criados para a automação do sistema, baseado no framework BDD

## Login

Cenario 1 - Login Realizado com sucesso

Dado que faço o acesso ao sistema

Quando preencho os campos de E-mail e Senha

Então o sistema deve realizar login com sucesso



Cenario 2 - Login com campos obrigatórios vazios

Dado que estou na página de login

Quando clico no botão de entrar sem preencher E-mail e Senha

Então o sistema deve exibir as mensagens "Email is required" e "Password is required"



Cenario 3 - Login com senha incorreta

Dado que estou na página de login

Quando informo um E-mail válido e uma Senha incorreta

Então o sistema deve exibir uma mensagem de erro de autenticação

E não deve permitir o acesso ao sistema



Cenario 4 - Logout com sucesso

Dado que realizei login no sistema

Quando clico no menu de usuário e seleciono a opção de sair

Então o sistema deve encerrar a sessão do usuário



## Cadastro de Usuário

Cenario 5 - Cadastro de usuário realizado com sucesso

Dado que estou na página de cadastro

Quando preencho todos os dados obrigatórios corretamente

E clico em cadastrar

Então o sistema deve criar a conta

E me redirecionar para a página de login



Cenario 6 - Cadastro com campos obrigatórios vazios

Dado que estou na página de cadastro

Quando clico em cadastrar sem preencher nenhum campo

Então o sistema deve exibir as mensagens de validação para todos os campos obrigatórios



Cenario 7 - Cadastro com senha fraca

Dado que estou na página de cadastro

Quando informo uma senha com menos de 6 caracteres

Então o sistema deve exibir a mensagem "Password must be minimal 6 characters long."



Cenario 8 - Cadastro com senha sem caracteres especiais

Dado que estou na página de cadastro

Quando informo uma senha sem caracteres especiais

Então o sistema deve exibir a mensagem "Password must include invalid characters."



Cenario 9 - Cadastro com e-mail já cadastrado

Dado que estou na página de cadastro

Quando informo um e-mail que já possui uma conta

E clico em cadastrar

Então o sistema deve exibir uma mensagem de erro informando que o e-mail já está em uso



## Cadastro de Contato

Cenario 10 - Cadastro de contato realizado com sucesso

Dado que realizei login no sistema

E estou na página de contato

Quando preencho o formulário de contato com dados válidos

E clico em enviar

Então o sistema deve exibir a mensagem "Thanks for your message! We will contact you shortly."



Cenario 11 - Contato com e-mail inválido

Dado que estou na página de contato

Quando informo um e-mail em formato inválido

Então o sistema deve exibir uma mensagem de validação para o campo de e-mail



Cenario 12 - Contato com mensagem vazia

Dado que estou na página de contato

Quando clico em enviar sem preencher a mensagem

Então o sistema deve exibir uma mensagem de validação para o campo de mensagem



## Busca e Navegação de Produtos

Cenario 13 - Buscar produto pelo nome

Dado que estou na página inicial

Quando digito o nome de um produto na barra de busca

E pressiono enter

Então o sistema deve exibir os resultados correspondentes



Cenario 14 - Buscar produto inexistente

Dado que estou na página inicial

Quando busco por um produto que não existe no catálogo

Então o sistema deve exibir uma mensagem de nenhum resultado encontrado



Cenario 15 - Filtrar produtos por categoria

Dado que estou na página de produtos

Quando seleciono uma categoria no filtro lateral

Então o sistema deve exibir apenas os produtos da categoria selecionada



Cenario 16 - Ordenar produtos por preço

Dado que estou na página de produtos

Quando escolho ordenar pelo menor preço

Então o sistema deve exibir os produtos em ordem crescente de preço



## Carrinho de Compras

Cenario 17 - Adicionar produto ao carrinho

Dado que estou na página de detalhes de um produto

Quando clico em adicionar ao carrinho

Então o sistema deve exibir a mensagem "Product added to shopping cart."

E o produto deve constar no carrinho



Cenario 18 - Adicionar múltiplos produtos ao carrinho

Dado que estou na página inicial

Quando adiciono dois ou mais produtos ao carrinho

Então o carrinho deve exibir todos os produtos adicionados



Cenario 19 - Alterar quantidade de um produto no carrinho

Dado que tenho um produto no carrinho

Quando altero a quantidade para 2

Então o valor total do carrinho deve ser recalculado



Cenario 20 - Remover produto do carrinho

Dado que tenho um produto no carrinho

Quando clico em remover o produto

Então o carrinho deve ficar vazio



Cenario 21 - Acessar o carrinho vazio

Dado que estou na página inicial

Quando acessei o carrinho sem ter adicionado produtos

Então o sistema deve exibir a mensagem de carrinho vazio



## Compra e Checkout

Cenario 22 - Compra completa com cartão de crédito

Dado que adicionei um produto ao carrinho

E prossigo para o checkout

Quando preencho os dados de pagamento com cartão de crédito válido

E clico em finalizar

Então o sistema deve exibir a mensagem "Payment was successful"

E exibir a confirmação do pedido com o número da nota fiscal



Cenario 23 - Compra sem estar autenticado

Dado que adicionei um produto ao carrinho sem realizar login

Quando prossigo para o checkout

Então o sistema deve solicitar as credenciais de login antes de concluir a compra



Cenario 24 - Pagamento com cartão inválido

Dado que estou na etapa de pagamento

Quando informo um número de cartão inválido

Então o sistema deve exibir uma mensagem de erro de pagamento

E não deve concluir o pedido



Cenario 25 - Confirmar pedido com nota fiscal

Dado que realizei o pagamento com sucesso

Quando clico em finalizar novamente

Então o sistema deve exibir a mensagem "Thanks for your order! Your invoice number"

E o pedido deve ser registrado para o usuário
