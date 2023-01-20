/// <reference types="cypress"/>

class HomePage {
    enterURL() {
    cy.visit("https://qaautomationlabs.com/");
    }
    validateMenus(menus) {
        return cy.contains(menus);
    }
    verifyPageTitle() {
    return cy.title().should("eq", "About Us - QAAutomationLabs");
    }
    // getSearchBox(){
    //     return cy.get('[id="twotabsearchtextbox"]', {timeout:3000})
    // }

    getSearchText(){
        return cy.get('.s-desktop-toolbar .a-text-bold', {timeout:3000})
    }
    }
    
    const homepage = new HomePage();
    export default homepage;