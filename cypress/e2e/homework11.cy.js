// Форма авторизации


describe ('Auth', () => {
    it('Log in', () => {
        cy.visit('https://yevheniiahlovatska.editorx.io/web-practice/')
        cy.wait(5000)
        cy.contains('Log In', { timeout: 10000 }).click()
        cy.get('[data-testid="buttonElement"]').click()
        cy.get('[type="email"]').type('abc@gmail.com')
        cy.get('[type="password"]').type('12345678')
        cy.get('[data-testid="buttonElement"]').click()
    });
});



// Комментарий к посту


describe('Comment', () => {
    it('Publish', () => {
        cy.visit('https://yevheniiahlovatska.editorx.io/web-practice/post/what-to-wear-to-a-blacktie-event').scrollTo('bottom')
        cy.wait(8000)
        //cy.get('.YCaN2C .H5tjni',{timeout:8000}).should('be.visible') //data-hook="blog-loaded-indicator"]
        cy.get('.YCaN2C .H5tjni').scrollIntoView({ duration: 8000 })
        Cypress.on('uncaught:exception', (err) => { //Error: ResizeObserver loop limit exceeded
            return false;
             });
        cy.get('[data-hook="comment-box-placeholder"]').eq(0).click();
        cy.get('[aria-describedby="placeholder-editor"]').type('test comment')
        cy.get('[data-hook="submit-button"]').click();
        //Авторизация
        cy.get('[data-hook=comments-author]').invoke('text').should('eq', 'test comment');

    })
})

