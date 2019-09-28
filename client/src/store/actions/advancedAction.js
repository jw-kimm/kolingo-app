import axios from 'axios'
import { GET_ADVANCED } from './types';

const getAdvanced = advanced => ({
  type: GET_ADVANCED,
  advanced
});


export const fetchAdvanced = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/advanced')
    dispatch(getAdvanced(data));
  } catch (err) {
    console.log(err)
  }
};

