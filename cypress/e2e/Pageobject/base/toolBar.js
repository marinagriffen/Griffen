class toolBar {

    get buttonMenuHome() {
        return '#mainnav > ul > li:nth-child(2)';
    }

    get homeSubMenu() {
        return '#mainnav > ul > li:nth-child(2) > ul'
    }

    /**
     * 
     * @param text Link name 
     * @returns 
     */



    pageInSectionHome(text) {
        return cy.get('#mainnav > ul > li:nth-child(2) > ul > li > a').contains(text)
    }

    openPageOnSectionHome() {
        cy.get(this.buttonMenuHome).click()
        cy.get(this.homeSubMenu).click()
        this.pageInSectionHome(namePage).click()
    }

} module.exports = new toolBar()