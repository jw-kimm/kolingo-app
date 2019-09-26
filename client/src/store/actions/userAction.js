import axios from 'axios'
import { UPDATE_EXP } from './types';

const updateUserPoints = userExp => ({ type: UPDATE_EXP, userExp })

//update user exp
export const updateUserExp = (userExp) => async dispatch => {
  try {
    const { data } = await axios.post('/api/auth/user', userExp)
    dispatch(updateUserPoints(data))
  } catch (err) {
    console.log(err)
  }
}