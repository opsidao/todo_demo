import { FETCH_ALL_TODOS, ALL_TODOS_FETCHED, TODO_TOGGLED } from 'actions/todos'

export const defaultState = {
  todos: {
    all: [],
    completed: [],
    pending: [],
  },
}

function todos(state = defaultState, action) {
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
        todos: { all: action.todos, completed, pending },
      }
    }
    case TODO_TOGGLED: {
      const completed = []
      const pending = []

      state.todos.all.forEach(storedTodo => {
        const todo = storedTodo

        if (todo.id === action.todo.id) {
          todo.completed = action.checked
        }

        if (todo.completed) {
          completed.push(todo)
        } else {
          pending.push(todo)
        }
      })

      return {
        ...state,
        todos: {
          all: state.todos.all,
          completed,
          pending,
        },
      }
    }

    default:
      return state
  }
}

export default todos
