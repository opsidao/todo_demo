import { LOGGED_IN } from 'actions/user'

const defaultState = {
  userName: null
}

function user(state = defaultState, action) {
  if (!action) {
    return state
  }

  switch (action.type) {
    case LOGGED_IN:
      return {
        ...state,
        userName: action.userName,
      }
    default:
      return state
  }
}

export default user
