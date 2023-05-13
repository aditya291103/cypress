/// <reference types="cypress" />

describe('searchbox text', function()  {
 before(() => {
  cy.visit('http://zero.webappsecurity.com/index.html')
 })
 it('should type searchbox and submit', () => {
  cy.get('#searchTerm').type('online {enter}')
})
it('should show search result page', () => {
   cy.get('h2').should('contain.text','Search Results:')
   cy.get(':nth-child(4) > :nth-child(1) > a').should('contain.text', 'Zero - Free Access to Online Banking')
   cy.get(':nth-child(2) > a').should('contain.text', 'Zero - Online Statements')
 })
})