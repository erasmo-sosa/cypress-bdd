Feature: GymForce Demo Login

Scenario: Verficar Codigo
Given User navigates to login page
    And User enters a valid username
    And User enters a valid password
When Users clicks on the login button
Then User sees the Verificar Codigo form
