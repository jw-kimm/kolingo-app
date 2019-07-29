import axios from 'axios'
import { GET_LESSONS, LESSONS_LOADING } from './types';

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

export const setLessonsLoading = () => {
  return {
    type: LESSONS_LOADING
  }
}
