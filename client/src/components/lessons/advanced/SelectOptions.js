import React from "react";
import Options from './Options'

import styled from 'styled-components'

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  padding: 31px 0 31px 0;
  max-height: 310px;
  text-align
`

const SelectOptions = ({ choices, onClick, answer, selectedOptions }) => {
  debugger
  return (
    <Wrapper>
      {choices
        .map(choice =>
          <Options
            key={choice.value}
            choice={choice}
            onClick={onClick}
            answer={answer}
            className={selectedOptions === choice ? 'activeOption' : "option"}
          />
        )}
    </Wrapper>
  )
}

export default SelectOptions
