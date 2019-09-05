import React from "react";
import styled from 'styled-components'

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

// class Card extends Component {
//   state = {
//     classname: "choice"
//   };

//   toggleClassName = (e) => {
//     this.setState({
//       classname: "activeChoice"
//     })
//   }

//   render() {
//     const { choice } = this.props
//     return (
//       <>
//         <div className={this.state.toggleClassName}
//           onClick={() => this.props.onClick(this.props.choice)}>
//           <p>{this.props.choice}</p>
//         </div>
//       </>
//     );
//   }
// }

// export default Card;

const Card = (props) => {
  debugger
  return (
    <>
      {/* <div className={props.className}
        onClick={() => {
          if (!props.isCorrect && !props.isSelected) {
            props.onClick(props.choice)
          }
        }}> */}
      <div className={props.className}
        onClick={() => props.onClick(props.choice)}>
        <p>{props.choice}</p>
        {/* <div className={props.className}
        onClick={() => props.onClick(props.choice.korean)}>
        <p>{props.choice.korean}</p>
      </div>
      <div className={props.className}
        onClick={() => props.onClick(props.choice.english)}>
        <p>{props.choice.english}</p> */}
      </div>
    </>
  )
}

export default Card
