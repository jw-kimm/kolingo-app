import { GET_ADVANCED } from '../actions/types';

const advancedReducer = (state = [], action) => {
  Object.freeze(state)
  switch (action.type) {
    case GET_ADVANCED:
      return action.advanced
    default:
      return state
  }
}

export default advancedReducer;
