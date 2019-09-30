import React from "react";
import Card from '../shared/Card'

import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 31px 0 31px 0;
  max-height: 310px;
  justify-content: space-evenly;
  flex-wrap: wrap;
  height: auto;
  width: 500px;
  text-align: center;
  overflow: hidden;
`

const SelectOptions = ({ choices, onClick, answer, selectedCard }) => {
  return (
    <Wrapper>
      {choices
        .map(choice =>
          <Card
            key={choice.value}
            choice={choice}
            onClick={onClick}
            value={{ choice, answer }}
            className={selectedCard === choice ? 'activeOption' : "option"}
          />
        )}
    </Wrapper>
  )
}

export default SelectOptions

