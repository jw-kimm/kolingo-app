import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom'
import history from './history'
import App from './App.js';
import store from '../store/store'
import { loadUser } from '../store/actions/authAction';
// import setAuthorizationToken from './utils/setAuthorizationToken';
// import jwtDecode from 'jwt-decode';
// import { setCurrentUser } from '../store/actions/authAction';
// import decode from 'jwt-decode';

// if (localStorage.jwtToken) {
//   // setAuthorizationToken(localStorage.jwtToken);
//   store.dispatch(setCurrentUser(localStorage.jwtToken));
// }

class Root extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
  }
}

// export default root;
// const Root = ({ store }) => (
//   <Provider store={store}>
//     <Router history={history}>
//       <App />
//     </Router>
//   </Provider>
// );

export default Root;