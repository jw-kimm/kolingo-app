import React from "react";

const ProgressBar = (props) => {
    return (
        <div className="progress-bar">
            <Filler progress={props.progress} />
        </div>
    )
}

const Filler = (props) => {
    return <div className="filler"
        style={{ width: `${props.progress}%` }} />
}


export default ProgressBar;
