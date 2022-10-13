/// <reference types = 'Cypress'/>

describe('Cookies', () => {
    it('checkCookies', () => {
        cy.viewport(1950,1200);
        cy.visit('https://www.beaxy.com/');
        cy.wait(5000);
        cy.get('.modal-cookie-continue a', {timeout: 4000}).click();
        cy.getCookies('beaxy_cookie_notificated', {timeout:4000}).should('have.property', 'value', 'true')

    })

    it('setCookies', () => {
        cy.viewport(1950,1200);
        cy.visit('https://www.beaxy.com/');
        cy.wait(5000);
        cy.setCookie('alphaSchool', 'true')

    })

    it('clearCookies', () => {
        cy.viewport(1950,1200);
        cy.visit('https://www.beaxy.com/');
        cy.wait(5000);
        cy.clearCookies();

    })

    it('clearCookies', () => {
        cy.viewport(1950,1200);
        cy.visit('https://www.beaxy.com/');
        cy.wait(5000);
        cy.clearCookie('_ga');

    })

    it('updateCookie', () => {
        cy.viewport(1950,1200);
        cy.visit('https://www.beaxy.com/');
        cy.wait(5000);
        cy.get('.modal-cookie-continue a', {timeout: 4000}).click()
        cy.clearCookie('beaxy_cookie_notificated').then(function(){
            cy.setCookie('beaxy_cookie_notificated','false').then(function(){
                cy.getCookie('beaxy_cookie_notificated',{timeout:4000}).should('have.property','value','false')
            })
        })

    })

    it('deleteValueCookie', () => {
        cy.viewport(1950,1200);
        cy.visit('https://www.beaxy.com/');
        cy.wait(5000);
        cy.get('.modal-cookie-continue a', {timeout: 4000}).click();
        cy.getCookies('beaxy_cookie_notificated').then(function(){
            cy.getCookie('beaxy_cookie_notificated').should('be.null')

        })
    })

    it('checkLengthCookies', () => {
        cy.viewport(1950,1200);
        cy.visit('https://www.beaxy.com/');
        cy.wait(5000);
        cy.getCookies().should('have.length',3)

    })

    it('checkClearCookies', () => {
        cy.viewport(1950,1200);
        cy.visit('https://www.beaxy.com/');
        cy.wait(5000);
        cy.clearCookies();
        cy.getCookies().should('be.empty')

    })

    it('LocalStorage', () => {
        cy.viewport(1950,1200);
        cy.visit('https://www.beaxy.com/');
        cy.wait(5000);
        cy.setLocalStorage('TestKey','TestValue')
        
    })

    it('getLocalStorage', () => {
        cy.viewport(1950,1200);
        cy.visit('https://www.beaxy.com/');
        cy.wait(5000);
        cy.setLocalStorage('TestKey','TestValue')
        cy.getLocalStorage('TestKey').should('equal','TestValue')
        cy.clearLocalStorage()       

    })

})