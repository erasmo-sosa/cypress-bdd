import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'

Given('User navigates to login page', () => {
  cy.visit('https://demo.gymforce.mx/')  
})

And('User enters a valid username', () => {
  cy.get('#nombreu').type('Erasmo')
  //cy.get('#nombreu').contains('Erasmo')
})

And('User enters a valid password', () => {
  cy.get('#pass').type('Erasmo2022')
  //cy.get('#pass').contains('Erasmo2022')
  cy.wait(500)
})

When('Users clicks on the login button', () => {
  cy.get('#btn_enviar').click()
})
Then('User sees the Verificar Codigo form',() => {
  //cy.get('#btn_verificar').should('be.visible')
  cy.get('#code').should('be.visible')
})