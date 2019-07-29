import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchMatching } from '../../store/actions/matchingActions';
import Card from './matching/Card'
import Question from './shared/Question'

class Matching extends Component {
  state = {
    cards: this.props.matching,
    lastCard: null,
    locked: false,
    matches: 0
  };

  componentDidMount() {
    this.props.fetchMatching();
  }

  // checkMatch(value, id) {
  //   if (this.state.locked) {
  //     return;
  //   }

  //   var cards = this.state.cards;
  //   cards[id].flipped = true;
  //   this.setState({ cards, locked: true });
  //   if (this.state.lastCard) {
  //     if (value === this.state.lastCard.value) {
  //       var matches = this.state.matches;
  //       cards[id].matched = true;
  //       cards[this.state.lastCard.id].matched = true;
  //       this.setState({ cards, lastCard: null, locked: false, matches: matches + 1 });
  //     } else {
  //       setTimeout(() => {
  //         cards[id].flipped = false;
  //         cards[this.state.lastCard.id].flipped = false;
  //         this.setState({ cards, lastCard: null, locked: false });
  //       }, 1000);
  //     }
  //   } else {
  //     this.setState({
  //       lastCard: { id, value },
  //       locked: false
  //     });
  //   }
  // }

  renderCards(cards) {
    debugger
    return cards.map((card, index) => {
      return (
        <Card
          key={index}
          value={card.value}
          id={index}
          matched={card.matched}
          flipped={card.flipped}
          checkMatch={this.checkMatch} />
      );
    });
  }

  // reset() {
  //   this.setState({
  //     cards: fetchMatching(),
  //     lastCard: null,
  //     locked: false,
  //     matches: 0
  //   });
  // }

  render() {
    debugger
    const { matching } = this.props

    const question = matching[this.state.currentQuestion]
    const { prompt } = question

    let questionPrompt

    questionPrompt = <Question prompt={prompt} />
    // var btnText = 'Reset';
    // if (this.state.matches === this.state.cards.length / 2) {
    //   btnText = 'You Win! Play Again?';
    // }
    return (
      <div className="Game">

        {/* <div>
          <button onClick={this.reset}>{btnText}</button>
        </div>*/}
        {questionPrompt}
        {this.renderCards(this.state.cards)}
      </div>
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

