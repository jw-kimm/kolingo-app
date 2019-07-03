import React, { Component } from "react";

const ProgressBar = (props) => {
    return (
        <div className = "progress-bar">
            <Filler />
        </div>
    )
}

const Filler = (props) => {
    return <div className="filler" />
}


export default ProgressBar;