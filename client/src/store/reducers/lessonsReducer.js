import { GET_LESSONS } from '../actions/types';

const lessonsReducer = (state = [], action) => {
  Object.freeze(state)
  switch (action.type) {
    case GET_LESSONS:
      return action.lesson
    default:
      return state
  }
}

export default lessonsReducer;
