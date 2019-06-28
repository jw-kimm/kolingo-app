import { GET_LESSONS, RECEIVE_ANSWER, LESSONS_LOADING } from '../actions/types';

/**
 * INITIAL STATE
 */
const defaultLesson = {
    lesson: [],
    loading: false
  }
  

const lessonsReducer = (state = defaultLesson, action) => {
    switch (action.type) {
      case GET_LESSONS:
        return {...state, lessons: action.payload, loading:false}
      case RECEIVE_ANSWER:
        return {...state, spec: action.spec};
        case LESSONS_LOADING:
        return { ...state, loading: true}
      default:
        return state
    }
  }
  
  export default lessonsReducer;
  