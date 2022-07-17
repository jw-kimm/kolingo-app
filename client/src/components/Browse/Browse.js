import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';

import LessonsList from '../lessons/LessonsListContainer'
import Alphabets from '../lessons/alphabets/Alphabets';
// import Discuss from './discuss/Discuss'
// import UserPage from './auth/UserPage';

const Browse = ({ match }) => {
  //header, react routes
  return (
    <div>
      hello
    <Switch>
        <Route exact path={match.path} render={() => <Redirect to="/browse/lessons" />} />
        <Route path="/browse/lessons" component={LessonsList} />
        <Route exact path="/alphabets" component={Alphabets} />
        {/* <Route exact path="/discuss" component={Discuss} /> */}
        {/* <Route exact path="/profile" component={UserPage} /> */}
      </Switch>
    </div>
  )
}

export default Browse