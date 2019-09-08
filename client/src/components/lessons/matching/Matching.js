import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash'

import { fetchMatching } from '../../../store/actions/matchingActions';
import SelectCards from './SelectCards'
import Question from '../shared/Question'
import GoalPage from '../shared/GoalPage'
import ProgressBar from '../shared/ProgressBar';


import styled from 'styled-components'

const ProblemSection = styled.div`
  display: flex;
  height: 530px;
  font-size: 40px;
  flex-direction: column;
  align-items: center;
`
const SubHeader = styled.div`
  display: flex;
  padding: 13px;
  width: 100%;
  align-items: center;
  justify-content: center;
`

class Matching extends Component {
  state = {
    cardClicked: false,
  };

  selected = []

  componentDidMount() {
    this.props.fetchMatching();
  }

  onCardClick = ({ korean, english, clicked }) => {
    this.selected.push(clicked)
    if (!_.isEmpty(this.selected)) {
      const isKorean = korean === clicked
      let isCorrect
      if (isKorean) {
        isCorrect = this.selected[0] === english
      } else {
        isCorrect = this.selected[0] === korean
      }

      // if (isCorrect) {
      //   // blah blah blah 
      //   this.selected = []
      // }
    }

    this.setState({ cardClicked: true })
  }

  render() {
    if (_.isEmpty(this.props.matching)) return null

    const { problem } = this.props.matching[0][0]

    if (this.progress === 100) {
      return <GoalPage />
    }
    return (
      <ProblemSection>
        <SubHeader>
          <ProgressBar progress={this.progress} />
          <a href="/lessons" id="closebtn">+</a>
        </SubHeader>
        <SelectCards
          choices={problem}
          onCardClick={this.onCardClick}
          selected={this.selected}
        />
      </ProblemSection>
    );
  }
}

Matching.propTypes = {
  fetchMatching: PropTypes.func.isRequired,
  matching: PropTypes.array.isRequired
}

const mapStateToProps = ({ matching }) => {
  return {
    matching: matching,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMatching: () => dispatch(fetchMatching()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Matching);

