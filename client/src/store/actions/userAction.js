import axios from 'axios'
import {GET_USER, USER_LOADING} from './types';
import { returnErrors } from './errorAction';


export const getUser = () => dispatch => {
    dispatch(loadingUser());
    axios.get('/users')
    .then(res => dispatch({
        type: GET_USER,
        payload: res.data
    }))
    .catch(err => 
        dispatch(returnErrors(err.response.data, err.response.status)))
}

// export const addUser = user => dispatch => {
//     axios.post('/users', user)
//     .then(res =>
//         dispatch({
//             type: ADD_USER,
//             payload: res.data
//         }))
// }

// export const removeUser = () => {
//     return {
//         type: REMOVE_USER
//     }
// }

export const loadingUser = () => {
    return {
        type: USER_LOADING
    }
}


