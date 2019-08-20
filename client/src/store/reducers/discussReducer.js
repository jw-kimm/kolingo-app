import { GET_DISCUSSION, POST_DISCUSSION, SINGLE_DISCUSS } from '../actions/types'

const discussReducer = (state = [], action) => {
  Object.freeze(state)
  switch (action.type) {
    case GET_DISCUSSION:
      return action.discuss
    case SINGLE_DISCUSS:
      return action.discuss;
    case POST_DISCUSSION:
      return [...state, action.discuss]
    default:
      return state
  }
}

export default discussReducer;
