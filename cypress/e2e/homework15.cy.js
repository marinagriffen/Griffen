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
    
/* Comments
    1. Сначала в тесте надо было создать заказ с id -> IDs with value >= 1 and <= 10
    2. Вторым шагом будет уже второй реквест на удаление этого ордера
    3. У тебя не работает проверка, 
                expect(response).to.have.eq(200)
       Если ты зайдешь в UI Cypress: то ты увидишь там что response ты прост так не сможешь проверить, потому что внетри есть еще property.
      
Response Body: "{\"code\":200,\"type\":\"unknown\",\"message\":\"11\"}"
Response Headers : {date: 'Tue, 11 Oct 2022 13:39:35 GMT', content-type: 'application/json', transfer-encoding: 'chunked', connection: 'keep-alive', access-control-allow-origin: '*', …}
Response Status : 200


it.only("Delete purchase order by ID", () => {
    const body = {
      id: 11,
      petId: 4,
      quantity: 1,
      shipDate: "2022-10-10T19:03:51.349Z",
      status: "placed",
      complete: true,
    };
    cy.request("POST", "https://petstore.swagger.io/v2/store/order", body)
      .its("status")
      .should("equal", 200);

    cy.request("DELETE", "https://petstore.swagger.io/v2/store/order/11").then(
      (response) => {
        expect(response.body.code).to.have.eq(200);
      }
    );
  });

    */
    

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


/*Comments: Не вижу остальные реквесты не все сделаны  также не вижу 16 домашку */
