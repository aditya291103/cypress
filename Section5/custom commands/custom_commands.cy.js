/// <reference types="cypress" />

describe('working with input', () => {
  
  it('visit the website', () => {
    
     cy.visit('http://zero.webappsecurity.com/login.html')
     cy.url().should('include', 'login.html')
  })
  // it('should fill username', () => {
  //    cy.get('#user_login').clear()
  //    cy.get('#user_login').type('username')
  // })
  // it('should fill password', () => {
  //    cy.get('input[name="user_password"]').clear()
  //    cy.get('input[name="user_password"]').type('password')
 
  // })
  it('should try to login', () => {
    cy.fixture("users").then(users => {
      const username = users.username
      const password = users.password

      // cy.get('#user_login').clear()
      cy.get('#user_login').type(username)

      cy.get('#user_password').type(password)

      cy.get('#user_remember_me').click()

      cy.get('input[name="submit"]').click()


      cy.paymen(username, password)
    })
  })
})

