import React from "react";
import styled from 'styled-components'

import Card from './Card'

const Wrapper = styled.div`
  display: inline-flex;
  padding: 31px 90px;
  max-height: 310px;
  text-align: center
`


const SelectCards = ({ choices, onCardClick, selected, correct }) => {
  // debugger
  const result = choices.reduce((acc, item) => {
    const { korean, english } = item

    acc.push({ choice: korean, value: { ...item, clicked: korean } })
    acc.push({ choice: english, value: { ...item, clicked: english } })

    return acc
  }, []
  )


  return (
    <Wrapper>
      {
        result.map(({ choice, value }) => {
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
