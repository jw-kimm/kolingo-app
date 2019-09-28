import axios from 'axios'
import { GET_LESSONS } from './types';

const getLessons = lesson => ({
  type: GET_LESSONS,
  lesson
})


export const fetchLessons = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/lessons')
    dispatch(getLessons(data));
  } catch (err) {
    console.log(err)
  }
}

