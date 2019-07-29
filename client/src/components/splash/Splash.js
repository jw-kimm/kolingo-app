import React from 'react';
import { Link } from 'react-router-dom'
import MainNavbar from './MainNavbar';


class Splash extends React.Component {

  render() {
    return (
      <div className="mainContainer">
        <MainNavbar />
        <div className="bg" alt="logo" />
        <h1>LET'S LEARN KOREAN! </h1>
        <img src="koreanFlag.png" id="flag" alt="" />
        <Link to="/register" className="start-btn">GET STARTED</Link>


        <section id="intro">
          <img src="muzi.png" id="section-pic" alt="" />
          <div id="subtext">
            <h3>The best new way to learn a language.</h3>
            <p> Learing with Kolingo is fun and addictive. Earn points for correct answers, race against the clock, and level up. Our bite-sized lessons are effective, and we have proof that is works!</p>
          </div>
        </section>

        <section id="app">
          <img src="ryanmuzi.png" id="section-pics" alt="" />
          <div id="subtext">
            <h3> Learn anytime, anywhere</h3>
            <p> Make your breaks and commutes more productive with our apps.
            </p>
          </div>
        </section>

        <footer className="footer">
          <div id="endHeader">
            <h2>Learn Korean with Kolingo </h2>
            <button> Get Started</button>
          </div>
          <div id="endInfo">
            <div id="bottomEnd">
              <h4> About </h4>
              <li> <a href="/About">  About </a></li>
            </div>
            <div id="bottomEnd">
              <h4> Product</h4>
              <li> <a href="/lessons"> Kolingo </a> </li>
              <li> <a href="/Dictionary"> Dictionary </a> </li>
            </div>
            <div id="bottomEnd">
              <h4>Help &amp; Support</h4>
              <li><a href="/About"> Kolingo FAQs </a></li>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Splash