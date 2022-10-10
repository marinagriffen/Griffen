describe ('Auth', () => {
    beforeEach(() => {
     cy.visit('https://facebook.com');
    });
  
    it('Select form', () => {
      cy.get('#day').select('25');
      cy.get('#month').select('дек');
      cy.get('#year').select('1995');
  
      cy.get('#day').invoke('val').should('eq','25');
      cy.get('#month').invoke('val').should('eq','12');
      cy.get('#year').invoke('val').should('eq','1991')
    });
  });