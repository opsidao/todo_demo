/* global context */

import { todoActions } from 'actions/todos'
import reducer from 'reducers/todos'

describe('Todos reducer', () => {
  const defaultState = {
    todos: {
      all: [],
      completed: [],
      pending: [],
    },
    newTodoText: '',
  }

  let action
  let initiallyCompletedTodo
  let initiallyNotCompletedTodo
  let todos

  beforeEach(() => {
    initiallyCompletedTodo = { id: 1, title: 'Completed todo', completed: true }
    initiallyNotCompletedTodo = { id: 2, title: 'Pending todo', completed: false }

    todos = [initiallyCompletedTodo, initiallyNotCompletedTodo]
  })

  it('has a default state', () => {
    expect(reducer()).toEqual(defaultState)
  })

  context('when the action is ALL_TODOS_FETCHED', () => {
    let expectedState

    beforeEach(() => {
      action = todoActions.allTodosFetched(todos)

      expectedState = {
        ...defaultState,
        todos: {
          all: todos,
          completed: [initiallyCompletedTodo],
          pending: [initiallyNotCompletedTodo],
        },
      }
    })

    it('separates the todos in completed and pending', () => {
      expect(reducer(defaultState, action)).toEqual(expectedState)
    })
  })

  context('when the action is TODO_TOGGLED', () => {
    let expectedState
    let initialState

    beforeEach(() => {
      initialState = {
        todos: {
          all: todos,
          completed: [initiallyCompletedTodo],
          pending: [initiallyNotCompletedTodo],
        },
      }
    })

    context('when marking a todo as not completed', () => {
      beforeEach(() => {
        action = todoActions.todoToggled(initiallyCompletedTodo, false)

        expectedState = {
          todos: {
            all: todos,
            completed: [],
            pending: todos,
          },
        }
      })

      it('updates the todo and moves it to the right state', () => {
        expect(reducer(initialState, action)).toEqual(expectedState)
      })
    })

    context('when marking a todo as completed', () => {
      beforeEach(() => {
        action = todoActions.todoToggled(initiallyNotCompletedTodo, true)

        expectedState = {
          todos: {
            all: todos,
            completed: todos,
            pending: [],
          },
        }
      })

      it('updates the todo and moves it to the right state', () => {
        expect(reducer(initialState, action).todos.pending).toEqual(expectedState.todos.pending)
      })
    })
  })

  context('when the action is NEW_TODO_TEXT_CHANGED', () => {
    const text = 'really important'

    let expectedState

    beforeEach(() => {
      action = todoActions.newTodoTextChanged(text)

      expectedState = {
        ...defaultState,
        newTodoText: text,
      }
    })

    it('stores the updated text', () => {
      expect(reducer(defaultState, action)).toEqual(expectedState)
    })
  })

  context('when the action is TODO_CREATED', () => {
    let expectedState

    beforeEach(() => {
      action = todoActions.todoCreated()

      expectedState = {
        ...defaultState,
        newTodoText: '',
      }
    })

    it('erases the stored newTodoText', () => {
      expect(reducer(defaultState, action)).toEqual(expectedState)
    })
  })
})
