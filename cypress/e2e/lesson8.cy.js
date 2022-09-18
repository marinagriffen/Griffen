
describe('Auth', () => {
  
  before (() => {
    cy.visit('https://facebook.com');
  });

  after(() => {
    cy.log('after');
  });

  beforeEach(() => {
    cy.visit ('https://facebook.com')
  });

  afterEach(() => {
    cy.log('test')
  });


  it('passes', () => {
    cy.visit('https://facebook.com');
    cy.get('h2').invoke('text').should('equal',"Facebook допомагає тримати зв'язок з рідними та близькими.");
    cy.get('[name="email"]').type('abc@gmail.com');
    cy.get('[name="pass"]').type('12345');
    
    cy.get('[name="email"]').invoke('val').should('eq','abc@gmail.com');
    cy.get('[name="login"]').click();

  });
});
