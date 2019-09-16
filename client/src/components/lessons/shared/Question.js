import React from 'react'
import styled from 'styled-components'

const Header = styled.h2`
  color: #4e4c4c;
  text-align: center;
  font-weight: 800;
`

const Question = (props) => {
  return (
    <Header>{props.prompt}</Header>
  )
}

export default Question

