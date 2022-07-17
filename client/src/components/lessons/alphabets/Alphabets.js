import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash'
import styled from 'styled-components'

import { fetchAlphabets } from '../../../store/actions/alphabetAction';
import SingleAlphabet from './SingleAlphabet'

class Alphabets extends Component {

  componentDidMount() {
    this.props.fetchAlphabets();
  }
  render() {

    if (_.isEmpty(this.props.alphabets)) return null
    

// let consonantList = this.props.alphabets
//       .map((alphabetWord) =>
//         alphabetWord.type === "consonant"
//         <SubChart> 
//           <ConsonantChart>
//             <BigLetter>
//               <h4>{alphabetWord.value}</h4>
//             </BigLetter>
//             <Details>
//               <p>{alphabetWord.description}</p>
//               <p>{alphabetWord.pronounciation}</p>
//               <p>{alphabetWord.sound}</p>
//             </Details>
//           </ConsonantChart>
//         </SubChart >
//         )
      
//     let vowelList = this.props.alphabets
//       .map((alphabetWord) =>
//         alphabetWord.type === "vowel"
//        <SubChart>
//           <VowelChart>
//             <BigLetter>
//               <h4>{alphabetWord.value}</h4>
//             </BigLetter>
//             <Details>
//               <p>{alphabetWord.description}</p>
//               <p>{alphabetWord.pronounciation}</p>
//               <p>{alphabetWord.sound}</p>
//             </Details>
//           </VowelChart>
//         </SubChart >
//       )

    let alphabetsList = this.props.alphabets
      .map(alphabetWord =>
        alphabetWord.type === "consonant" ?
        (
        <SubChart> 
          <ConsonantChart>
            <h1>Consonants</h1>
            <BigLetter>
              <h4>{alphabetWord.value}</h4>
            </BigLetter>
            <Details>
              <p>{alphabetWord.description}</p>
              <p>{alphabetWord.pronounciation}</p>
              <p>{alphabetWord.sound}</p>
            </Details>
          </ConsonantChart>
        </SubChart>
        ) : (
        <SubChart>
          <VowelChart>
            <h1>Vowels</h1>
            <BigLetter>
              <h4>{alphabetWord.value}</h4>
            </BigLetter>
            <Details>
              <p>{alphabetWord.description}</p>
              <p>{alphabetWord.pronounciation}</p>
              <p>{alphabetWord.sound}</p>
            </Details>
          </VowelChart>
        </SubChart>
        )
      )

    
      return (
      <Container>
        {/* <SingleAlphabet>

      </SingleAlphabet> */}
        <Chart>
          {alphabetsList}
        </Chart>

      </Container>
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

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Chart = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  border-radius: 20px;
  height: auto;
  width: 70px;
  flex-grow: 1;
  margin: 30px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`

const SubChart = styled.div`
  margin-bottom: 30px;
  text-align: center;
  border: 2px solid black;
  border-radius: 20px;
  margin: 20px 20px;
`

const ConsonantChart = styled.div`


`
const VowelChart = styled.div`

`

const BigLetter = styled.div`
  width: 80px;
  padding: 0 20px;

  h4{
    font-size: 60px;
  }
`

const Details = styled.div`

`

