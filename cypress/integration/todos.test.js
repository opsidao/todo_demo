/* global cy */

describe('Todos', () => {
  const userName = Math.random().toString(36).substring(7)
  const todoText = 'This is the first TODO'

  beforeEach(() => {
    cy.login(userName)
  })

  afterEach(() => {
    cy.destroyAllTodos()
  })

  describe('creation', () => {
    it('allows to create a TODO using the button', () => {
      cy.visit('/todos')

      cy.get('#newTodoText').type(`${todoText}`)
      cy.get('#createNewTodo').click()

      cy.get('#pending').contains(todoText)
    })

    it('allows to create a TODO typing enter', () => {
      cy.visit('/todos')

      cy.get('#newTodoText').type(`${todoText}`)
      cy.get('#newTodoText').type('{enter}')

      cy.get('#pending').contains(todoText)
    })
  })

  describe('toggle completion', () => {
    it('allows to mark a pending TODO as completed and then as pending again', () => {
      cy.createTodo(todoText)

      cy.contains('#pending', todoText).click()
      cy.contains('#completed', todoText).click()
      cy.contains('#pending', todoText).click()
      cy.contains('#completed', todoText).click()
    })
  })
})
