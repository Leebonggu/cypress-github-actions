Cypress.config();

describe('initialize App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4173');

  })

  it('Render Data', () => {
    cy.intercept({
      method: 'GET',
      url: '/user',
      hostname: 'localhost',
    }).as('apiCheck')
  
    // cy.wait('@apiCheck')
    cy.get('.main').contains('loading...')
  })
})

export {}