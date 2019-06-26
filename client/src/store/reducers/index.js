import { combineReducers } from 'redux';
// import errorReducer from './errorReducer';
import userReducer from './userReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

export default combineReducers({
    // errors: errorReducer
    user: userReducer,
    error: errorReducer,
    auth: authReducer
});