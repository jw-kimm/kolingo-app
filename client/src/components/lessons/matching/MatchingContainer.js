import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash'

import { fetchMatching } from '../../../store/actions/matchingActions';
import Matching from './Matching'


class MatchingContainer extends Component {
  componentDidMount() {
    this.props.fetchMatching()
  }

  render() {
    if (_.isEmpty(this.props.matching)) return null
    const { matching } = this.props
    const { prompt, problem } = matching[0][0]

    return (
      <Matching
        matching={matching}
        problems={problem}
        prompt={prompt}
      />
    );
  }
}

MatchingContainer.propTypes = {
  fetchMatching: PropTypes.func.isRequired,
  matching: PropTypes.array.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = ({ matching, auth }) => {
  return {
    matching: matching,
    auth: auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMatching: () => dispatch(fetchMatching()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(MatchingContainer);

