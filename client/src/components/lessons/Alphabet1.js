import React, { Component } from "react";
import ProgressBar from './shared/ProgressBar';
// import ProgressBar from 'react-bootstrap/ProgressBar'
import Question from './shared/Question'
import MatchingCards from './matching/MatchingCards'
import { fetchLessons } from '../../store/actions/lessonActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash'

class Alphabet1 extends Component {

  state = { 
    percentage: 0,
    currentAnswer: null,
    currentQuestion: 0,
  }

  loadAlphabet1 = () => {
    const {currentQuestion} = this.state;
    this.setState({
      //currentQuestion
      //userAnswer
      //percentage
    })
  }
      
  componentDidMount() {
    this.props.fetchLessons();
    this.loadAlphabet1();
  }

  render() {
    const lessons = this.props.lessons
    const isLessons = !_.isEmpty(lessons)
    let answerChoices 
    let questionPrompt
    
    // debugger 
    if(isLessons) {
      const question = lessons[this.state.currentQuestion]
      const { choices, prompt } = question

      questionPrompt = <Question prompt={prompt}/>
      answerChoices = <MatchingCards content={choices} />
    }
    // const answer = this.state.answer
    // const { prompt, choices } = this.state
    return (
        <div className="problem-container">
          <ProgressBar percentage={this.state.percentage} />
          { questionPrompt }
          { answerChoices }
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