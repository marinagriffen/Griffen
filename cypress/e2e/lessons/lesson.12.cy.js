/* Assertions
expect(actual result).to.equal(ожидаемый результат)

*/

describe ('Assertions', () => {
    it.only('test-1',() => {
        const name = 'Marfa'
        expect(name).to.equal('Marfa')
    })


    it('test-2',() => {
        const array = ['apple','orange','banana'];
        expect(array).to.contain('apple');
        expect(array).not.empty
        expect(array).is.not.empty
    })

    it('test-3',() => {
        const obj = {
            lastName: 'Smith',
            firstName: 'Joe',
            job: {title:'QA'}

        }
        expect(obj).to.deep.equal({firstName:'Joe', lastName:'Smith'})
        expect(obj).to.have.any.keys('firstName')
        expect(obj).to.have.all.keys('lastName')

    })

    it('test-4', () => {
        const isOld = 18 > 16 ? true : false
        expect(isOld).to.be.true
    })

    it('test-5', () => {
        expect('testing').to.match(/^test/)
        expect('123').to.match(/^[0-9]/)

    })

    it('test-6', () => {
        expect ('testing').to.have.string('test')
        expect('testing').to.have.contain('test')
    })



})




describe('Assertion',() => {
    it ('test',() => {
        cy.visit('https')
        cy.get('h1').invoke('text').then(headerPage) => {
            cy.log(headerPage)
        })
    })


    it('test1', () => {
        cy.visit('https')
        cy.get('h1').then(function(headerPage1) {
            console.log(headerPage1.text())
        })
    })


    it('Pr task1', () => {
        cy.visit('https://www.beaxy.com/buy-sell/');
        cy.get('div h1').invoke('text').then(result) => {
            cy.log(result)
            expect(result).to.be.equal('Byt and Sell')
        })
    })
})