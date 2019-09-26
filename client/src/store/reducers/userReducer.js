import { UPDATE_USER, UPDATE_EXP } from '../actions/types'

/**
* INITIAL STATE
*/

const defaultUser = {}

/**
* REDUCER
*/

export default function (state = defaultUser, action) {
  Object.freeze(state)
  switch (action.type) {
    case UPDATE_USER:
      return action.user
    case UPDATE_EXP:
      return {
        ...state,
        userExp: action.userExp
      }
    default:
      return state
  }
}
