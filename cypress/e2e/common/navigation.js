/// <reference types="cypress" />
import { Given } from "@badeball/cypress-cucumber-preprocessor";
import { Utility } from "../../support/utility";

const url=new Utility().getUrl();
Given('@navigation I open the website', function () {
   
    cy.visit(url)
})