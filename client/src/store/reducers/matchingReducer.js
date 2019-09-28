import { GET_MATCHING } from '../actions/types';

const matchingReducer = (state = [], action) => {
  Object.freeze(state)
  switch (action.type) {
    case GET_MATCHING:
      return action.matching
    default:
      return state
  }
}

export default matchingReducer;
