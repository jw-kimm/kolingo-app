// import React, { Component } from "react";

// import styled from 'styled-components'

// const BottomSection = styled.div`
//   display: flex;
//   background: #fff;
//   border-top: 2px solid #e5e5e5;
//   height: 174px;  
//   color: white;
//   text-align: center;
//   flex-direction: column;
// `

// const Button = styled.button`
//   font-weight: bold;
//   width: 130px;
//   color: white;
//   background-color: rgb(241, 241, 241);
//   border-radius: 15px;
//   text-align: center;
//   border-width: 2px 2px 4px;
//   text-transform: uppercase;
//   padding: 16px;
//   font-size: 20px;
//     :hover{
//     background-color: #afafaf;
//     color: white;
//     border-color: #e5e5e5;
//     }
// `
// const BottomWrapper = styled.div`
//   display: flex;
//   justify-content: space-around;
//   width: 100%;
//   align-items: center;
//   flex-flow: row;
//   flex-wrap: wrap;
//   height: 170px;
// `
// const MessageHeader = styled.h2`
//   text-align: center;
//   font-size: 25px;
//   width: 100%;
// `

// class Result extends Component {
//   state = {
//     displayAnswer: "",
//     disableCheck: true,
//     showButton: true,
//   };

//   //move on to the next Q, if the progressbar is 100% btn changes to finish 
//   //or complete the lesson.
//   nextQuestion = () => {
//     // const question = this.props.lessons.length[this.state.currentQuestion].prompt
//     // const totalQuestion = this.props.lessons.length -1
//     this.setState({
//       currentQuestion: this.state.currentQuestion + 1,
//       currentAnswer: null,
//       check: "check",
//       displayAnswer: "",
//       disableCheck: true,
//       showButton: true,
//     })
//   }


//   //user can skip the question without changes in the progressbar
//   skipQuestion = () => {
//     //display the correct answer
//     //move on to the next Q,
//     //display random Q
//     const { solved } = this.state
//     if (!solved) {
//       this.nextQuestion()
//     }
//     this.setState({
//       currentQuestion: this.state.currentQuestion + 1,
//     })
//   }

//   render() {
//     return (
//       <>
//         <BottomSection style={this.state.displayAnswer === "Correct" ?
//           { backgroundColor: '#b8f28b', color: "#58a700" } : this.state.displayAnswer === "Wrong" ? { backgroundColor: '#ffc1c1', color: "#ea2b2b" } : { backgroundColor: '#ffff' }}>

//           <BottomWrapper>
//             <Button type="button"
//               onClick={this.skipQuestion}
//               style={this.state.showButton ? { display: "block" } : { display: 'none' }}> Skip </Button>

//             <MessageHeader style={{ marginTop: 10 }}> <img alt="" style={{ maxHeight: 80 }}
//               src={this.state.displayAnswer === "Correct" ? "/check.png" : this.state.displayAnswer === "Wrong" ? "/wrong.png" : "display: none"} /> {this.state.displayAnswer} </MessageHeader>

//             <Button
//               type="button"
//               onClick={this.handleOnClick}
//               disabled={!this.state.currentAnswer}
//               style={this.state.disableCheck ? { backgroundColor: '#e5e5e5' } :
//                 { backgroundColor: '#78c800', color: "white" }}
//             > {this.state.check}
//             </Button>
//           </BottomWrapper>
//         </BottomSection>
//       </>
//     );
//   }
// }

// export default Result;