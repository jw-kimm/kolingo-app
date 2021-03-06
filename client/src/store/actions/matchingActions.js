import axios from 'axios'
import { GET_MATCHING } from './types';

const getMaching = matching => ({
  type: GET_MATCHING,
  matching
})


export const fetchMatching = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/matching')
    dispatch(getMaching(data));
  } catch (err) {
    console.log(err)
  }
}

