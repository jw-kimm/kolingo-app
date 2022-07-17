import { GET_DISCUSSION, GET_SINGLE_DISCUSSION, POST_DISCUSSION, GET_COMMENTS, POST_COMMENT } from '../actions/types'

const discussReducer = (state = [], action) => {
  switch (action.type) {
    case GET_DISCUSSION:
      return action.discuss
    case GET_SINGLE_DISCUSSION:
      return action.discuss
    case POST_DISCUSSION:
      return [...state, action.discuss]
    case GET_COMMENTS:
      return action.comment
    case POST_COMMENT:
      return [...state, action.comment]
    default:
      return state
  }
}

export default discussReducer;
