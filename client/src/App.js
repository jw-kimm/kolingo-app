import React, { Component } from 'react';
import MainNavbar from './components/MainNavbar';
import Users from './components/users'
import { Provider } from 'react-redux';
import store from './store/store';
import {loadUser} from './store/actions/authAction'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  componentDidMount(){
    store.dispatch(loadUser())
  }
  render() {
    return (
      <Provider store={store}> 
          <div>
            <MainNavbar />
            <Users />
          </div>
          </Provider>
    );
  }
}

export default App;