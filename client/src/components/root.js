import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom'
import history from './history'
import App from './App.js';
import store from '../store/store'

const Root = ({ store }) => (
  <Provider store = { store }>
    <Router history = {history}>
      <App/>
    </Router>
  </Provider>
);

export default Root;