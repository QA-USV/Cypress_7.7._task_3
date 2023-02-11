// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { username } from '../fixtures/variables.json'

Cypress.Commands.add('createUser', () => {
    cy.request({
        url: '/',
        method: 'POST',
        body: 
        {
            username,
            firstName,
            email,
            password
        }
    })
})

Cypress.Commands.add('updateUser', (newUserName) => {
    cy.request({
        url: `/${username}`,
        method: 'PUT',
        body: 
        {
            username: newUserName
        }
    })
})

Cypress.Commands.add('deleteUser', (username) => {
    cy.request({
        url: `/${username}`,
        method: 'DELETE',
        body: 
        {
            username
        }
    })
})