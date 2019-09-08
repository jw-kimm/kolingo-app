import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash'

import { fetchLessons } from '../../../store/actions/lessonActions';

import SelectCards from './SelectCards'
import Result from '../shared/Result'

class Alphabet extends React.Component {
  state = {
    pageState: 'Progress',
  }

  progress = 0
  currentQuestionIdx = 0

  componentDidMount() {
    this.props.fetchLessons();
  }

  onCardClick = ({ choice, answer }) => {
    this.combination = { choice, answer }
  }

  onCheckButtonClick = () => {
    const { choice, answer } = this.combination

    if (choice === answer) {
      this.setState({ pageState: 'Correct' })
      this.progress += 1
    } else {
      this.setState({ pageState: 'Incorrect' })
    }
    this.currentQuestionIdx += 1
  }

  //continueButtonClick

  render() {
    if (_.isEmpty(this.props.lessons)) return null

    const { lessons } = this.props
    const { pageState } = this.state

    const inProgress = this.currentQuestionIdx !== lessons.length

    let choices
    let answer

    if (inProgress) {
      choices = lessons[this.currentQuestionIdx].choices
      answer = lessons[this.currentQuestionIdx].choices
    }

    return (
      <div>
        {inProgress ?
          <>
            <SelectCards
              choices={choices}
              answer={answer}
              onClick={this.onCardClick}
            />
            <Result
              pageState={pageState}
              onCheckButtonClick={this.onCheckButtonClick}
            />
          </>
          :
          <div> okay we're done here</div>
        }
      </div>
    )
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