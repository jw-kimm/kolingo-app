// import React from 'react'

// const Question = (props) => {
//   debugger
//   const shuffleQuestion = Shuffle(props.prompt);
//     return(
//       <div>
//         {shuffleQuestion.map((prompt, idx) => {
//             return (
//               <h2>{prompt}</h2>
//             )
//           })
//         }
//       </div>
//     )
//   }
    // <h2>
    //        <Shuffle prompt={props.prompt} />
    // </h2>


// const Shuffle = (array) =>{
//   var currentIndex = array.length, temporaryValue, randomIndex;

//   while (0 !== currentIndex) {
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;
//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }

//   return array;
// }

// export default Question 


import React from 'react'

const Question = (props) => {
  return(
    <h2>{props.prompt}</h2>
  )
}

export default Question 

