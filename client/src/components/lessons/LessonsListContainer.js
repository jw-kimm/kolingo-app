import React from 'react'
import { Route, Switch } from 'react-router-dom';

import BasicLevel from './basic';
import MatchingContainer from './intermediate/MatchingContainer';
import Advanced from './advanced/Advanced';
import LessonsList from './LessonsList'

const LessonsListContainer = ({ match }) => {

  return (
    <Switch>
      <Route exact path="/lessons/basic" component={BasicLevel} />
      <Route exact path="/lessons/intermediate" component={MatchingContainer} />
      <Route exact path="/lessons/advanced" component={Advanced} />
      <Route exact path={match.path} render={props => <LessonsList {...props} />} />
    </Switch>
  )
}

export default LessonsListContainer