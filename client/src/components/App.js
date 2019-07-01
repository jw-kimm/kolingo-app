// import React, { Component } from 'react';
// import MainNavbar from './components/MainNavbar';
// import Home from './components/Home'
// import LessonsList from './components/LessonsList'
// import Users from './components/users'
// import { Provider } from 'react-redux';
// import store from './store/store';
// import {loadUser} from './store/actions/authAction'
// import 'bootstrap/dist/css/bootstrap.min.css';

// class App extends Component {
//   componentDidMount(){
//     store.dispatch(loadUser())
//   }
//   render() {
//     return (
//       <div>
//         <MainNavbar />
//         <Home />
//       </div>
//     )
//   }
// }

// export default App;

import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import Splash from './splash/Splashcontainer'
import LessonsList from './LessonsList'

const App = () => (
  <div className='all-content'>
     <Route path="/" component={Splash} />
     <Route path="/lessons" comonent={LessonsList} />
 </div>
);

export default App;