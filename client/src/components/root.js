import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom'
import history from './history'
import App from './App.js';
import store from '../store/store'
import { loadUser } from '../store/actions/authAction';

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


export default Root;