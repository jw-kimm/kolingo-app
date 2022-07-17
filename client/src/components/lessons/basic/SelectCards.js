import React from "react";
import Card from '../shared/Card'

import styled from 'styled-components'

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  padding: 31px 0 31px 0;
  max-height: 310px;
  height: auto;
  overflow: hidden;
`

const SelectCards = ({ choices, onClick, answer, selectedCard }) => {
  return (
    <Wrapper>
      {choices
        .map((choice, i) =>
          <Card
            key={i}
            choice={choice}
            onClick={onClick}
            value={{ choice, answer }}
            className={selectedCard === choice ? 'activeCard' : "card"}
          />
        )}
    </Wrapper>
  )
}

export default SelectCards


