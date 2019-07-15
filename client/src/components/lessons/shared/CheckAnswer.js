import React, { Component } from "react";
import GoalPage from './GoalPage'

class CheckAnswer extends Component {
  state = {  
    check: "check",
    disableCheck: true,
    displayAnswer: "",
  };

  checkAnswer = () => {
    const answer = this.props.lessons[this.state.currentQuestion].answer
    if(answer === this.state.currentAnswer) {
      this.setState({
        check: "Continue",
        displayAnswer: "Correct",
        showButton: false
      })
      this.increaseProgress()
    } else {
      this.setState({
        check: "Continue",
        displayAnswer: 'Wrong',
        showButton: false
      })
    }
  }

  render() {
    return (
      <div>
      <button id="skip-btn" type="button" 
        onClick = {this.skipQuestion}
        style = { this.state.showButton ? { display: "block"} : {display: 'none'} }> Skip </button>
            
      <h2 style = {this.state.displayAnswer === "Correct" ? {backgroundColor: 'green'}: {backgroundColor: 'red'}}>{ this.state.displayAnswer } </h2>

      <button id="cont-btn" type="button" onClick ={this.handleOnClick} disabled = {!this.state.currentAnswer}
        style={this.state.disableCheck ? null : {backgroundColor: 'green'}}> {this.state.check} 
      </button>

      <GoalPage/>
      </div>
      );
  }
}

export default CheckAnswer;
