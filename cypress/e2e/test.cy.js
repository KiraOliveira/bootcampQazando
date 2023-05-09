describe('Login', () => {
  it('Login com Sucesso', () => {
    // Acessar a aplicação
    cy.visit('http://automationpratice.com.br')

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

    // Aqui o elemento será validado ante do Click run elemento
    cy.get('.clear .theme-btn-one.btn_md')
      .should('exist')
      .and('be.visible')
      .and('be.enabled')
      .click()

    // Aqui ele valida se o modal de Sucesso aparece
    cy.get('.swal2-popup').should('exist').and('be.visible')

    // Aqui ele valida se a palavra "Sucess" aparece
    cy.get('#swal2-title').should('exist')
    //cy.contain('Sucess')

    // Aqui ele vai clicar no "OK" e fechar o modal
    cy.get('.swal2-confirm').should('exist').and('be.enabled').click()
  })
})
