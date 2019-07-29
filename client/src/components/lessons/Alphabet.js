import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom'
import _ from 'lodash'

import { fetchLessons } from '../../store/actions/lessonActions';

import ProgressBar from './shared/ProgressBar';
import Question from './shared/Question'
import SelectCards from './alphabet/SelectCards'
// import CheckAnswer from './shared/CheckAnswer'
import GoalPage from './shared/GoalPage'

class Alphabet extends Component {
  state = {
    progress: 0,
    currentAnswer: null,
    currentQuestion: 0,
    check: "check",
    disableCheck: true,
    displayAnswer: "",
    showButton: true,
    solved: false,
  }

  componentDidMount() {
    this.props.fetchLessons();
  }

  selectedChoice = choice => {
    this.setState({
      currentAnswer: choice,
      disableCheck: false
    })
  }

  checkAnswer = () => {
    const answer = this.props.lessons[this.state.currentQuestion].answer
    if (answer === this.state.currentAnswer) {
      this.setState({
        check: "Continue",
        displayAnswer: "Correct",
        showButton: false,
        solved: true
      })
      this.increaseProgress()
    } else {
      this.setState({
        check: "Continue",
        displayAnswer: 'Wrong',
        showButton: false,
        solved: false

      })
    }
  }

  handleOnClick = () => {
    if (this.state.check === "check") {
      this.checkAnswer()
    } else {
      this.nextQuestion()
    }
  }

  increaseProgress = () => {
    this.setState({
      progress: this.state.progress + 25,
    })
  }


  //move on to the next Q, if the progressbar is 100% btn changes to finish 
  //or complete the lesson.
  nextQuestion = () => {
    // const question = this.props.lessons.length[this.state.currentQuestion].prompt
    // const totalQuestion = this.props.lessons.length -1
    this.setState({
      currentQuestion: this.state.currentQuestion + 1,
      currentAnswer: null,
      check: "check",
      displayAnswer: "",
      disableCheck: true,
      showButton: true,
    })
  }


  //user can skip the question without changes in the progressbar
  skipQuestion = () => {
    //display the correct answer
    //move on to the next Q,
    //display random Q
    const { solved } = this.state
    if (!solved) {
      this.nextQuestion()
    }
    this.setState({
      currentQuestion: this.state.currentQuestion + 1,
    })
  }

  shuffleQuestion = () => {
    if (!this.state.solved) {
      const totalQuestions = this.props.lessons.length - 1
    }
  }

  render() {

    const { lessons } = this.props
    const isLessons = !_.isEmpty(lessons)

    let answerChoices
    let questionPrompt
    let answer

    if (isLessons) {
      const question = lessons[this.state.currentQuestion]
      const { choices, prompt } = question

      answer = lessons[this.state.currentQuestion].answer

      //   if(this.props.lessons.length > 0) {
      //   //   // questionPrompt = this.props.lessons.map((lesson,i) => {
      //   //     return  (
      //   //     <Question key={i} lesson={lesson}/>
      //   //     )
      //   //   }
      // }
      questionPrompt = <Question prompt={prompt} />

      answerChoices =
        <SelectCards
          choices={choices}
          onClick={this.selectedChoice}
          key={choices.id}
          answer={answer}
          selectedCard={this.state.currentAnswer}
        />
    }

    if (this.state.progress === 100) {
      return <GoalPage />
    }

    return (
      <div>
        <div className="problem-container">
          <a href="/lessons" id="closebtn">+</a>
          <ProgressBar progress={this.state.progress} />
          {questionPrompt}
          {/* <Question question={questionPrompt} /> */}
          {answerChoices}
        </div>

        <div className="bottom-container">
          <button id="skip-btn" type="button"
            onClick={this.skipQuestion}
            style={this.state.showButton ? { display: "block" } : { display: 'none' }}> Skip </button>

          <h2 style={this.state.displayAnswer === "Correct" ? { backgroundColor: '#78c800' } : { backgroundColor: '#ea2b2b' }}>{this.state.displayAnswer} </h2>


          <button
            id="cont-btn"
            type="button"
            onClick={this.handleOnClick}
            disabled={!this.state.currentAnswer}
            style={this.state.disableCheck ? { backgroundColor: '#e5e5e5' } :
              { backgroundColor: '#78c800', color: "white" }}
          > {this.state.check}
          </button>

        </div>
      </div>
    );
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