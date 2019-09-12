// import { createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';
// import rootReducer from './store/reducers';

// const configureStore = (preloadedState = {}) => (
//   createStore(
//     rootReducer,
//     preloadedState,
//     applyMiddleware(thunk, logger)
//   )
// );


// export default configureStore;

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleWare = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleWare))
);

export default store;
