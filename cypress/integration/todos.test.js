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

      cy.visit('/todos')

      cy.contains('#pending label', todoText).click()
      cy.contains('#completed label', todoText).click()
      cy.contains('#pending label', todoText).click()
      cy.contains('#completed label', todoText).click()
    })
  })

  describe('persistence', () => {
    describe('on creation', () => {
      it('persists the created todo', () => {
        cy.visit('/todos')

        cy.contains(todoText).should('not.exist')

        cy.get('#newTodoText').type(`${todoText}`)
        cy.get('#createNewTodo').click()

        cy.visit('/todos')

        cy.contains('#pending label', todoText)
      })
    })

    describe('on toggle', () => {
      it('persists the updated state', () => {
        cy.createTodo(todoText)

        cy.visit('/todos')

        cy.contains('#pending label', todoText).click()

        cy.visit('/todos')

        cy.contains('#completed label', todoText).click()
      })
    })
  })

  describe('todos belong to a user', () => {
    const anotherUserName = 'anotherDude'
    const anotherUserTodoText = 'another user todo'

    it('stores the todos attached for each username separately', () => {
      cy.login(userName)
      cy.createTodo(todoText)
      cy.visit('/todos')
      cy.contains('#pending label', todoText)

      cy.login(anotherUserName)
      cy.createTodo(anotherUserTodoText)
      cy.visit('/todos')
      cy.contains('#pending label', anotherUserTodoText)

      cy.login(userName)
      cy.visit('/todos')
      cy.contains('#pending label', todoText)
      cy.contains('#pending label', anotherUserTodoText).should('not.exist')
    })
  })
})
