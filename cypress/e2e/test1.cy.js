describe('Novidades', () => {
  // Cenários onde o usuário fecha o modal de "SUCESSO" - Click e Enter
  it('Cenário 01 - Cadastrar e-mail com sucesso usando o Click', () => {
    // Acessar a aplicação
    cy.visit('/')

      // Aqui será validado o elemento
      .get('#top_header')
      .should('exist')
      .and('be.visible')

    // Criar os steps/ações
    // Selecionar esse campo
    // Preencher um campo

    // Aqui o elemendo será validado e preenchido
    cy.get('.form-control')
      .should('exist')
      .and('be.visible')
      .and('be.enabled')
      .type('kira.oliveira.web@gmail.com')

    // Aqui o elemento será validado antes do Click run elemento
    cy.get('.clear .theme-btn-one.btn_md')
      .should('exist')
      .and('be.visible')
      .and('be.enabled')
      .click()

    // Aqui ele valida se o modal de Sucesso aparece
    cy.get('.swal2-popup').should('exist').and('be.visible')

    // Aqui ele valida se a palavra "Sucess" aparece
    cy.get('#swal2-title')
      .should('exist')
      .and('be.visible')
      .and('have.text', 'Success')
    //cy.contain('Sucess')

    // Aqui ele vai clicar no "OK" e fechar o modal
    cy.get('.swal2-confirm').should('exist').and('be.enabled').click()

    //Aqui valida se o modal foi realmente fechado
    cy.get('#swal2-title').should('not.exist')
  })

  it('Cenário 02 - Cadastrar e-mail com sucesso apertando o "Enter', () => {
    // Acessar a aplicação
    cy.visit('/')

      // Aqui será validado o elemento
      .get('#top_header')
      .should('exist')
      .and('be.visible')

    // Criar os steps/ações
    // Selecionar esse campo
    // Preencher um campo

    // Aqui o elemendo será validado e preenchido
    cy.get('.form-control')
      .should('exist')
      .and('be.visible')
      .and('be.enabled')
      .type('kira.oliveira.web@gmail.com{enter}')

    // Aqui ele valida se o modal de Sucesso aparece
    cy.get('.swal2-popup').should('exist').and('be.visible')

    // Aqui ele valida se a palavra "Sucess" aparece
    cy.get('#swal2-title')
      .should('exist')
      .and('be.visible')
      .and('have.text', 'Success')
    //cy.contain('Sucess')

    // Aqui ele vai clicar no "OK" e fechar o modal
    cy.get('.swal2-confirm').should('exist').and('be.enabled').click()

    //Aqui valida se o modal foi realmente fechado
    cy.get('#swal2-title').should('not.exist')
  })

  // Cenário onde o usuaŕio não fechou o modal de "SUCESSO" - Click
  it('Cenário 03 - Cadastrar e-mail com sucesso usando o Click', () => {
    // Acessar a aplicação
    cy.visit('/')

      // Aqui será validado o elemento
      .get('#top_header')
      .should('exist')
      .and('be.visible')

    // Criar os steps/ações
    // Selecionar esse campo
    // Preencher um campo

    // Aqui o elemendo será validado e preenchido
    cy.get('.form-control')
      .should('exist')
      .and('be.visible')
      .and('be.enabled')
      .type('kira.oliveira.web@gmail.com')

    // Aqui o elemento será validado antes do Click run elemento
    cy.get('.clear .theme-btn-one.btn_md')
      .should('exist')
      .and('be.visible')
      .and('be.enabled')
      .click()

    cy.wait(2000)
  })

  it('Cenário 04 - Fechar modal de Sucesso', () => {
    // Acessar a aplicação
    cy.visit('/')

      // Aqui será validado o elemento
      .get('#top_header')
      .should('exist')
      .and('be.visible')

    // Criar os steps/ações
    // Selecionar esse campo
    // Preencher um campo

    // Aqui o elemendo será validado e preenchido
    cy.get('.form-control')
      .should('exist')
      .and('be.visible')
      .and('be.enabled')
      .type('kira.oliveira.web@gmail.com')

    // Aqui o elemento será validado antes do Click run elemento
    cy.get('.clear .theme-btn-one.btn_md')
      .should('exist')
      .and('be.visible')
      .and('be.enabled')
      .click()

    // Aqui ele valida se o modal de Sucesso aparece
    cy.get('.swal2-popup').should('exist').and('be.visible')

    // Aqui ele valida se a palavra "Sucess" aparece
    cy.get('#swal2-title')
      .should('exist')
      .and('be.visible')
      .and('have.text', 'Success')
    //cy.contain('Sucess')

    // Aqui ele vai clicar no "OK" e fechar o modal
    cy.get('.swal2-confirm').should('exist').and('be.enabled').click()

    //Aqui valida se o modal foi realmente fechado
    cy.get('#swal2-title').should('not.exist')
  })

  // Cenário onde o usuaŕio não fechou o modal de "SUCESSO" - Enter
  it('Cenário 05 - Cadastrar e-mail com sucesso apertando o "Enter"', () => {
    // Acessar a aplicação
    cy.visit('/')

      // Aqui será validado o elemento
      .get('#top_header')
      .should('exist')
      .and('be.visible')

    // Criar os steps/ações
    // Selecionar esse campo
    // Preencher um campo

    // Aqui o elemendo será validado e preenchido
    cy.get('.form-control')
      .should('exist')
      .and('be.visible')
      .and('be.enabled')
      .type('kira.oliveira.web@gmail.com{enter}')

    cy.wait(2000)
  })

  it('Cenário 06 - Fechar modal de Sucesso', () => {
    // Acessar a aplicação
    cy.visit('/')

      // Aqui será validado o elemento
      .get('#top_header')
      .should('exist')
      .and('be.visible')

    // Criar os steps/ações
    // Selecionar esse campo
    // Preencher um campo

    // Aqui o elemendo será validado e preenchido
    cy.get('.form-control')
      .should('exist')
      .and('be.visible')
      .and('be.enabled')
      .type('kira.oliveira.web@gmail.com{enter}')

    // Aqui ele valida se o modal de Sucesso aparece
    cy.get('.swal2-popup').should('exist').and('be.visible')

    // Aqui ele valida se a palavra "Sucess" aparece
    cy.get('#swal2-title')
      .should('exist')
      .and('be.visible')
      .and('have.text', 'Success')
    //cy.contain('Sucess')

    // Aqui ele vai clicar no "OK" e fechar o modal
    cy.get('.swal2-confirm').should('exist').and('be.enabled').click()

    //Aqui valida se o modal foi realmente fechado
    cy.get('#swal2-title').should('not.exist')
  })
})
