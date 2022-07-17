import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash'

import { fetchLessons } from '../../../store/actions/lessonActions';
import { updateUserExp } from '../../../store/actions/userAction'

import SelectCards from './SelectCards'
import Result from '../shared/Result'
import GoalPage from '../shared/GoalPage'
import ProgressBar from '../shared/ProgressBar';
import Question from '../shared/Question'

import styled from 'styled-components'


class BasicLevel extends Component {
  state = {
    pageState: 'Progress',
    currentAnswer: null,
    currentQuestionIdx: 0,
  }
  score = 0
  progress = 0

  componentDidMount() {
    this.props.fetchLessons();
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
      this.progress += 20
      this.score += 20
    } else {
      this.setState({ pageState: 'Wrong' })
      this.progress += 20
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
    if (_.isEmpty(this.props.lessons)) return null

    const { lessons } = this.props
    const { pageState } = this.state

    const inProgress = this.state.currentQuestionIdx !== lessons.length

    let choices
    let answer
    let questionPrompt

    if (inProgress) {
      choices = lessons[this.state.currentQuestionIdx].choices
      answer = lessons[this.state.currentQuestionIdx].answer
      questionPrompt = lessons[this.state.currentQuestionIdx].prompt
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
              <Question prompt={questionPrompt} />
              <SelectCards
                choices={choices}
                answer={answer}
                onClick={this.onCardClick}
                selectedCard={this.state.currentAnswer}
                key={choices.id}
              />
            </ProblemSection>
            <Result
              pageState={pageState}
              handleOnClick={this.handleOnClick}
              currentAnswer={this.state.currentAnswer}
              skipQuestion={this.skipQuestion}
              answer={answer}
            />
          </>
          :
          <div> <GoalPage score={this.score} submitScore={this.submitScore} /></div>
        }
      </div>
    )
  }
}

BasicLevel.propTypes = {
  fetchLessons: PropTypes.func.isRequired,
  lessons: PropTypes.array.isRequired,
  updateUserExp: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
  return {
    lessons: state.lesson,
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchLessons: () => dispatch(fetchLessons()),
    updateUserExp: (userExp) => dispatch(updateUserExp(userExp)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BasicLevel);


const ProblemSection = styled.div`
  display: flex;
  min-height: 70vh;
  height: auto;
  font-size: 40px;
  flex-direction: column;
  align-items: center;
`
const SubHeader = styled.div`
  display: flex;
  padding: 24px 0px 13px 0;
  width: 100%;
  align-items: center;
  justify-content: center;
`
