import React from "react";
import Card from './Card'

import styled from 'styled-components'

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  padding: 31px 90px;
  max-height: 310px;
  text-align
`

const SelectCards = ({ choices, onClick, answer, selectedCard }) => {
  debugger
  return (
    <Wrapper>
      {choices
        .map(choice =>
          <Card
            key={choice.value}
            choice={choice}
            onClick={onClick}
            answer={answer}
            className={selectedCard === choice ? 'activeCard' : "card"}
          />
        )}
    </Wrapper>
  )
}

export default SelectCards
