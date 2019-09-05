import React from "react";
import Card from './Card'

import styled from 'styled-components'

const Wrapper = styled.div`
  display: inline-flex;
  padding: 31px 90px;
  max-height: 310px;
  text-align: center
`
const CardContainer = styled.div`
  display:flex;
  flex-direction: row;
`

const ActiveChoice = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 16px;
  margin: 16px;
  padding: 12px 16px;
  font-size: 19px;
  background-color: #ddf4ff;
  border-color: #1cb0f6;
`
const Choice = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 16px;
  margin: 16px;
  padding: 12px 16px;
  font-size: 19px;
    :hover{
      background-color: #ddf4ff;
      border-color: #1cb0f6;
    }
`

// class SelectedChoices extends Component {
//   state = {
//     classname: "choice"
//   };

//   toggleClassName = (e) => {
//     this.setState({
//       classname: "activeChoice"
//     })
//   }

//   render() {
//     const { problem, onClick, selectedChoice, isCorrect, isSelected } = this.props
//     return (
//       <Wrapper>
//         {problem.map(choices => {
//           return (
//             <CardContainer key={choices.id}>
//               {
//                 Object.values(choices).map((choice, i) => {
//                   return (
//                     <Card
//                       key={i}
//                       choice={choice}
//                       onClick={onClick}
//                       isCorrect={isCorrect}
//                       isSelected={isSelected}
//                       selectedChoice={selectedChoice}
//                       className={this.state.classname}
//                     />
//                   )
//                 }
//                 )}
//             </CardContainer>
//           )
//         })
//         }
//       </Wrapper>
//     );
//   }
// }

// export default SelectedChoices;

//.sort(() => Math.random() - 0.5)
const SelectedChoices = ({ problem, onClick, selectedChoice, isCorrect, isSelected, className }) => {
  debugger
  return (
    <Wrapper>
      {problem.map(choices => {
        return (
          <CardContainer key={choices.id}>
            {
              Object.values(choices).map((choice, i) => {
                return (
                  <Card
                    key={i}
                    choice={choice}
                    onClick={onClick}
                    isCorrect={isCorrect}
                    isSelected={isSelected}
                    selectedChoice={selectedChoice}
                    className={className}
                  />
                )
              }
              )}
          </CardContainer>
        )
      })
      }
    </Wrapper>
    //     // <Wrapper>
    //     //   {problem.map((choice, i) => {
    //     //     return (
    //     //       <Card
    //     //         key={i}
    //     //         choice={choice}
    //     //         onClick={onClick}
    //     //         isCorrect={isCorrect}
    //     //         isSelected={isSelected}
    //     //         // className={className}
    //     //         className={selectedChoice === choice.korean ? 'activeChoice' : "choice"}
    //     //         style={disableButton ? { backgroundColor: "#58a700" } : null}
    //     //       />
    //     //     )
    //     //   }
    //     //   )}
    //     // </Wrapper>
  )
}

export default SelectedChoices
