import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash'

import { fetchMatching } from '../../../store/actions/matchingActions';
import SelectCards from './SelectCards'
import Question from '../shared/Question'
import GoalPage from '../shared/GoalPage'
import ProgressBar from '../shared/ProgressBar';
import Result from '../shared/Result'


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
    pageState: 'Progress',
    currentQuestionIdx: 0,
  };

  selected = []
  correct = []
  progress = 0

  componentDidMount() {
    this.props.fetchMatching();
  }

  onCardClick = ({ korean, english, clicked }) => {
    if (this.selected.length === 0) {
      this.selected.push(clicked) //pushing the clicked into the selected
      this.setState({ cardClicked: true })
    } else if (!_.isEmpty(this.selected)) { //if the selected is not empty
      const isKorean = korean === clicked

      let isCorrect
      if (isKorean) {
        isCorrect = this.selected[0] === english
      } else {
        isCorrect = this.selected[0] === korean
      }
      if (isCorrect) {
        // blah blah blah 
        this.correct.push(this.selected)
        this.selected = []
        this.setState({
          pageState: 'Check',
          cardClicked: true,
        })
      } else {
        this.selected = []
        setTimeout(() => {
          this.setState({
            pageState: 'Check',
            cardClicked: false,
          })
        }, 500);
      }
    }
  }

  render() {
    // debugger
    if (_.isEmpty(this.props.matching)) return null

    const { matching } = this.props
    const inProgress = this.state.currentQuestionIdx !== matching.length
    const { problem, prompt } = this.props.matching[0][0]

    return (
      <div>
        {inProgress ?
          <>
            <ProblemSection>
              <SubHeader>
                <ProgressBar progress={this.progress} />
                <a href="/lessons" id="closebtn">+</a>
              </SubHeader>
              <Question prompt={prompt} />
              <SelectCards
                choices={problem}
                onCardClick={this.onCardClick}
                selected={this.selected}
              // inactiveCards={[]}
              // style={{this.state.cardClicked}}
              />
            </ProblemSection>
            <Result
              pageState={this.state.pageState}
              handleOnClick={this.handleOnClick}
              currentAnswer={this.state.currentAnswer}
              skipQuestion={this.skipQuestion}
            />
          </>
          :
          <div> <GoalPage /></div>
        }
      </div>
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

