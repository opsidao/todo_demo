import {
  FETCH_ALL_TODOS,
  ALL_TODOS_FETCHED,
  TODO_TOGGLED,
  CREATE_TODO,
  NEW_TODO_TEXT_CHANGED,
  todoActions,
} from 'actions/todos'

describe('User actions', () => {
  describe('fetchAllTodos', () => {
    it('creates the correct action', () => {
      expect(todoActions.fetchAllTodos()).to.deep.equal({ type: FETCH_ALL_TODOS })
    })
  })

  describe('allTodosFetched', () => {
    const todos = []

    it('creates the correct action', () => {
      expect(todoActions.allTodosFetched(todos)).to.deep.equal({ type: ALL_TODOS_FETCHED, todos })
    })
  })

  describe('todoToggled', () => {
    it('creates the correct action', () => {
      const checked = true
      const todo = {}

      expect(todoActions.todoToggled(todo, checked)).to.deep.equal({ type: TODO_TOGGLED, todo, checked })
    })
  })

  describe('createTodo', () => {
    it('creates the correct action', () => {
      const text = 'this is the text'

      expect(todoActions.createTodo(text)).to.deep.equal({ type: CREATE_TODO, text })
    })
  })

  describe('newTodoTextChanged', () => {
    it('creates the correct action', () => {
      const text = 'this is the text'

      expect(todoActions.newTodoTextChanged(text)).to.deep.equal({ type: NEW_TODO_TEXT_CHANGED, text })
    })
  })
})
