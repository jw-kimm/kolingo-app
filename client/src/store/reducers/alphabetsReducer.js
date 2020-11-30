import { GET_ALPHABETS } from '../actions/types';

const alphabetsReducer = (state = [], action) => {
  Object.freeze(state)
  switch (action.type) {
    case GET_ALPHABETS:
      return action.alphabet
    default:
      return state
  }
}

export default alphabetsReducer;
