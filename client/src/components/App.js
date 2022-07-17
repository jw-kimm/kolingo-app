import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../index.css'

import Splash from './splash/Splash'
import Register from './auth/Register';

import UserPage from './auth/UserPage';
import LessonsList from './lessons/LessonsListContainer'
import Alphabets from './lessons/alphabets/Alphabets';
import Discuss from './discuss/Discuss'
import SingleDiscuss from './discuss/SingleDiscuss'

import setAuthToken from '../utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Splash} />
      <Route exact path="/register" component={Register} />
      <Route path="/lessons" component={LessonsList} />
      <Route exact path="/alphabets" component={Alphabets} />
      <Route exact path="/discuss" component={Discuss} />
      <Route exact path="/profile" component={UserPage} />
      <Route exact path="/discuss/:id" component={SingleDiscuss} />
    </Switch>
  </>
);

export default App;

