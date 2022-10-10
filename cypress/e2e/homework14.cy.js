// Small steps
// Custom marks
// Range slider
// Slider with input field
// Music player

///<reference types= "Cypress"/>
describe ('Sliders',() => {
    beforeEach(() => {
        cy.visit('https://mui.com/material-ui/react-slider/');
        cy.viewport(1600,900);
        cy.wait(2000);
    });

    it('Small steps', () => {
        cy.get('[id="small-steps"]').scrollIntoView({duration:1000})
        cy.get('.MuiSlider-root .MuiSlider-thumbColorPrimary').eq(6)
        .invoke('attr','style','left:73.3333%').click()
        cy.get('[aria-label="Small steps"]')
        .should('have.attr','value','6e-8')
    });

    it('Custom marks', () => {
        cy.get('[id="custom-marks"]').scrollIntoView({duration:1000})
        cy.get('.MuiSlider-root .MuiSlider-valueLabel').eq(5)
        .invoke('attr', 'style','left:20%')
        cy.get('[aria-label="Custom marks"]')
        .should('have.attr','value', '20°C')
        
    
    


    })
})