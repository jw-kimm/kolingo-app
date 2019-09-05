import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import ProgressBar from './shared/ProgressBar';
import Question from './shared/Question';
import SelectOptions from './advanced/SelectOptions';
import GoalPage from './shared/GoalPage';

import { fetchAdvanced } from '../../store/actions/advancedAction';

import styled from 'styled-components';

const ProblemSection = styled.div`
  display: flex;
  height: 560px;
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
  margin-top: 10px
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
  width: 210px;
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
  flex-wrap: nowrap;
  height: 170px;
`
const MessageHeader = styled.p`
  text-align: center;
  font-size: 25px;
  display: flex;
  align-items: center;
  margin: 10px;
`

class Advanced extends Component {
  state = {
    progress: 0,
    currentQuestion: 0,
    currentAnswer: 0,
    check: "check",
    disableCheck: true,
    displayAnswer: "",
    showButton: true,
    solved: false,
  };


  componentDidMount() {
    this.props.fetchAdvanced();
  }
  selectedChoice = choice => {
    this.setState({
      currentAnswer: choice,
      disableCheck: false
    })
  }

  checkAnswer = () => {
    const answer = this.props.advanced[this.state.currentQuestion].answer
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



  render() {
    const { advanced } = this.props
    const isAdvanced = !_.isEmpty(advanced)

    let answerChoices
    let questionPrompt
    let answer
    let header

    if (isAdvanced) {
      const question = advanced[this.state.currentQuestion]
      const { choices, prompt } = question

      answer = advanced[this.state.currentQuestion].answer

      header = advanced[this.state.currentQuestion].title

      questionPrompt = <Question prompt={prompt} />
      answerChoices =
        <SelectOptions
          choices={choices}
          onClick={this.selectedChoice}
          key={choices.id}
          answer={answer}
          selectedOptions={this.state.currentAnswer}
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

          {header}
          <PromptBlock>
            {questionPrompt}
            {answerChoices}
          </PromptBlock>
        </ProblemSection>

        <BottomSection style={this.state.displayAnswer === "Correct" ?
          { backgroundColor: '#b8f28b', color: "#58a700" } : this.state.displayAnswer === "Wrong" ? { backgroundColor: '#ffc1c1', color: "#ea2b2b" } : { backgroundColor: '#ffff' }}>

          <BottomWrapper>
            <Button type="button"
              onClick={this.skipQuestion}
              style={this.state.showButton ? { display: "block" } : { display: 'none' }}> Skip </Button>

            <MessageHeader style={{ marginTop: 10 }}> <img alt="" style={{ maxHeight: 80, marginRight: 10 }}
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



// class Advanced extends Component {
//   state = {
//     
//     currentQuestion: 0
//   };

//   render() {
//     debugger

//       
//     return (
//       <>
//         <ProblemSection>
//           <SubHeader>
//             <ProgressBar progress={this.state.progress} />
//             <a href="/lessons" id="closebtn">+</a>
//           </SubHeader>
//           
//           {answerChoices}
//         </ProblemSection>
//       </>
//     );
//   }
// }

// Advanced.propTypes = {
//   fetchAdvanced: PropTypes.func.isRequired,
//   advanced: PropTypes.array.isRequired
// }

// const mapStateToProps = ({ advanced }) => {
//   return {
//     advanced: advanced,
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchAdvanced: () => dispatch(fetchAdvanced()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Advanced);


