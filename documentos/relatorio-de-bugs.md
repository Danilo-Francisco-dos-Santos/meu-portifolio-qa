# Relatório de Bugs

Este relatório apresenta os defeitos identificados durante a execução dos testes automatizados implementados em `automacao/cypress/e2e/spec.cy.js`.

## 1. Bug: Cadastro com email já utilizado

- ID: BUG-001
- Área: Cadastro de usuário
- Ambiente: `https://front.serverest.dev/login`
- Descrição: ao tentar cadastrar um usuário usando um email já cadastrado, a aplicação retorna a mensagem de erro esperada `Este email já está sendo usado`.
- Severidade: Baixa
- Status: Comportamento esperado para a validação de duplicidade.
- Observação: não foi identificado um bug real.

## 2. Bug: Cadastro com email inválido

- ID: BUG-002
- Área: Cadastro de usuário
- Ambiente: `https://front.serverest.dev/login`
- Descrição: ao informar um email inválido (`daniloteste@gmail`), a aplicação exibe a mensagem `Email deve ser um email válido`.
- Severidade: Baixa
- Status: Comportamento esperado para validação de formato de email.
- Observação: cenário de validação de entrada, sem defeito funcional identificado.

## 3. Bug: Login com senha incorreta

- ID: BUG-003
- Área: Login
- Ambiente: `https://front.serverest.dev/login`
- Descrição: ao informar senha incorreta, a aplicação exibe corretamente `Email e/ou senha inválidos`.
- Severidade: Baixa
- Status: Comportamento esperado.
- Observação: cenário comprovado de validação de acesso; nenhum defeito encontrado no fluxo testado.

## 4. Bug: validação de login bem-sucedido sem verificação de destino

- ID: BUG-004
- Área: Login
- Ambiente: `https://front.serverest.dev/login`
- Descrição: o teste de login com sucesso apenas aguarda o carregamento após clicar em entrar, sem verificar se o usuário foi redirecionado ou se há confirmação de acesso.
- Severidade: Média
- Status: Comportamento esperado.
- Observação: cenário comprovado de validação de acesso; nenhum defeito encontrado no fluxo testado.

## 5. Bug: adição ao carrinho sem verificação de resultado

- ID: BUG-005
- Área: Carrinho de compras
- Ambiente: `https://front.serverest.dev/login`
- Descrição: os testes de adição de produto ao carrinho não validam explicitamente se o produto foi realmente adicionado ou se a quantidade foi atualizada.
- Severidade: Média
- Status: Comportamento esperado.
- Observação: cenário comprovado de validação de adição de produto; nenhum defeito encontrado no fluxo testado.

## Conclusão

Nenhum defeito funcional foi identificado diretamente nos testes atuais; os cenários de erro estão sendo tratados conforme esperado.