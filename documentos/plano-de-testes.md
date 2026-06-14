# Plano de Testes

## Visão Geral

Objetivo: validar as funcionalidades principais da aplicação de e-commerce no front-end de `https://front.serverest.dev/login` através de testes automatizados em Cypress.

Escopo: cadastro de usuário, login e fluxo de adição de produtos ao carrinho.

Fora de Escopo: fluxo de compra, pagamento, remoção de itens do carrinho e validações de backend não cobertas pelos testes atuais.

## Estratégia de Teste

Tipo de teste: automatizado funcional.
Ferramenta: Cypress.

Ambiente: ambiente de teste acessível em `https://front.serverest.dev/login`.
Dados de teste: usuário `daniloteste@gmail.com` com senha `123`.

## Casos de Teste

### 1. Cadastro

- Caso de teste 1: Cadastro com sucesso
  - Pré-condição: usuário novo.
  - Passos:
    1. Acessar a página de login.
    2. Clicar em cadastrar.
    3. Preencher nome, email válido e senha.
    4. Clicar em cadastrar.
  - Resultado esperado: mensagem `Cadastro realizado com sucesso`.

- Caso de teste 2: Cadastro com falha - email já em uso
  - Pré-condição: email já cadastrado.
  - Passos:
    1. Acessar a página de login.
    2. Clicar em cadastrar.
    3. Preencher nome, email já utilizado e senha.
    4. Clicar em cadastrar.
  - Resultado esperado: mensagem `Este email já está sendo usado`.

- Caso de teste 3: Cadastro com falha - email inválido
  - Pré-condição: nenhum.
  - Passos:
    1. Acessar a página de login.
    2. Clicar em cadastrar.
    3. Preencher nome, email inválido e senha.
    4. Clicar em cadastrar.
  - Resultado esperado: mensagem `Email deve ser um email válido`.

### 2. Login

- Caso de teste 4: Login com sucesso
  - Pré-condição: usuário existente.
  - Passos:
    1. Acessar a página de login.
    2. Preencher email e senha corretos.
    3. Clicar em entrar.
  - Resultado esperado: acesso efetuado com sucesso (não há validação textual adicional no teste atual).

- Caso de teste 5: Login com falha
  - Pré-condição: usuário existente.
  - Passos:
    1. Acessar a página de login.
    2. Preencher email correto e senha incorreta.
    3. Clicar em entrar.
  - Resultado esperado: mensagem `Email e/ou senha inválidos`.

### 3. Carrinho de Compras

- Caso de teste 6: Adicionar produto ao carrinho
  - Pré-condição: usuário autenticado.
  - Passos:
    1. Acessar a página de login.
    2. Fazer login com credenciais válidas.
    3. Pesquisar por `Logitech MX Vertical`.
    4. Adicionar o item à lista e ao carrinho.
  - Resultado esperado: produto adicionado ao carrinho.

- Caso de teste 7: Adicionar produto com quantidade maior
  - Pré-condição: usuário autenticado.
  - Passos:
    1. Acessar a página de login.
    2. Fazer login com credenciais válidas.
    3. Pesquisar por `Logitech MX Vertical`.
    4. Adicionar o produto e aumentar a quantidade.
    5. Adicionar ao carrinho.
  - Resultado esperado: item adicionado com quantidade incrementada.

## Critérios de Aceitação

- Os testes devem ser executáveis no Cypress sem falhas.
- A aplicação deve apresentar as mensagens esperadas para cada cenário de erro.
- O fluxo de login deve permitir prosseguir ao adicionar produtos ao carrinho.

## Riscos e Dependências

- Dependência de disponibilidade da aplicação `https://front.serverest.dev/login`.
- Dependência da consistência dos seletores `data-testid` usados nos testes.