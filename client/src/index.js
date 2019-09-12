import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';
import Root from './components/root';


// document.addEventListener('DOMContentLoaded', () => {
//   let store;
//   if (window.currentUser) {
//     const initialState = {
//       session: { id: window.currentUser.id },
//       entities: {
//         users: { [window.currentUser.id]: window.currentUser }
//       }
//     };
//     store = configureStore(initialState);
//     delete window.currentUser;
//   } else {
//     store = configureStore();
//   }

//   window.getState = store.getState;
//   window.dispatch = store.dispatch;

//   const root = document.getElementById('root');
//   ReactDOM.render(<Root store={store} />, root);
// });

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
