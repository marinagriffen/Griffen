describe ('Visual test', () => {
    it('test_1', () => {
        cy.visit('https://www.beaxy.com/');
        cy.viewport(1950,1600);
        cy.matchImageSnapshot();
        cy.wait(8000)
        cy.get('.home-table').invoke('remove')
        cy.matchImageSnapshot();


    })

})

//Practice

describe('Monobank', () => {
    it('Home page', () => {
        cy.viewport(1900,1600)
        cy.visit('https://www.monobank.ua/')
        cy.wait(5000)
        cy.matchImageSnapshot()
    });

    it('Платежи', () => {
        cy.viewport(1900,1600)
        cy.visit('https://www.monobank.ua/')
        cy.wait(5000)
        cy.get('.tab-panel .tab-link:nth-child(2)').click().matchImageSnapshot()

    })
})