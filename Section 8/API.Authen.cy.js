describe('Basic Auth Costum Commands', () => {
  it('Successfully login using custom commands', () => {

    // let accessToken =
    // '572ca63f1cdc79cfc386ada9958882570ad64e7371d8de29238a301be8197f84' // use token

    cy.request({
      method: 'POST',
      url: 'https://kasir-api.belajarqa.com/au thentications',
      // headers: {
      //   authorization: 'Bearer' + accessToken,
      // },
      body: {
        email: 'adityanurfahmi37@gmail.com',
        password: 'sirohige01'
      },

    })
      .then((response) => {
        expect(response).property('status').to.equal(201)

        cy.setCookie('status', response.body.status)
        cy.setCookie('message', response.body.message)
        // cy.setCookie('sessionId', response.body.sessionId)
        // cy.setCookie('userId', response.body.userId)
        // cy.setCookie('userName', response.body.userName)
      })
  });
})  



