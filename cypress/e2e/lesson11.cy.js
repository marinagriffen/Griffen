/* 
Viewport

cy.viewport(1000,600) -- в пикселях
cy.viewport('iphone-6','landscape')
cy.viewport('iphone-6','portrait')

Location

cy.location('href').should('eq','https://beaxy.com) -- проверяем правильность ссылки

Title

cy.title().should('eq','Beaxy:Online')

cy.scrollTo('bottom')

*/



describe ('Registry', () => {
    it('Check', () => {
        cy.viewport(1500,900)
        cy.visit('https://www.beaxy.com/');
        cy.get('[data-id=popUp-register-v4-email]').eq(1).type('abc@gmail.com')
        cy.contains('REGISTER NOW').click()
        cy.get('[data')
        


    });

})

