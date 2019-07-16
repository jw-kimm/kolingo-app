import React, {Component} from 'react'
// import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


class Navbar extends Component {
  state = {
    clicked: false,
    learn: '/learnblack.png',
    dictionary: '/dictionaryblack.png',
    discuss: '/discussblack.png'
  }

handleClick = (e) => {
  // if(e.target.name === e.target.value) {
  this.setState ({
    clicked: !this.state.clicked,
    learn: '/learncolor.png',
    dictionary: '/dictionarycolor.png',
    discuss: '/discusscolor.png'
  })  
// }
}  
render() {
  return (
    <div className="header">
        <ul>
          <li onClick = {this.handleClick} value ="learn"><Link to="/lessons"><img src={this.state.learn}/> LEARN</Link></li>
          <li onClick = {this.handleClick} value="dictionary"> <Link to="/dictionary"><img src={this.state.dictionary}/>DICTIONARY</Link></li>
          <li onClick = {this.handleClick} value="discuss"><Link to="/lessons"> <img src={this.state.discuss}/>DISCUSS</Link></li>
        </ul>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
// const mapState = state => {
//   return {
//     isLoggedIn: !!state.user.user.id
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     handleClick() {
//       dispatch(logout())
//     }
//   }
// }

export default Navbar