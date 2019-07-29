import { combineReducers } from 'redux';
import userReducer from './userReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import lessonsReducer from './lessonsReducer';
import matchingReducer from './matchingReducer';

export default combineReducers({
    user: userReducer,
    error: errorReducer,
    auth: authReducer,
    lesson: lessonsReducer,
    matching: matchingReducer,
});