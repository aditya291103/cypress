// TUGAS FIXTURES&STASTIC DATA


/// <reference types="cypress" />

describe("Browser actions", { scrollBehavior: false }, function()  {

    it("Should load correct url", () => {
      cy.clearLocalStorage()
      cy.visit("https://kasirdemo.belajarqa.com/");
      cy.url().should("include", "login"); 

      cy.fixture("user").then(user => {
        const username = user.username
        const password = user.password

        cy.get("#email").type(username)
        cy.get("#password").type(password)
        cy.get('.chakra-button').click()  
      })
    })
    it("get kategori", () => {

    cy.get('[href="/categories"] > .css-ewi1jp > .css-1xhj18k').click()
    cy.get('.css-1piskbq').click()
    cy.get("#nama").type("Roti");
    cy.get("#deskripsi").type("Rasa Pisang Coklat");
    cy.get(".chakra-button").click();

  })
    it("log out", () => {

      cy.wait(5000);
      cy.get('#menu-button-14').click()
      cy.get('#menu-list-14-menuitem-12').click()
    })

})