// import React from 'react'

// const Question = ({ props }) => {
//   debugger
//   const shuffledQuestion = Shuffle(props);
//     return(
//       <div>
//         {
//           shuffledQuestion.map((props, idx) => {
//             return (
//               <h2>{props.prompt}</h2>
//             )
//           })
//         }
//       </div>
//     )
//   }
//     // <h2>
//     //   <Shuffle prompt={props.prompt} />
//     // </h2>

// const Shuffle = (array) =>{
//   debugger
//   let currentIndex = array.length
//   let temporaryValue
//   let randomIndex

//   while (0 !== currentIndex) {
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;
//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }
//   return array;
//   // let newArr = [].concat(array);
//   // for (let i = array.length - 1; i > 0; i--) {
//   //     const j = Math.floor(Math.random() * (i + 1));
//   //     [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
//   // }
//   // return newArr;

// };


// export default Question 


import React from 'react'

const Question = (props) => {
  return(
    <h2>{props.prompt}</h2>
  )
}

export default Question 

