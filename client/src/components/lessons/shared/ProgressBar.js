import React from "react";

const ProgressBar = (props) => {
    return (
        <div className = "progress-bar">
            <Filler percentage={props.percentage} />
        </div>
    )
}

const Filler = (props) => {
    return <div className="filler" 
    style={{width: `${props.percentage}%`}}/>
}


export default ProgressBar;

// import React, {Component} from "react";

// class ProgressBar extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  };
//     }
//     render() {
//         return (
            
//         );
//     }
// }

// export default ProgressBar;