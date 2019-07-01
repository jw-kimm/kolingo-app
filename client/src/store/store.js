// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// import logger from 'redux-logger';
// import rootReducer from './reducers';

// const initialState = {};
// const middleware = [thunk, logger];

// const store = createStore(
//         rootReducer, 
//         initialState, 
//         compose(applyMiddleware(...middleware), 
//         window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()));

// export default store;

import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, logger)
  )
);


export default configureStore;