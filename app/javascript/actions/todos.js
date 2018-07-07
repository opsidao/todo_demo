export const FETCH_ALL_TODOS = 'FETCH_ALL_TODOS'
export const ALL_TODOS_FETCHED = 'ALL_TODOS_FETCHED'
export const TODO_TOGGLED = 'TODO_TOGGLED'
export const CREATE_TODO = 'CREATE_TODO'
export const NEW_TODO_TEXT_CHANGED = 'NEW_TODO_TEXT_CHANGED'
export const TODO_CREATED = 'TODO_CREATED'

export const todoActions = {
  fetchAllTodos: () => ({ type: FETCH_ALL_TODOS }),
  allTodosFetched: todos => ({ type: ALL_TODOS_FETCHED, todos }),
  todoToggled: (todo, checked) => ({ type: TODO_TOGGLED, todo, checked }),
  createTodo: text => ({ type: CREATE_TODO, text }),
  newTodoTextChanged: text => ({ type: NEW_TODO_TEXT_CHANGED, text }),
  todoCreated: () => ({ type: TODO_CREATED }),
}

