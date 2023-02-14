///
import homePage from "../../support/page-object/HomePage";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import searchProduct from "../../support/page-object/SearchProductPage";
import searchPage from "../../support/page-object/SearchPage";

// beforeEach(() => {
// cy.viewport(1600, 720);
// });
Given("I navigate to the Website", () => {
    cy.visit("https://qaautomationlabs.com/");
});
Then("Validate the menus in home page", (datatable) => {
datatable.hashes().forEach((element) => {
    
homePage.validateMenus(element.menu_name);
});
});
Then("Validate the title after login", (datatable) => {
datatable.hashes().forEach((element) => {
homePage.verifyPageTitle(element.title);
});
});

///

// Given("I navigate to the Website", () => {
// homePage.enterURL();
// });
When("Search the blog", (datatable) => {
datatable.hashes().forEach((element) => {
searchProduct.SearchProduct(element.blog);
// return "pending";
});
});
Then("Verify correct blog name searched", (datatable) => {
datatable.hashes().forEach((element) => {
searchProduct.verifyProduct(element.searchValue);
});
// return "pending";

});
/// <reference types="cypress" />

// import { Utility } from "../../support/utility"
// // const url = new Utility().getUrl();
// // const searchPage = new SearchPage;
export var searchtext;

// beforeEach(() => {
//     cy.viewport(1600, 720);
//     });

Given('I navigate to the am website', async function () {
  //homePage.enterURL();
  cy.visit("https://www.amazon.in/");
  cy.log("Navigated to website")
  // cy.parseXlsx('cypress/fixtures/data.xlsx').then(sheet => {
  //   cy.log('Excel data: ' + sheet[0].data[0][3])
  // })
})

Then('I land on Homepage', () => {
    searchPage.getTitle().should('contain', "Hello")

})

When('I search for {string}', function (text) {
  searchtext = text
  searchPage.getSearchBox().type(searchtext).type('{enter}')
})

Then('I validate search text', function () {
  homePage.getSearchText().should('be.visible')
  homePage.getSearchText().should('have.text', '"' + searchtext + '"')
})

Then("I click on first product link",function(){
  searchPage.getFisrtProduct().invoke('removeAttr','target').click()

})