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
    this.setState({ currentQuestionIdx: this.state.currentQuestionIdx + 1 })
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
          <div> <GoalPage progress={this.progress} /></div>
        }
      </div>
    )
  }
}


Advanced.propTypes = {
  fetchAdvanced: PropTypes.func.isRequired,
  advanced: PropTypes.array.isRequired
}

const mapStateToProps = ({ advanced }) => {
  return {
    advanced: advanced,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAdvanced: () => dispatch(fetchAdvanced()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Advanced);





  // state = {
  //   progress: 0,
  //   currentQuestion: 0,
  //   currentAnswer: 0,
  //   check: "check",
  //   disableCheck: true,
  //   displayAnswer: "",
  //   showButton: true,
  //   solved: false,
  // };


  // componentDidMount() {
  //   this.props.fetchAdvanced();
  // }

  // selectedChoice = choice => {
  //   this.setState({
  //     currentAnswer: choice,
  //     disableCheck: false
  //   })
  // }

//   checkAnswer = () => {
//     const answer = this.props.advanced[this.state.currentQuestion].answer
//     if (answer === this.state.currentAnswer) {
//       this.setState({
//         check: "Continue",
//         displayAnswer: "Correct",
//         showButton: false,
//         solved: true
//       })
//       this.increaseProgress()
//     } else {
//       this.setState({
//         check: "Continue",
//         displayAnswer: 'Wrong',
//         showButton: false,
//         solved: false

//       })
//     }
//   }

//   handleOnClick = () => {
//     if (this.state.check === "check") {
//       this.checkAnswer()
//     } else {
//       this.nextQuestion()
//     }
//   }

//   increaseProgress = () => {
//     this.setState({
//       progress: this.state.progress + 25,
//     })
//   }


//   //move on to the next Q, if the progressbar is 100% btn changes to finish 
//   //or complete the lesson.
//   nextQuestion = () => {
//     // const question = this.props.lessons.length[this.state.currentQuestion].prompt
//     // const totalQuestion = this.props.lessons.length -1
//     this.setState({
//       currentQuestion: this.state.currentQuestion + 1,
//       currentAnswer: null,
//       check: "check",
//       displayAnswer: "",
//       disableCheck: true,
//       showButton: true,
//     })
//   }


//   //user can skip the question without changes in the progressbar
//   skipQuestion = () => {
//     //display the correct answer
//     //move on to the next Q,
//     //display random Q
//     const { solved } = this.state
//     if (!solved) {
//       this.nextQuestion()
//     }
//     this.setState({
//       currentQuestion: this.state.currentQuestion + 1,
//     })
//   }



//   render() {


//     return (
//       <>
//         <ProblemSection>
//           <SubHeader>
//             <ProgressBar progress={this.state.progress} />
//             <a href="/lessons" id="closebtn">+</a>
//           </SubHeader>

//           {header}
//           <PromptBlock>
//             {questionPrompt}
//             {answerChoices}
//           </PromptBlock>
//         </ProblemSection>

//         <BottomSection style={this.state.displayAnswer === "Correct" ?
//           { backgroundColor: '#b8f28b', color: "#58a700" } : this.state.displayAnswer === "Wrong" ? { backgroundColor: '#ffc1c1', color: "#ea2b2b" } : { backgroundColor: '#ffff' }}>

//           <BottomWrapper>
//             <Button type="button"
//               onClick={this.skipQuestion}
//               style={this.state.showButton ? { display: "block" } : { display: 'none' }}> Skip </Button>

//             <MessageHeader style={{ marginTop: 10 }}> <img alt="" style={{ maxHeight: 80, marginRight: 10 }}
//               src={this.state.displayAnswer === "Correct" ? "/check.png" : this.state.displayAnswer === "Wrong" ? "/wrong.png" : "display: none"} /> {this.state.displayAnswer} </MessageHeader>

//             <Button
//               type="button"
//               onClick={this.handleOnClick}
//               disabled={!this.state.currentAnswer}
//               style={this.state.disableCheck ? { backgroundColor: '#e5e5e5' } :
//                 { backgroundColor: '#78c800', color: "white" }}
//             > {this.state.check}
//             </Button>
//           </BottomWrapper>
//         </BottomSection>
//       </>
//     );
//   }
// }


