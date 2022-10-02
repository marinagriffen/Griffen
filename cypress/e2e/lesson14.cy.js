///<reference types= "Cypress"/>
import { faker } from '@faker-js/faker';
import '@4tw/cypress-drag-drop';

// npx cypress run - запуск всех тестов через консоль
// npx cypress run --spec "cypress\e2e\Test.cy.js"  - запуск конкретного теста по Relative path



// Faker

describe ('Authorization screen',() => {
    const randomEmail = faker.internet.email();
    const randomName = faker.name.fullName();
    const randomLastName = faker.name.lastName();
    const id = faker.datatype.uuid();
    const img = faker.image.avatar()
    //data
    //birthday
    //password
    const arr = faker.helpers.arrayElement(['free', 'toy', 'bla'])
    


    before(() => {
        cy.visit ('https://www.beaxy.com/register')
        cy.viewport(1600,900)
        cy.wait(2000)

        


    });

    it ('Login', () => {
        
        cy.get('#popUp-register-email').type(randomEmail);
        //cy.screenshot()
       
    })

})

// Window alert


describe ('Authorization screen',() => {
    before(() => {
        cy.visit ('https://testautomationpractice.blogspot.com/')
        cy.viewport(1600,900)
        cy.wait(2000)


    });

    it ('Login', () => {
        cy.get('[onclick="myFunction()"]').click()
        cy.on('window:alert', (text) => {
            expect(text).to.equal('Press a button')

        })

       
    })

})



//Drag&drop


describe ('Authorization screen',() => {
    before(() => {
        cy.visit ('https://testautomationpractice.blogspot.com/')
        cy.viewport(1600,900)
        cy.wait(2000)


    });

    it('Login', () => {
        cy.get('#gallery li:nth-child(1)').drag('#trash');

    it('Slider', () => {
        cy.get('#slider span').invoke('attr', 'style','left:80%')
        .should('attr', 'style','left:80%')
    })
        
       
    })

})



//Sliders

describe ('Authorization screen',() => {
    before(() => {
        cy.visit ('https://mui.com/material-ui/react-slider/')
        cy.viewport(1600,900)
        cy.wait(2000)
    })

        it('Slider', () => {
            cy.get('.MuiSlider-root span:nth-child(2)')
            .invoke('attr','style','left: 0%; width: 99%;')
            .should('attr','style','left: 0%; width: 99%;')
            cy.get('.MuiSlider-root span:nth-child(3)')
            .invoke('attr','style','left: 99%;')
            cy.get('.MuiSlider-root input')
            .invoke('attr','aria-valuenow', '99')
            .invoke('attr', 'value', '99')
        });
    
    }) 