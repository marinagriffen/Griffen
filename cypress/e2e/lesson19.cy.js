/// <reference types = 'Cypress'/>

describe ('Home page', () => {
    
    before(() => {
        cy.visit('http://autopract.com/');
        cy.viewport(2250,1900);
        cy.wait(2000);
    })

    it('commandTest', () => {
        cy.clickOnElement('[aria-label="Close"]')
        //cy.get('[aria-label="Close"]').click();
    })

    it('commandTest', () => {
        cy.clickOnElement('[aria-label="Close"]')
        cy.clickOnElement('.bar-style')
    })

    it('commandTest', () => {
        cy.enterValue ('[id="mce-EMAIL"]')
    })

    it.only('commandTest', () => {
        cy.clickOnElement('[aria-label="Close"]')
        cy.get('h4').findByText('welcome to fashion')
    })



})