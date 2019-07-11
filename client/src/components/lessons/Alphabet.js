import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash'

import { fetchLessons } from '../../store/actions/lessonActions';

import ProgressBar from './shared/ProgressBar';
import Question from './shared/Question'
import SelectCards from './matching/SelectCards'
// import CheckAnswer from './shared/CheckAnswer'

class Alphabet extends Component {
  state = { 
    progress: 0,
    currentAnswer: null,
    currentQuestion: 0,
    totalQuestions: this.props.lessons.length,
    check: "check",
    disableCheck: true,
    displayAnswer: "",
    isAnswer: null
  }

  componentDidMount() {
    this.props.fetchLessons();
  }

  //when card is selected, check btn enables, user clicks the check btn
  selectedChoice = choice => {
    this.setState({
      currentAnswer: choice,
      disableCheck: false
    })
  }

  //when user clicks the check btn, runs this fn, and send out msg and 
  //btn changes to continue
  checkAnswer = () => {
    debugger
    const answer = this.props.lessons[this.state.currentQuestion].answer
    if(answer === this.state.currentAnswer) {
      this.setState({
        progress: this.state.progress + 1,
        isAnswer: true,
        check: "Continue",
        displayAnswer: "Correct"
      })
      this.increaseScore()
    } else {
      this.setState({
        isAnswer: false,
        check: "Continue",
        displayAnswer: 'Wrong'
      })
    }
  }

  //move on to the next Q, if the progressbar is 100% btn changes to finish 
  //or complete the lesson.
  nextQuestion = () => {
    const question = this.props.lessons[this.state.currentQuestion].prompt
    this.setState({
      currentQuestion: this.state.currentQuestion + 1,
      currentAnswer: false,
      check: "continue",
    })
  }  

  //user can skip the question without changes in the progressbar
  skipQuestion = () => {
    this.loadQuestion()
    this.setState({
      currentQuestion: this.state.currentQuestion + 1,
    })
  }

  loadQuestion = () => {
    this.setState({
      progress: this.state.progress,
      currentQuestion: this.state.currentQuestion + 1
    })
  }

  increaseScore = () => {
    this.setState({
      progress: this.state.progress + 1,
    })
  }

  render() {
    const { lessons } = this.props
    const isLessons = !_.isEmpty(lessons)
    
    let answerChoices 
    let questionPrompt
    let answer 

    if(isLessons) {
      const question = lessons[this.state.currentQuestion]
      const { choices, prompt} = question
      
      answer = lessons[this.state.currentQuestion].answer
      questionPrompt = <Question prompt={prompt}/>
      answerChoices = 
        <SelectCards 
          choices={choices} 
          onClick ={this.selectedChoice}
          key={choices.id}
          answer={answer}
          selectedCard = {this.state.currentAnswer}
        />
    }

    return (
      <div>

      <div className="problem-container">
        <ProgressBar progress={this.state.progress} />
        { questionPrompt }
        { answerChoices }
      </div>

      <div className = "bottom-container">
        <button id="skip-btn" type="button" onClick = {this.skipQuestion}> {this.state.showResults ? "Skip" : null}</button>
        
        <h2 style = {this.state.isAnswer? {backgroundColor: 'green'}: {backgroundColor: 'red'}}>{ this.state.displayAnswer } </h2>

        <button 
          id="cont-btn" 
          type="button"
          onClick ={() => {this.checkAnswer(); this.nextQuestion()}}
          disabled = {!this.state.currentAnswer}
          style={this.state.disableCheck ? null : {backgroundColor: 'green'}}
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