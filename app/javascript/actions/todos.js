export const FETCH_ALL_TODOS = 'FETCH_ALL_TODOS'
export const ALL_TODOS_FETCHED = 'ALL_TODOS_FETCHED'

export const todoActions = {
  fetchAllTodos: () => ({ type: FETCH_ALL_TODOS }),
  allTodosFetched: todos => ({ type: ALL_TODOS_FETCHED, todos }),
}

