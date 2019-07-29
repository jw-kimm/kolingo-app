import React, { Component } from "react";
import classnames from 'classnames';

class Card extends Component {
  state = {

  };

  handleClick(e) {
    if (!this.props.flipped) {
      this.props.checkMatch(this.props.value, this.props.id);
    }
  }

  render() {
    let classes

    classes = classnames(
      'Card',
      { 'Card--flipped': this.props.flipped },
      { 'Card--matched': this.props.matched }
    );
    var cardValue = this.props.flipped ? this.props.value : '';
    return (
      <div className={classes} onClick={this.handleClick}>
        {cardValue}
      </div>
    );
  }
}

export default Card;