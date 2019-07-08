import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash'

import { fetchLessons } from '../../store/actions/lessonActions';

import ProgressBar from './shared/ProgressBar';
import Question from './shared/Question'
import MatchingCards from './matching/MatchingCards'

class Alphabet1 extends Component {
  state = { 
    percentage: 0,
    currentAnswer: null,
    currentQuestion: 0,
  }

  loadAlphabet1 = () => {
    // const {currentQuestion} = this.state;
    this.setState({
      currentQuestion: this.state.currentQuestion,
      currentAnswer: this.state.currentAnswer,
      percentage: this.state.percentage
    })
  }
      
  componentDidMount() {
    this.props.fetchLessons();
    this.loadAlphabet1();
  }

  nextQuestion = () => {
    this.setState({
      currentQuestion: this.state.currentQuestion + 1
    })
  }

  skipQuestion = () => {
    this.setState({
      currentQuestion: this.state.currentQuestion + 1
    })
  }

  checkAnswer = choice => {
    const answer = this.props.lessons[this.state.currentQuestion].answer
    if(answer === choice) {
      this.setState({
      currentAnswer: answer,
      percentage: this.state.percentage + 1
    })
    }
  }
  
  render() {
    const lessons = this.props.lessons
    const isLessons = !_.isEmpty(lessons)

    let answerChoices 
    let questionPrompt
    
    if(isLessons) {
      const question = lessons[this.state.currentQuestion]
      const { choices, prompt} = question
      
      questionPrompt = <Question prompt={prompt}/>
      answerChoices = <MatchingCards choices={choices} onClick ={this.checkAnswer} key={choices.id}/>
    }

    return (
      <div className="problem-container">
        <ProgressBar percentage={this.state.percentage} />
        { questionPrompt }
        { answerChoices }
        <button id="skip-btn" type="button" onClick = {this.nextQuestion}> Skip</button>
        <button id="next-btn" type="button" onClick ={this.skipQuestion}> Next </button>
      </div>
    );
  }
}

Alphabet1.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Alphabet1);