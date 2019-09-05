import React from "react";
import styled from 'styled-components'


const Progressbar = styled.div`
  background-color: #e5e5e5;
  height: 16px;
  width: 70%;
  border-radius: 98px;
  margin: 10px;  
`

const BarFiller = styled.div`
  background :#78c800;
  height:100%;
  border-radius: inherit;
  transition: width .2s ease-in;
`


const ProgressBar = (props) => {
  return (
    <Progressbar>
      <Filler progress={props.progress} />
    </Progressbar>
  )
}

const Filler = (props) => {
  return <BarFiller
    style={{ width: `${props.progress}%` }} />
}


export default ProgressBar;
