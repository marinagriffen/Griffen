// Iframe


describe ('work', () => {
    it ('test', () => {
        cy.viewport(1600,1024)
        cy.visit("http://the-internet.herokuapp.com/iframe")
        cy.wait(3000)
        cy.get('#mce_0_ifr').then(function($iFrame){
            const iframe = $iFrame.contents().find('body')
            cy.wrap(iframe)
            .clear()
            .type('Hello')
        })
    })

})


describe ('work', () => {
    it ('test1', () => {
        cy.viewport(1600,1024)
        cy.visit("https://elfsight.com/ru/instagram-feed-instashow/create/")
        cy.wait(3000)
        cy.get('iframe').then(function($iFrame){
            const iframe = $iFrame.contents().find('body')
            cy.wrap(iframe).find('.ea-editor-templates-header').then((el) => {
                expect(el.text()).to.be.equal('Select a template')

            })
        
        })
    })

})