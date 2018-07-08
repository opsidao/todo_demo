/* global context */

import axios from 'axios'

import { call, put, select } from 'redux-saga/effects'

import { todoActions } from 'actions/todos'
import { createTodoSaga, fetchAllTodosSaga, locationChangeSaga, todoToggledSaga } from 'sagas/todos'

describe('Todos sagas', () => {
  let saga

  describe('createTodo', () => {
    const text = 'this is important'

    beforeEach(() => {
      saga = createTodoSaga(todoActions.createTodo())
    })

    describe('select on the store', () => {
      it('takes the new text from the store', () => {
        const store = { todos: { newTodoText: text } }
        const storeSelect = saga.next()

        expect(storeSelect.value.SELECT.selector(store)).to.equal(text)
      })
    })

    context('when the request works', () => {
      it('makes a request to the backend', () => {
        saga.next() // Tested on its own

        expect(saga.next(text).value).to.deep.equal(
          call(axios.post, '/api/todos', { text })
        )
        expect(saga.next().value).to.deep.equal(
          put(todoActions.todoCreated())
        )
        expect(saga.next().value).to.deep.equal(
          put(todoActions.fetchAllTodos())
        )
      })
    })
  })

  describe('fetchAllTodosSaga', () => {
    const todos = { todos: [{ id: 1, text: 'a todo', completed: false }] }

    let response

    beforeEach(() => {
      saga = fetchAllTodosSaga()
      response = { data: { todos } }
    })

    context('when the request works', () => {
      it('makes a request to the backend', () => {
        expect(saga.next().value).to.deep.equal(
          call(axios.get, '/api/todos')
        )
        expect(saga.next(response).value).to.deep.equal(
          put(todoActions.allTodosFetched(todos))
        )
        expect(saga.next().done).to.eq(true)
      })
    })
  })

  describe('locationChangeSaga', () => {
    const payload = pathname => ({ payload: { location: { pathname } } })
    const action = pathname => ({ type: '@@router/LOCATION_CHANGE', ...payload(pathname) })

    context('when the location is /todos', () => {
      beforeEach(() => {
        saga = locationChangeSaga(action('/todos'))
      })

      it('dispatches a todos.fetchAllTodos() action', () => {
        expect(saga.next().value).to.deep.equal(
          put(todoActions.fetchAllTodos())
        )
      })
    })

    context('when the location is /', () => {
      beforeEach(() => {
        saga = locationChangeSaga(action('/'))
      })

      it('does nothing', () => {
        const result = saga.next()

        expect(result.done).to.eq(true)
        expect(result.value).to.eq(undefined)
      })
    })

    context('when the location is /login', () => {
      beforeEach(() => {
        saga = locationChangeSaga(action('/login'))
      })

      it('does nothing', () => {
        const result = saga.next()

        expect(result.done).to.eq(true)
        expect(result.value).to.eq(undefined)
      })
    })
  })

  describe('todoToggledSaga', () => {
    const checked = true
    const todo = { id: 1, text: 'some text', completed: false }
    const url = `/api/todos/${todo.id}`

    beforeEach(() => {
      saga = todoToggledSaga(todoActions.todoToggled(todo, checked))
    })

    context('when the request works', () => {
      it('makes a request to the backend', () => {
        expect(saga.next().value).to.deep.equal(
          call(axios.put, url, { completed: checked })
        )
        expect(saga.next().done).to.eq(true)
      })
    })
  })
})
