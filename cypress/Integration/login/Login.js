/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
Given ('I open Ecommerce page', function(){
    cy.visit(Cypress.environment("baseURL"));
    cy.viewport(1800,1000)
})
When ('I click the login button', function(){
    cy.get('#login2').click()
    cy.wait(2000)
})
When ('I enter valid login details', function(){
     cy.get('#loginusername').type("ThelmaTea")
     cy.get('#loginpassword').type("Bless@123")
     cy.get("button[onclick='logIn()']").click()
})
Then ('I verify successfull login', function(){
    cy.wait(3000)
    cy.get('#nameofuser').should('contain.text', 'Welcome '+"ThelmaTea")
})