import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { fetchAdvanced } from '../../../store/actions/advancedAction';

import ProgressBar from '../shared/ProgressBar';
import Result from '../shared/Result'
import Question from '../shared/Question';
import SelectOptions from './SelectOptions';
import GoalPage from '../shared/GoalPage';

import styled from 'styled-components';

const ProblemSection = styled.div`
  display: flex;
  height: 530px;
  font-size: 40px;
  flex-direction: column;
  align-items: center;
`
const SubHeader = styled.div`
  display: flex;
  padding: 13px 0px 13px 0;
  width: 100%;
  align-items: center;
  justify-content: center;
`

const PromptBlock = styled.div`
  margin-top: 60px;
  display: inline-block;
  align-items: center;
  height: 300px;
`


class Advanced extends Component {
  state = {
    pageState: 'Progress',
    currentAnswer: null,
    currentQuestionIdx: 0,
  }

  progress = 0
  score = 0

  componentDidMount() {
    this.props.fetchAdvanced();
  }



  onCardClick = ({ choice, answer }) => {
    this.combination = { choice, answer }
    this.setState({
      currentAnswer: choice,
      pageState: "check"
    })
  }

  onCheckButtonClick = () => {
    const { choice, answer } = this.combination
    if (choice === answer) {
      this.setState({
        pageState: 'Correct',
      })
      this.progress += 25
      this.score += 25
    } else {
      this.setState({ pageState: 'Wrong' })
      this.progress += 25
    }
  }


  handleOnClick = () => {
    if (this.state.pageState === "check") {
      this.onCheckButtonClick()
    } else {
      this.continueButtonClick()
      this.setState({
        pageState: "Progress"
      })
    }
  }

  continueButtonClick = () => {
    this.setState({
      currentQuestionIdx: this.state.currentQuestionIdx + 1,
      currentAnswer: null,
    })
  }

  skipQuestion = () => {
    this.setState({ currentQuestionIdx: this.state.currentQuestionIdx + 1 })
  }

  submitScore = () => {
    const { user } = this.props.auth
    this.setState({ pageState: "Finished" })
    if (this.props.isAuthenticated) {
      const updatedScore = Number(user.userExp) + Number(this.score)
      this.props.updateUserExp({ userExp: Number(updatedScore) })
    }
  }

  render() {

    if (_.isEmpty(this.props.advanced)) return null

    const { advanced } = this.props
    const { pageState } = this.state

    const inProgress = this.state.currentQuestionIdx !== advanced.length

    let choices
    let answer
    let questionPrompt
    let header

    if (inProgress) {
      choices = advanced[this.state.currentQuestionIdx].choices
      answer = advanced[this.state.currentQuestionIdx].answer
      questionPrompt = advanced[this.state.currentQuestionIdx].prompt
      header = advanced[this.state.currentQuestionIdx].title
    }

    return (
      <div>
        {inProgress ?
          <>
            <ProblemSection>
              <SubHeader>
                <ProgressBar progress={this.progress} />
                <a href="/lessons" id="closebtn">+</a>
              </SubHeader>
              {header}
              <PromptBlock>
                <Question prompt={questionPrompt} />
                <SelectOptions
                  choices={choices}
                  answer={answer}
                  onClick={this.onCardClick}
                  selectedCard={this.state.currentAnswer}
                />
              </PromptBlock>
            </ProblemSection>
            <Result
              pageState={pageState}
              handleOnClick={this.handleOnClick}
              currentAnswer={this.state.currentAnswer}
              skipQuestion={this.skipQuestion}
            />
          </>
          :
          <div> <GoalPage progress={this.progress} submitScore={this.submitScore} /></div>
        }
      </div>
    )
  }
}


Advanced.propTypes = {
  fetchAdvanced: PropTypes.func.isRequired,
  advanced: PropTypes.array.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = ({ advanced, auth }) => {
  return {
    advanced: advanced,
    auth: auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAdvanced: () => dispatch(fetchAdvanced()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Advanced);