/// <reference types="cypress"/>
class SearchPage{
    getTitle(){
        return cy.get('[id="glow-ingress-line1"]', {timeout:3000})
    }

    getSearchBox(){
        return cy.xpath('//input[@id="twotabsearchtextbox"]', {timeout:3000})
        
    }

    getSearchText(){
        return cy.get('.s-desktop-toolbar .a-text-bold', {timeout:3000})
    }
    getFisrtProduct(){
        return cy.xpath('(//span[contains(text(),"Apple iPhone 13")])[5]/parent::a',{timeout:3000})
    }
    
}
const searchPage = new SearchPage();
export default searchPage;
//export default SearchPage;