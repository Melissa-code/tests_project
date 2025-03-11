// https://on.cypress.io/api

describe('homePage test', () => {
  
  beforeEach( ()=> {
    cy.visit("/")
  })

  it('Visits the app root URL', ()=> {
    cy.visit("/")
    cy.contains("h1", "Cliquer ici")
  })

  it('Check an element', ()=> {
    cy.get('.greetings').should('have.length', 1)
    cy.get('.greetings h2').first().should('have.text', 'Ou là')
    cy.get('.greetings h2').last().should('have.text', 'Par ici aussi')
  })

})
