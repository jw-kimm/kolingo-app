import axios from 'axios'
import { GET_USER, USER_LOADING } from './types';
import { returnErrors } from './errorAction';


export const getUser = () => dispatch => {
  // dispatch(loadingUser());
  axios.get('/users')
    .then(res => dispatch({
      type: GET_USER,
      payload: res.data
    }))
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status)))
}


export const loadingUser = () => {
  return {
    type: USER_LOADING
  }
}


