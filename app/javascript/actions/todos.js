export const FETCH_ALL_TODOS = 'FETCH_ALL_TODOS'
export const ALL_TODOS_FETCHED = 'ALL_TODOS_FETCHED'
export const TODO_TOGGLED = 'TODO_TOGGLED'

export const todoActions = {
  fetchAllTodos: () => ({ type: FETCH_ALL_TODOS }),
  allTodosFetched: todos => ({ type: ALL_TODOS_FETCHED, todos }),
  todoToggled: (todo, checked) => ({ type: TODO_TOGGLED, todo, checked }),
}

