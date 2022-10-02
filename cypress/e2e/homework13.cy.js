// Frames


describe ('DemoQA test1', () => {
    it('text', () => {
        cy.visit('https://demoqa.com/frames');
        cy.get('#frame1').then(function($iFrame) {
            const iframe = $iFrame.contents().find('body')
            cy.wrap(iframe).find('[id="sampleHeading"]').then((el) => {
                expect(el.text()).to.have.contain('This is a sample page')
            })
        })


    })
})


