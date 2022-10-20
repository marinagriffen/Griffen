/// <reference types = 'Cypress'/>

import toolBar from '../base/toolBar'

describe('Toolbar', () => {
 
    before(() => {
      cy.visit('http://autopract.com');
      cy.viewport(2250, 1900);
      cy.wait(2000);
      cy.get('[aria-label="Close"]', {timeout: 5000}).click();
     });
     it('open page', () => {
    toolBar.openPageOnSectionHome('beauty')
  

    });
  });