import React from 'react';
import { Link } from 'react-router-dom'
import MainNavbar from './MainNavbar';

class Splash extends React.Component {

  componentDidMount(){

  } 

  render(){
    return(
      <div className = "mainContainer">
        <img src="lingobg.jpg" id="bg"/>
            <h1>LET'S LEARN KOREAN! </h1>
            <Link to="/lessons" className="start-btn">GET STARTED</Link>
            <div className= "nav-item">
            <MainNavbar />
            </div>
      </div>
    )
  }
}

export default Splash