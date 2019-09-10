import axios from 'axios'
import { GET_USER, USER_LOADING } from './types';
import { returnErrors } from './errorAction';


// export const getUser = () => dispatch => {
//   // dispatch(loadingUser());
//   axios.get('/users')
//     .then(res => dispatch({
//       type: GET_USER,
//       payload: res.data
//     }))
//     .catch(err =>
//       dispatch(returnErrors(err.response.data, err.response.status)))
// }

const getUser = user => ({ type: GET_USER, user })

export const me = () => async dispatch => {
  try {
    const res = await axios.get('/profile')
    dispatch(getUser(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const loadingUser = () => {
  return {
    type: USER_LOADING
  }
}


