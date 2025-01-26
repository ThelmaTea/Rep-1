Feature: Demoblaze ecommerce website login validation

 Application regression

@login
Scenario: Validating successful login
    Given I open Ecommerce page
    When I click the login button
    When I enter valid login details
    Then I verify successfull login