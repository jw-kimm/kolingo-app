import axios from 'axios'
import { GET_LESSONS, RECEIVE_ANSWER, LESSONS_LOADING } from './types';

// export const getLessons = () => dispatch => {
//     dispatch(setLessonsLoading());
//     axios.get('/lessons')
//     .then(res => dispatch({
//         type:GET_LESSONS,
//         payload: res.data
//     })
//     )
// }

const getLessons = lesson => ({
    type: GET_LESSONS, 
    lesson
})

export const fetchLessons = () => async dispatch => {
    try {
        const { data } = await axios.get('/lessons')
        console.log('INTHUNK', data)
      dispatch(getLessons(data));
    } catch (err) {
      console.error(err)
    }
  }

  
export const receiveAnswer = spec => ({
    type: RECEIVE_ANSWER,
})

export const setLessonsLoading = () => {
    return {
        type: LESSONS_LOADING
    }
}
  


/**
 * THUNK CREATORS
 */

// export const fetchALesson = () => async dispatch => {
//     const { data } = await axios.get(`/lessons`)
//     dispatch(getLesson(data))
//   }
  
// export const sendInput = input => async dispatch => {
//     try {
//         const {data} = await axios.post(`/api/docker`, input)
//         dispatch(receiveAnswer(data))
//     } catch (err) {
//         console.error(err)
//     }
// }