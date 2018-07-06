import { USER_INFO_UPDATED } from 'actions/user'

const defaultState = {
  userName: null,
}

function user(state = defaultState, action) {
  if (!action) {
    return state
  }

  switch (action.type) {
    case USER_INFO_UPDATED:
      return {
        ...state,
        userName: action.userName,
      }
    default:
      return state
  }
}

export default user
