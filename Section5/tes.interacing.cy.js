/// <reference types="cypress" />

describe('working with input', () => {
    it('visit the website', () => {
      
       cy.visit('http://zero.webappsecurity.com/login.html')
       cy.url().should('include', 'login.html')
    })
    it('should fill username', () => {
       cy.get('#user_login').clear()
       cy.get('#user_login').type('username')
    })
    it('should fill password', () => {
       cy.get('input[name="user_password"]').clear()
       cy.get('input[name="user_password"]').type('password')
    })
    it('checklist keep me signed in', () => {
       cy.get('#user_remember_me')
       cy.get('#user_remember_me').type('checkbox')
    })
    it('sign in', () => {
       cy.get('input[name="submit"]')
       cy.get('input[name="submit"]').type('submit')

      //  cy.get(':nth-child(3) > .dropdown-toggle').click()
      //  cy.get('#logout_link').click()
    })
})
