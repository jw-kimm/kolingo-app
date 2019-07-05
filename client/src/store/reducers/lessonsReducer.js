import { GET_LESSONS, RECEIVE_ANSWER, LESSONS_LOADING } from '../actions/types';

const lessonsReducer = (state = [], action) => {
    Object.freeze(state)
    switch (action.type) {
      case GET_LESSONS:
        return action.lesson
      case RECEIVE_ANSWER:
        return {...state, spec: action.spec};
        // case LESSONS_LOADING:
        // return { ...state, loading: true}
      default:
        return state
    }
  }
  
  export default lessonsReducer;
  