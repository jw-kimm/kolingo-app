import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css'

import Splash from './splash/Splash'
import LessonsList from './LessonsList'
import Alphabet1 from './Alphabet1';


const App = () => (
  <div className="all-content">
  <Switch>
     <Route exact path="/" component={Splash} />
     <Route exact path="/lessons" component={LessonsList} />
     <Route exact path="/alphabet1" component={Alphabet1} />
  </Switch>
  </div>
);

export default App;