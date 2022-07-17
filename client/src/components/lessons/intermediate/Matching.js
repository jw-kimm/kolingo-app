import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import SelectCards from './SelectCards'
import Question from '../shared/Question'
import GoalPage from '../shared/GoalPage'
import ProgressBar from '../shared/ProgressBar'
import Result from './Result'


class Matching extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentQuestionIdx: 0,
      pageState: 'Progress',
      selected: [],
      correct: [],
    };

    this.progress = 0
    this.score = 0
    this.shuffledCards = this.shuffleCards()
  }

  shuffleCards() {
    const { problem } = this.props

    const shuffled = problem.reduce((acc, item) => {
      const { korean, english } = item

      acc.push({ choice: korean, value: { ...item, clicked: korean } })
      acc.push({ choice: english, value: { ...item, clicked: english } })

      return acc
    }, []
    ).slice().sort(() => Math.random() - 0.5)

    return shuffled
  }

  onCardClick = ({ korean, english, clicked }) => {
    const { selected, correct } = this.state;

    if (selected.length === 0) {
      this.setState({ selected: [clicked] })
    } else if (!_.isEmpty(this.state.selected)) { //if the selected is not empty
      const isKorean = korean === clicked

      let isCorrect
      if (isKorean) {
        isCorrect = selected[0] === english
      } else {
        isCorrect = selected[0] === korean
      }

      if (isCorrect) {
        this.setState({
          selected: [],
          correct: correct.concat([selected[0], clicked]),
          pageState: 'Progress'
        })
        this.progress += 20
        this.score += 20
        if (this.progress === 100) {
          this.setState({
            pageState: 'check'
          })
        }
      } else {
        this.setState({
          selected: [selected[0], clicked]
        });
        setTimeout(() => {
          this.setState({
            selected: [],
            pageState: 'Progress',
          })
        }, 750);
      }
    }
  }

  onCheckButtonClick = () => {
    this.setState({
      pageState: "Correct"
    })
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
      currentQuestionIdx: 1
    })
  }

  submitScore = () => {
    const { user } = this.props.auth
    this.setState({ pageState: "Finished" })
    if (this.props.isAuthenticated) {
      const updatedScore = Number(user.userExp) + Number(this.score)
      this.props.updateUserExp({ userExp: Number(updatedScore) })
    }
  }

  render() {
    const { matching, prompt } = this.props
    const inProgress = this.state.currentQuestionIdx !== matching.length

    return (
      <div>
        {inProgress ?
          <>
            <ProblemSection>
              <SubHeader>
                <ProgressBar progress={this.progress} />
                <a href="/lessons" id="closebtn">+</a>
              </SubHeader>
              <Question prompt={prompt} />
              <SelectCards
                choices={this.shuffledCards}
                onCardClick={this.onCardClick}
                selected={this.state.selected}
                correct={this.state.correct}
              />
            </ProblemSection>
            <Result
              pageState={this.state.pageState}
              handleOnClick={this.handleOnClick}
              skipQuestion={this.skipQuestion}
            />
          </>
          :
          <div> <GoalPage score={this.score} submitScore={this.submitScore} /></div>
        }
      </div>
    )
  }

}

Matching.propTypes = {
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = ({ auth }) => {
  return {
    auth: auth
  };
};


export default connect(mapStateToProps, null)(Matching);

const ProblemSection = styled.div`
  display: flex;
  min-height: 70vh;
  height: auto;
  font-size: 40px;
  flex-direction: column;
  align-items: center;
`
const SubHeader = styled.div`
  display: flex;
  padding-top: 24px;
  width: 100%;
  align-items: center;
  justify-content: center;
`
