import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../index.css'
// import ProtectedRoute from './ProtectedRoute'

import Splash from './splash/Splash'
import LessonsList from './lessons/LessonsList'
import Alphabet from './lessons/alphabet/Alphabet';
import MatchingContainer from './lessons/matching/MatchingContainer';
import Advanced from './lessons/advanced/Advanced';

import Register from './auth/Register';
import UserPage from './auth/UserPage';
import Discuss from './discuss/Discuss'

import setAuthToken from '../utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Splash} />
      <Route exact path="/lessons" component={LessonsList} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/alphabet" component={Alphabet} />
      <Route exact path="/matching" component={MatchingContainer} />
      <Route exact path="/advanced" component={Advanced} />
      <Route exact path="/discuss" component={Discuss} />

      <Route exactpath="/profile" component={UserPage} />
    </Switch>
  </>
);

export default App;

