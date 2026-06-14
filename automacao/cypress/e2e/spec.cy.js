describe('Teste de cadastro', () =>{
  it('Cadastro com sucesso', ()=>{
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="cadastrar"]').click()
    cy.get('[data-testid="nome"]').type('Teste Danilo')
    cy.get('[data-testid="email"]').type('daniloteste@gmail.com')
    cy.get('[data-testid="password"]').type('123')
    cy.get('[data-testid="cadastrar"]').click()
    cy.get('.alert > :nth-child(2)').contains('Cadastro realizado com sucesso')
  })

  it('Cadastro com falha - cadastrar o mesmo email mais de uma vez', ()=>{
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="cadastrar"]').click()
    cy.get('[data-testid="nome"]').type('Teste Danilo')
    cy.get('[data-testid="email"]').type('daniloteste@gmail.com')
    cy.get('[data-testid="password"]').type('123')
    cy.get('[data-testid="cadastrar"]').click()
    cy.get('.alert > :nth-child(2)').contains('Este email já está sendo usado')
  })

  it('Cadastro com falha - infomando e-mail incorreto', ()=>{
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="cadastrar"]').click()
    cy.get('[data-testid="nome"]').type('Teste Danilo')
    cy.get('[data-testid="email"]').type('daniloteste@gmail')
    cy.get('[data-testid="password"]').type('123')
    cy.get('[data-testid="cadastrar"]').click()
    cy.get('.alert > :nth-child(2)').contains('Email deve ser um email válido')
  })
})

describe('Teste de Login', () => {
  it('Login com sucesso', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').type('daniloteste@gmail.com')
    cy.get('[data-testid="senha"]').type('123')
    cy.get('[data-testid="entrar"]').click()
    cy.wait(500)
  })

  it('Login com falha', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').type('daniloteste@gmail.com')
    cy.get('[data-testid="senha"]').type('123456')
    cy.get('[data-testid="entrar"]').click()
    cy.get('.alert > :nth-child(2)').contains('Email e/ou senha inválidos')
  })
})

describe('Teste produtos no carrinho', ()=>{
  it('Adicionar produto', ()=>{
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').type('daniloteste@gmail.com')
    cy.get('[data-testid="senha"]').type('123')
    cy.get('[data-testid="entrar"]').click()
    cy.get('[data-testid="pesquisar"]').click()
    cy.get('[data-testid="pesquisar"]').type('Logitech MX Vertical')
    cy.get('[data-testid="botaoPesquisar"]').click()
    cy.get(':nth-child(1) > .card-body > div > [href="/minhaListaDeProdutos"] > [data-testid="adicionarNaLista"]').click()
    cy.get('[data-testid="adicionar carrinho"]').click()
  })

  it('Adicionando mais de produto', ()=>{
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').type('daniloteste@gmail.com')
    cy.get('[data-testid="senha"]').type('123')
    cy.get('[data-testid="entrar"]').click()
    cy.get('[data-testid="pesquisar"]').click()
    cy.get('[data-testid="pesquisar"]').type('Logitech MX Vertical')
    cy.get('[data-testid="botaoPesquisar"]').click()
    cy.get(':nth-child(1) > .card-body > div > [href="/minhaListaDeProdutos"] > [data-testid="adicionarNaLista"]').click()
    cy.get('[data-testid="product-increase-quantity"]').click()
    cy.get('[data-testid="adicionar carrinho"]').click()
  })
  
})