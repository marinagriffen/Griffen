// Авторизация

describe ('Authorization screen',() => {
    before(() => {
        cy.visit ('https://www.beaxy.com/')
        cy.viewport(1600,900)
    });

    it ('Login', () => {
        cy.get('.header-buttons__unlogin-state .header-btn__login ',{ timeout: 10000 }).click();
        cy.get('#popUp-login-email').type('abc@gmail.com');
        cy.get('#popUp-login-password').type('K50m0512345');
        cy.get('#login-checkbox').click();
        cy.get('.popUp-form-input-wrap.popUp-form-login-btn').click()


    })

})



// Заголовки


describe('Headings check', () => {
    before (() => {
        cy.visit('https://www.beaxy.com/careers/');

    });

    it ('Careers headers', () => {
        cy.get('.entry-header .page-title').contains('Careers')
        cy.contains('h1', 'team');
        cy.contains('h2','join');
        cy.contains('h3','Bridge gaps');
        cy.contains('h3','Connect globally');
        cy.contains('h3','Value driven');
        cy.contains('h3','Build powerfully');
        cy.contains('h3','Opportunities for everyone');
        cy.contains('h3','Empowering freedom');
        cy.get('h2').contains('Want to be part of our team?') 
    
    })

});




//Первый пост Blog page

describe ('Blog', () => {
    it ('First post', () => {
        cy.visit('https://www.beaxy.com/blog/')
        cy.get('div:first-child.blog-item').contains('Introduction to Bitcoin, Cryptocurrency, and Crypto Markets')
        cy.get('div:first-child.blog-item').find('img')

    });

});