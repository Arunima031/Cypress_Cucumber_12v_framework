/// <reference types="cypress" />
import dashboardPage from "../../support/page-object/dashboardPage";
import {When,Then } from "@badeball/cypress-cucumber-preprocessor";
const dashboardPageObj=new dashboardPage();

Then ("@dashboard I land in site dashboard",()=>{
    cy.fixture('ValidationStatement').then(data=>{
        dashboardPageObj.getDashboardTitle().should('have.text',data.HomepageHeaderText)
    })
})

Then("@dashboard I logout from application",()=>{
    dashboardPageObj.getUserDropdown().click()
    dashboardPageObj.getLogoutOption().click()
})