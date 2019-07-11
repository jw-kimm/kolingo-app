import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom'
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
    isAnswer: null,
    showButton: true,
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
    const answer = this.props.lessons[this.state.currentQuestion].answer
    if(answer === this.state.currentAnswer) {
      this.setState({
        isAnswer: true,
        check: "Continue",
        displayAnswer: "Correct",
        showButton: false
      })
      this.increaseScore()
    } else {
      this.setState({
        isAnswer: false,
        check: "Continue",
        displayAnswer: 'Wrong',
        showButton: false
      })
    }
  }

  //move on to the next Q, if the progressbar is 100% btn changes to finish 
  //or complete the lesson.
  nextQuestion = () => {
    const question = this.props.lessons[this.state.currentQuestion].prompt
    const { currentQuestion, totalQuestions } = this.state

    // if(currentQuestion === totalQuestions){
    //   this.setState ({
    //     goalPage: 
    //   })
    // }

    this.setState({
      currentQuestion: this.state.currentQuestion + 1,
      currentAnswer: null,
      check: "check",
      displayAnswer: "",
      disableCheck: true,
      showButton: true
    })
  }  

  handleOnClick = () => {
    if(this.state.check === "check"){
      this.checkAnswer()
    } else {
      this.nextQuestion()
    }
  }

  //user can skip the question without changes in the progressbar
  skipQuestion = () => {
    //display the correct answer
    //move on to the next Q,
    //display random Q
    const questions = this.props.lessons
    let i = questions.length-1
    while (i > 0) {
      const j = Math.floor(Math.random() * (i+1)),
      temp = questions[i]
      questions[i] = questions[j]
      questions[j] = temp
      i--
    } return questions
    this.setState({
      currentQuestion: this.state.currentQuestion + 1,
    })
  }

  increaseScore = () => {
    if(this.state.progress === 100 ) return 
    this.setState({
      progress: this.state.progress + 20,
    })
  }

  handleClosed = (e) => {
    e.preventDefault();
    this.setState({
      currentAnswer: null,
      check: "check",
      displayAnswer: "",
      disableCheck: true,
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
        <a href="/lessons" id ="closebtn"
          onClick={this.props.handleClosed} >
            X </a>
        <ProgressBar progress={this.state.progress} />
        { questionPrompt }
        { answerChoices }
      </div>

      <div className = "bottom-container">
        <button id="skip-btn" type="button" 
        onClick = {this.skipQuestion}
        style = { this.state.showButton ? { display: "block"} : {display: 'none'} }> Skip </button>
        
        <h2 style = {this.state.isAnswer? {backgroundColor: 'green'}: {backgroundColor: 'red'}}>{ this.state.displayAnswer } </h2>

        <button 
          id="cont-btn" 
          type="button"
          onClick ={this.handleOnClick}
          disabled = {!this.state.currentAnswer}
          style={this.state.disableCheck ? null : 
            {backgroundColor: 'green'}}
          > {this.state.check} 
        </button>

        {/* <GoalPage /> */}
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