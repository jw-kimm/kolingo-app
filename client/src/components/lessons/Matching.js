import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash'

import { fetchMatching } from '../../store/actions/matchingActions';

import Question from './shared/Question'
import ProgressBar from './shared/ProgressBar';
import GoalPage from './shared/GoalPage'
import SelectedChoices from './matching/SelectedChoices'

import styled from 'styled-components'

const ProblemSection = styled.div`
  display: flex;
  height: 560px;
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
const BottomSection = styled.div`
  display: flex;
  background: #fff;
  border-top: 2px solid #e5e5e5;
  height: 174px;  
  color: white;
  text-align: center;
  flex-direction: column;
`

const Button = styled.button`
  font-weight: bold;
  width: 130px;
  color: white;
  background-color: rgb(241, 241, 241);
  border-radius: 15px;
  text-align: center;
  border-width: 2px 2px 4px;
  text-transform: uppercase;
  padding: 16px;
  font-size: 20px;
    :hover{
    background-color: #afafaf;
    color: white;
    border-color: #e5e5e5;
    }
`
const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  flex-flow: row;
  flex-wrap: wrap;
  height: 170px;
`
const MessageHeader = styled.h2`
  text-align: center;
  font-size: 25px;
  width: 100%;
`

class Matching extends Component {
  state = {
    progress: 0,
    currentAnswer: null,
    currentQuestion: 0,
    currentCards: 0,
    check: "check",
    disableCheck: true,
    disableButton: false,
    showButton: true,
    solved: false,
    selected: [],
    correct: []
  };

  componentDidMount() {
    this.props.fetchMatching();
  }
  //when all the pairs are matched, the check button turns on and moves onto the next question.
  // if incorrect pairs are matched, it bounces with red outline

  onCardClick = (choice) => {
    debugger
    const { selected, correct, currentQuestion, currentCards } = this.state;
    const answer = this.props.matching[currentQuestion][currentCards].problem

    if (selected.length === 0) { // selecting a first card
      this.setState({
        selected: [choice],
        currentAnswer: choice
      })

    } else if (selected.length === 1) { //selecting a second card
      const kChoice = _.keyBy(answer, 'korean')
      const eChoice = _.keyBy(answer, 'english')

      let match

      if (kChoice[choice]) { //choice = "ah"
        match = kChoice[choice].english === selected[0]
      } else if (eChoice[choice]) {
        match = eChoice[choice].korean === selected[0]
      }

      if (match) {
        // It's a match :)
        // Add selected cards to `correct` and reset selection
        this.setState({
          correct: correct.concat([selected[0], choice]),
          selected: [],
          disableButton: true,
        });
        this.increaseProgress()
      } else {
        // It's not a match :(
        // Select it for now, and reset selection in a bit
        this.setState({
          selected: [selected[0], choice]
        });
        setTimeout(() => {
          this.setState({
            selected: []
          })
        }, 1500);
      }
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
      progress: this.state.progress + 20,
    })
  }

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


  render() {
    debugger
    const { matching } = this.props
    const isMatching = !_.isEmpty(matching)

    let answerChoices
    let questionPrompt

    if (isMatching) {
      const question = matching[this.state.currentQuestion][this.state.currentCards]
      const { prompt, problem } = question

      questionPrompt = <Question prompt={prompt} />

      answerChoices =
        <SelectedChoices
          problem={problem}
          onClick={this.onCardClick}
          isSelected={this.selected}
          isCorrect={this.correct}
          selectedChoice={this.state.currentAnswer}
          disableButton={this.disableButton}
        />
    }

    if (this.state.progress === 100) {
      return <GoalPage />
    }

    return (
      <>
        <ProblemSection>
          <SubHeader>
            <ProgressBar progress={this.state.progress} />
            <a href="/lessons" id="closebtn">+</a>
          </SubHeader>
          {questionPrompt}
          {answerChoices}
        </ProblemSection>

        <BottomSection style={this.state.displayAnswer === "Correct" ?
          { backgroundColor: '#b8f28b', color: "#58a700" } : this.state.displayAnswer === "Wrong" ? { backgroundColor: '#ffc1c1', color: "#ea2b2b" } : { backgroundColor: '#ffff' }}>

          <BottomWrapper>
            <Button type="button"
              onClick={this.skipQuestion}
              style={this.state.showButton ? { display: "block" } : { display: 'none' }}> Skip </Button>

            <MessageHeader style={{ marginTop: 10 }}> <img alt="" style={{ maxHeight: 80 }}
              src={this.state.displayAnswer === "Correct" ? "/check.png" : this.state.displayAnswer === "Wrong" ? "/wrong.png" : "display: none"} /> {this.state.displayAnswer} </MessageHeader>

            <Button
              type="button"
              onClick={this.handleOnClick}
              disabled={!this.state.currentAnswer}
              style={this.state.disableCheck ? { backgroundColor: '#e5e5e5' } :
                { backgroundColor: '#78c800', color: "white" }}
            > {this.state.check}
            </Button>
          </BottomWrapper>
        </BottomSection>
      </>
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

