import { GET_DISCUSSION, POST_DISCUSSION } from '../actions/types'

const discussReducer = (state = [], action) => {
  Object.freeze(state)
  switch (action.type) {
    case GET_DISCUSSION:
      return action.discuss
    case POST_DISCUSSION:
      return [...state, action.discuss]
    default:
      return state
  }
}

export default discussReducer;
