// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('paymen', () => {
    // cy.clearCookies()
    cy.clearLocalStorage()


          cy.get('#pay_bills_tab > a').click()

          cy.get('#sp_payee').select("Apple")
          cy.get('#sp_account').select('Loan')
          cy.get('#sp_amount').type("100")

          cy.get('#sp_date').click()
          cy.get(':nth-child(4) > :nth-child(4) > .ui-state-default').click()

          cy.get('#sp_description').type('new brand')
          cy.get('#pay_saved_payees').click()
          cy.get('#alert_content > span').should('contain.text', 'The payment was successfully submitted.')

})

// Cypress.Commands.add('loginViaAPI', () => {
//   cy.request({
//     method: 'POST',
//     url: 'https://kasir-api.belajarqa.com/authentications',
//     body: {
//       email: 'adityanurfahmi37@gmail.com',
//       password: 'sirohige01'
//     },

//   })
// 			.then((response) => {
// 				expect(response).property('status').to.equal(201)
// 				cy.setCookie('status', response.body.status)
// 				cy.setCookie('message', response.body.message)

//   })
// })
// Cypress.Commands.add('loginViaAPI', () => {
// 	// let accessToken =
// 			// '572ca63f1cdc79cfc386ada9958882570ad64e7371d8de29238a301be8197f84'
// 		cy.request({
// 				method: 'POST',
// 				url: 'https://kasir-api.belajarqa.com/authentications',
// 				// headers: {
// 				//   authorization: 'Bearer' + accessToken,
// 				// },
// 				body: {
// 					email: 'adityanurfahmi37@gmail.com',
// 					password: 'sirohige01',
// 				},
// 			})
// 			.then(response => {
// 				expect(response).property('status').to.equal(201)
// 				cy.setCookie('status', response.body.status)
// 				cy.setCookie('message', response.body.message)
// 			})
// })