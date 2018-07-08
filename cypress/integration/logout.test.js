/* global context cy describe*/

describe('Logout', () => {
  context("when I'm not logged in", () => {
    it('the logout button is not visible', () => {
      cy.visit('/')

      cy.contains('Logout').should('not.exist')
    })
  })

  context("when I'm logged in", () => {
    const userName = 'theUserName'

    it('the logout button is visible and I can click it to logout', () => {
      cy.login(userName)

      cy.visit('/todos')

      cy.contains('Logout').click()

      cy.contains('Logout').should('not.exist')
      cy.location('pathname').then(pathname => expect(pathname).to.eq('/login'))
    })
  })
})
