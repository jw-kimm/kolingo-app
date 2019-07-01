// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import {Provider} from 'react-redux'
// import {HashRouter} from 'react-router-dom'
// import store from './store/store'


// ReactDOM.render(
//   <Provider store={store}>
//     <HashRouter>
//       <App />
//     </HashRouter>
//   </Provider>, 
// document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import 'bootstrap/dist/css/bootstrap.min.css';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
   const preloadedState = {
     session: { id: window.currentUser.id },
     entities: {
       users: { [window.currentUser.id]: window.currentUser }
     }
   };
   store = configureStore(preloadedState);
   delete window.currentUser;
  } else {
   store = configureStore();
  }

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});