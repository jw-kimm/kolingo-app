import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash'

import { fetchLessons } from '../../../store/actions/lessonActions';

import SelectCards from './SelectCards'
import Result from '../shared/Result'
import GoalPage from '../shared/GoalPage'
import ProgressBar from '../shared/ProgressBar';
import Question from '../shared/Question'

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
  padding: 13px 0px 13px 0;
  width: 100%;
  align-items: center;
  justify-content: center;
`

class Alphabet extends Component {
  state = {
    pageState: 'Progress',
    currentAnswer: null,
    currentQuestionIdx: 0,
  }

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
      this.progress += 25
    } else {
      this.setState({ pageState: 'Wrong' })
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
    //if the question.length return to the main page
    this.setState({ currentQuestionIdx: this.state.currentQuestionIdx + 1 })
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
              />
            </ProblemSection>
            <Result
              pageState={pageState}
              handleOnClick={this.handleOnClick}
              currentAnswer={this.state.currentAnswer}
              skipQuestion={this.skipQuestion}
            />
          </>
          :
          <div> <GoalPage progress={this.progress} /></div>
        }
      </div>
    )
  }
}

Alphabet.propTypes = {
  fetchLessons: PropTypes.func.isRequired,
  lessons: PropTypes.array.isRequired
}

const mapStateToProps = ({ lesson }) => {
  return {
    lessons: lesson,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchLessons: () => dispatch(fetchLessons()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Alphabet);