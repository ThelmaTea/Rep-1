Feature: Demoblaze ecommerce website contact modal validation

Application regression​

Scenario: Verify that the cantact page is accessible when not logged in 
Given I navigate to demoblaze website
When I click the contact button
When I enter valid login details
