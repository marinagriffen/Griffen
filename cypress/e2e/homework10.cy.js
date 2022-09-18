// Calculator

describe('Calculator', () => {
    it('Value check', () => {
        cy.visit('https://www.beaxy.com/');
        cy.get('[type="number"]',{timeout:5000}).clear().type('50');
        cy.get('.widget__select-block .select-block-active-quote__value').click();
        cy.get('[data-name="GO"]').click();
        cy.get('.widget__output-data-wrapp .widget__output-data').invoke('number').should('equal', '111111111.11111112'); //не работает, но я не поняла как это сделать
        cy.get('.widget__select-block-btn.hard-btn-link').click();
        

    });
})