import axios from 'axios'
import { GET_MATCHING } from './types';

const getMaching = matching => ({
  type: GET_MATCHING,
  matching
})


export const fetchMatching = () => async dispatch => {
  try {
    const { data } = await axios.get('/matching')
    console.log('INTHUNK', data)
    dispatch(getMaching(data));
  } catch (err) {
    console.error(err)
  }
}

