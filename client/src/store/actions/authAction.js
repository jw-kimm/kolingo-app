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
    REGISTER_FAIL
  } from './types';


  //check token & load user

export const loadUser = () => (dispatch, getState) => {
//User loading
    dispatch({type: USER_LOADING});

    axios.get('/auth/user', tokenConfig(getState))
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status))
            dispatch({
                type: AUTH_ERROR
            })
        })
};

//Register User

export const register= ({ firstName, lastName, email, userName, password}) => dispatch => {
    const config = {
        headers:{
            'Content-Type': 'application/json'
        }
    }
    //Request Body
    const body = JSON.stringify({ firstName, lastName, email, userName, password});

    axios.get('/users', body, config)
    .then(res => dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
    }))
    .catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
        dispatch({
            type: REGISTER_FAIL
        })
    })
};


//Login User
export const login = ({ userName, password}) => dispatch => {
    const config = {
        headers:{
            'Content-Type': 'application/json'
        }
    }
    //Request Body
    const body = JSON.stringify({ userName, password});

    axios.get('/auth', body, config)
    .then(res => dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
    }))
    .catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'));
        dispatch({
            type: LOGIN_FAIL
        })
    })
};


//Logout user
export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    };
};

//Setup config/headers and token

export const tokenConfig = getState => {
    //Get token from local storage
    const token = getState().auth.token;

    //Headers
    const config = {
        header: {
            "Content-type": "application/json"
        }
    }
    //If token, add to headers
    if(token) {
        config.headers['x-auth-token'] = token;
    }
    return config;
}

