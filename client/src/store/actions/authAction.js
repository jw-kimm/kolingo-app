import axios from 'axios';
import { returnErrors } from './errorAction';

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from './types';

// Check token & load user
export const loadUser = () => (dispatch, getState) => {
  // User loading
  dispatch({ type: USER_LOADING });

  axios.get('/users', tokenConfig(getState))
    .then(res =>
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
};

//Login User
export const login = ({ email, password }) => dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  //Request Body
  const body = JSON.stringify({ email, password });
  console.log(body, "body")
  axios
    .post('/login', body, config)
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

  axios.post('/register', body, config)
    .then(res => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })
      // login({ email, password })
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
    localStorage.clear();
    dispatch({
      type: LOGOUT_SUCCESS
    });
  };
};


//Setup config/headers and token
export const tokenConfig = getState => {
  //Get token from local storage
  const token = getState().auth.token;

  //Headers
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  }
  //If token, add to headers
  if (token) {
    config.headers['x-auth-token'] = token;
  }
  return config;
}

