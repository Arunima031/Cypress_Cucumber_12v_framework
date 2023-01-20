/// <reference types="cypress" />
import loginPage from "../../support/page-object/loginPage";
import {When,Then } from "@badeball/cypress-cucumber-preprocessor";

const loginPageObj= new loginPage();

When("@login I add username {string} and password {string}",(username,password)=>{
    loginPageObj.getUsernameTextBox().type(username)
    loginPageObj.getPasswordTextBox().type(password)
})
When("@login I click on login button",()=>{
    loginPageObj.getLoginButton().click()
})

When ("@login I add username and password from json {string}",(json)=>{
cy.fixture(json).then(data=>{
    loginPageObj.getUsernameTextBox().type(data.username)
    loginPageObj.getPasswordTextBox().type(data.password)
})
})

Then("@login I validate error from json {string}",(json)=>{
    cy.fixture(json).then(data=>{
    loginPageObj.getErrorText().should('have.text',data.invalidLogin)
})
})