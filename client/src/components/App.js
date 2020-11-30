import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../index.css'

import Splash from './splash/Splash'
import LessonsList from './lessons/LessonsList'
import BasicLevel from './lessons/basic/BasicLevel';
import MatchingContainer from './lessons/intermediate/MatchingContainer';
import Advanced from './lessons/advanced/Advanced';

import Register from './auth/Register';
import UserPage from './auth/UserPage';
import Discuss from './discuss/Discuss'

import setAuthToken from '../utils/setAuthToken';
import Alphabets from './lessons/alphabets/Alphabets';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Splash} />
      <Route exact path="/lessons" component={LessonsList} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/alphabets" component={Alphabets} />
      <Route exact path="/basic" component={BasicLevel} />
      <Route exact path="/intermediate" component={MatchingContainer} />
      <Route exact path="/advanced" component={Advanced} />
      <Route exact path="/discuss" component={Discuss} />
      <Route exact path="/profile" component={UserPage} />
    </Switch>
  </>
);

export default App;

