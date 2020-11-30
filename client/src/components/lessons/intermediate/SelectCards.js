import React from "react";
import styled from 'styled-components'

import Card from './Card'

const Wrapper = styled.div`
  display: inline-flex;
  padding: 31px 90px;
  max-height: 310px;
  text-align: center;
  overflow: hidden
`


const SelectCards = ({ choices, onCardClick, selected, correct }) => {
  return (
    <Wrapper>
      {
        choices.map(({ choice, value, i }) => {
          let className = 'choice'
          if (selected.includes(choice)) {
            className = 'activeChoice'
          } else {
            className = 'choice'
          }

          if (correct.includes(choice)) {
            className = 'inActiveCards'
          }
          return (
            <Card
              key={i}
              choice={choice}
              value={value}
              onClick={onCardClick}
              className={className}
            />
          )
        })
      }
    </Wrapper>
  )
}

export default SelectCards
