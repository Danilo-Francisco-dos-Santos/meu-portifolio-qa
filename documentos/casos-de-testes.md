# Casos de Teste Automatizados

Este documento descreve os testes automatizados implementados em `automacao/cypress/e2e/spec.cy.js`, cobrindo cadastro, login e funcionalidades do carrinho de compras no site `https://front.serverest.dev/login`.

## 1. Testes de Cadastro

- **Cadastro com sucesso**
  - Acessa a página de cadastro.
  - Preenche nome, email válido e senha.
  - Verifica a mensagem `Cadastro realizado com sucesso`.

- **Cadastro com falha: mesmo email usado mais de uma vez**
  - Tenta cadastrar o mesmo email novamente.
  - Verifica a mensagem `Este email já está sendo usado`.

- **Cadastro com falha: email inválido**
  - Insere um email sem domínio válido.
  - Verifica a mensagem `Email deve ser um email válido`.

## 2. Testes de Login

- **Login com sucesso**
  - Acessa a tela de login.
  - Preenche email e senha corretos.
  - Clica em entrar e aguarda o carregamento.

- **Login com falha**
  - Usa senha incorreta.
  - Verifica a mensagem `Email e/ou senha inválidos`.

## 3. Testes de Produtos no Carrinho

- **Adicionar produto**
  - Faz login com credenciais válidas.
  - Pesquisa por `Logitech MX Vertical`.
  - Adiciona o produto encontrado ao carrinho.

- **Adicionando mais de um produto**
  - Faz login.
  - Pesquisa por `Logitech MX Vertical`.
  - Adiciona o produto e incrementa a quantidade antes de adicionar ao carrinho.