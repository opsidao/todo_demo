import { FETCH_ALL_TODOS, ALL_TODOS_FETCHED } from 'actions/todos'

const defaultState = {
  todos: {
    completed: [],
    pending: [],
  },
}

function user(state = defaultState, action) {
  if (!action) {
    return state
  }

  switch (action.type) {
    case ALL_TODOS_FETCHED: {
      const completed = []
      const pending = []

      action.todos.forEach(todo => {
        if (todo.completed) {
          completed.push(todo)
        } else {
          pending.push(todo)
        }
      })

      return {
        ...state,
        todos: { completed, pending },
      }
    }
    default:
      return state
  }
}

export default user
