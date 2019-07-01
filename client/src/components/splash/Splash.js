import React from 'react';
import { Link } from 'react-router-dom'
import MainNavbar from '../MainNavbar';

class Splash extends React.Component {

  componentDidMount(){
    this.props.fetchLessons()
  }

  render(){
    return(
      <div>
        {/* <img src="lingobg.jpg" className="bg"/> */}
            <div className= "nav-item">
            <ul>    
            <Link to="/lessons">Get Started</Link>
            {/* <MainNavbar /> */}
            <li>{this.props.lessons[0].title}</li>
            </ul>
            </div>
      </div>
    )
  }
}

export default Splash