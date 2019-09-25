import axios from 'axios';
import { returnErrors } from './errorAction';

import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from './types';
import setAuthToken from '../../utils/setAuthToken';

// Check token & load user
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/auth/user');
    dispatch({
      type: USER_LOADED,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

//Login User
export const login = ({ email, password }) => dispatch => {
  const config = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    }
  }
  //Request Body
  const body = JSON.stringify({ email, password });
  console.log(body, "body")
  axios
    .post('/api/auth', body, config)
    .then(res =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      })
    )
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
      );
      dispatch({
        type: LOGIN_FAIL
      });
    });
};


//Register User
export const register = ({ username, email, password }) => dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  //Request Body
  const body = JSON.stringify({ email, username, password });

  axios.post('/api/register', body, config)
    .then(res => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })
    }
    )
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL')
      );
      dispatch({
        type: REGISTER_FAIL
      });
    });
};

//Logout user
export const logout = () => {
  return dispatch => {
    dispatch({
      type: LOGOUT_SUCCESS
    });
  };
};


// //Setup config/headers and token
// export const tokenConfig = getState => {
//   //Get token from local storage
//   const token = getState().auth.token;

//   //Headers
//   const config = {
//     headers: {
//       "Content-type": "application/json"
//     }
//   }
//   //If token, add to headers
//   if (token) {
//     config.headers['x-auth-token'] = token;
//   }
//   return config;
// }

