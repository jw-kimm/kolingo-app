import axios from 'axios'
import { GET_ALPHABETS } from './types';

const getAlphabets = alphabet => ({
  type: GET_ALPHABETS,
  alphabet
})


export const fetchAlphabets = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/alphabets')
    dispatch(getAlphabets(data));
  } catch (err) {
    console.log(err)
  }
}

