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

const SelectedChoices = ({ problem, onClick, selectedChoice, isCorrect, isSelected, disableButton }) => {
  debugger
  return (
    <Wrapper>
      {problem.map(choices => {
        return (
          <div key={choices.id}>
            {
              Object.values(choices).map((choice, i) => {
                return (
                  <Card
                    key={i}
                    choice={choice}
                    onClick={onClick}
                    isCorrect={isCorrect}
                    isSelected={isSelected}
                    className={selectedChoice === choice ? 'activeChoice' : "choice"}
                    style={disableButton ? { backgroundColor: "#58a700" } : null}
                  />
                )
              }
              )}
          </div>
        )
      })
      }
    </Wrapper>
  )
}

export default SelectedChoices
