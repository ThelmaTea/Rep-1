/// <reference types="cypress" />​

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given ('I navigate to demoblaze website', function() {
    cy.visit(Cypress.environment("baseURL"));
    cy.viewport(1800,1000)
})
When ('I click the contact button', function() {
    cy.get('[data-target="#exampleModal"]').click()
})

Then ('I should see a New Message tag', function() {

})