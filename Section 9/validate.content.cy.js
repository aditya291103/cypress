/// <reference types="cypress" />

it('tugas validasi content', () => {

    var user = {
        "abilities": [
            {
                "ability": {
                    "name": "limber",
                    "url": "https://pokeapi.co/api/v2/ability/7/"
                },
            }
        ],
    }
    cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/ditto', user).then((Response) => {

        expect(Response.status).equal(200)
        expect(Response.body.abilities[0].ability.name).to.eq("limber")
        expect(Response.body.abilities[0].ability.url).to.eq("https://pokeapi.co/api/v2/ability/7/")
    })

})