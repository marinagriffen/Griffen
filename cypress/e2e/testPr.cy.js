
describe ('Sign up page form', () => {

    before (() => {
      cy.visit('https://www.beaxy.com/register/')
  
    });
  
    it ('Form', () => {
        cy.get('[name="email"]').type('abc@gmail.com');
        cy.get('#_pass').type('Kd1234#5678');
        cy.get('.selected-country-arrow>svg').click(); //svg 
        cy.get('div[class="custom-select-wrap"]').click();
        cy.get('[name="phoneNumber"]').type('543543545')
        cy.get('#popUp-register-promo').type('test');
        cy.get ('[data-type="castomCheckbox"]').click();
        cy.get('form[data-form="register"] button[type="submit"]').click()
 
    });
   
  }); 