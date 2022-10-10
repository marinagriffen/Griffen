// Home task:
// https://petstore.swagger.io/#/
// Напишите тесты на все эндпоинты store и user


describe ('Swagger test', () => {
    it('Place an order for a pet', () => {
        const body = {
            id: 115,
            petId: 4,
            quantity: 1,
            shipDate: "2022-10-10T19:03:51.349Z",
            status: "placed",
            complete: true
          }
        cy.request('POST', 'https://petstore.swagger.io/v2/store/order', body)
        .its('status').should('equal', 200)

    })


    it('Find purchase order by ID', () => {
        cy.request('GET', 'https://petstore.swagger.io/v2/store/order/4')
        .its('body')

    })

    it('Delete purchase order by ID', () => {
        cy.request('DELETE', 'https://petstore.swagger.io/v2/store/order/4').then((response) => {
            expect(response).to.have.eq(200)

        })
    })

    it('Returns pet inventories by status', () => {
        cy.request('GET', 'https://petstore.swagger.io/v2/store/inventory').then((response) => {
            expect(response.body).to.have.be.not.null
        })    


    })
})
