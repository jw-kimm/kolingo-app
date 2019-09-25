import axios from 'axios'
import { UPDATE_USER, UPDATE_EXP } from './types';
import { returnErrors } from './errorAction';

// const updateUser = user => ({ type: UPDATE_USER, user })
const updateUserPoints = userExp => ({ type: UPDATE_EXP, userExp })


export const updateUserInfo = ({ email, username }) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    //Request Body
    const body = JSON.stringify({ email, username });

    const res = await axios.post('/api/auth/user', body, config);

    dispatch({
      type: UPDATE_USER,
      payload: res.data
    })
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status))
    console.log('badRequest')
  }
}

//update user exp
export const updateUserExp = (userExp) => async dispatch => {
  try {
    const { data } = await axios.post('/api/auth/user', userExp)
    dispatch(updateUserPoints(data))
  } catch (err) {
    console.log(err)
  }
}