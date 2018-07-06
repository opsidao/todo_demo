/* global context cy describe*/

describe('Login', () => {
  context('when I visit the root page', () => {
    it('takes me to the login page', () => {
      cy.visit('/')

      cy.get('#loginButton')

      cy.location('pathname').then(pathname => expect(pathname).to.equal('/login'))
    })
  })

  context('when I visit the login page', () => {
    const userName = 'iAmTheUser'

    it('I can login', () => {
      cy.visit('/login')

      cy.get('#userName').type(userName)

      cy.get('#loginButton').click()

      cy.contains(`Hello ${userName}`)

      cy.location('pathname').then(pathname => expect(pathname).to.equal('/todos'))
    })
  })
})
