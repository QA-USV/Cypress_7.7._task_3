const { describe } = require("mocha");
import { username, firstName, email , password, newUserName } from '../fixtures/variables.json'

describe('tests ipi', () => {
  it('should create a new user', () => {
    cy.createUser(username, firstName, email, password)
      .then(response => {
        expect(response.status).equal(200)
      
    })
  })

  it('should update a user name', () => {
    cy.createUser(username, firstName, email, password)
    cy.updateUser(newUserName)
      .then(response => {
        expect(response.status).equals(200)
    }) 
  })

  it('should delete a user', () => {
    cy.createUser(username, firstName, email, password)
    cy.deleteUser(username)
      .then(response => {
        expect(response.status).equals(200)
    }) 
  })
})