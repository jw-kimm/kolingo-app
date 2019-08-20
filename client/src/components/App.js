import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css'

import Splash from './splash/Splash'
import LessonsList from './lessons/LessonsList'
import Alphabet from './lessons/Alphabet';
import Matching from './lessons/Matching';
import Register from './auth/Register';
import UserPage from './auth/UserPage';
import Discuss from './discuss/Discuss'
import SingleDiscuss from './discuss/SingleDiscuss';


const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Splash} />
      <Route exact path="/lessons" component={LessonsList} />
      <Route exact path="/alphabet" component={Alphabet} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/matching" component={Matching} />
      <Route exact path="/profile" component={UserPage} />
      <Route exact path="/discuss" component={Discuss} />
      <Route exact path="/discuss/:id" component={SingleDiscuss} />
    </Switch>
  </>
);

export default App;