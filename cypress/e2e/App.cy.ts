describe('initialize App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');

  })

  it('Render Data', () => {
    cy.intercept({
      method: 'GET',
      url: '/user',
      hostname: 'localhost',
    }).as('apiCheck')
  
    // cy.wait('@apiCheck')
    cy.get('.main').contains('Hello')
    cy.get('.main').contains('John')
  })
})