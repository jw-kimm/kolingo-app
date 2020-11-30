import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash'

import { fetchAlphabets } from '../../../store/actions/alphabetAction';
import SingleAlphabet from './SingleAlphabet'
// import styled from 'styled-components'

class Alphabets extends Component {

  componentDidMount() {
    this.props.fetchAlphabets();
  }
  render() {
    if (_.isEmpty(this.props.alphabets)) return null

    let alphabetsList = this.props.alphabets
      .map((alphabetWord, i) => (
        <div>
          <h1>{alphabetWord.type}</h1>
          <h4>{alphabetWord.value}</h4>
          <p>{alphabetWord.description}</p>
          <p>{alphabetWord.pronounciation}</p>
          <p>{alphabetWord.sound}</p>
        </div>
      ))
    return (
      <>
        {/* <SingleAlphabet>

      </SingleAlphabet> */}
        {alphabetsList}

      </>
    )
  }
}

Alphabets.propTypes = {
  fetchAlphabets: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
  return {
    alphabets: state.alphabet,
    auth: state.auth
  };
};


const mapDispatchToProps = dispatch => {
  return {
    fetchAlphabets: () => dispatch(fetchAlphabets()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Alphabets)