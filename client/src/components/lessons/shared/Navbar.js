import React, { Component } from 'react'
// import {connect} from 'react-redux'
import { Link } from 'react-router-dom'


class Navbar extends Component {
  state = {
    isClicked: false
  }

  toggleIcon = () => {
    this.setState({
      isClicked: !this.state.isClicked
    })
  }

  // getLearn = () => this.state.isClicked ? '/learncolor.png' : '/learnblack.png'

  // learn: '/learnblack.png',
  // dictionary: '/dictionaryblack.png',
  // discuss: '/discussblack.png'
  // handleClick = (e) => {

  // if (this.state.learn === '/learnblack.png')
  //   this.setState({ learn: '/learncolor.png' })
  // else
  //   this.setState({ learn: '/learnblack.png' })

  // if (this.state.dictionary === '/dictionaryblack.png')
  //   this.setState({ dictionary: '/dictionarycolor.png' })
  // else
  //   this.setState({ dictionary: '/dictionaryblack.png' })


  // if (this.state.discuss === '/discussblack.png')
  //   this.setState({ discuss: '/discusscolor.png' })
  // else
  //   this.setState({ discuss: '/discussblack.png' })
  // }

  // handleChange = (e) => {
  //   if (this.state.clicked && e.target.value === "learn") {
  //     this.setState({
  //       learn: '/learncolor.png',
  //       dictionary: '/dictionarycolor.png',
  //       discuss: '/discusscolor.png'
  //     })
  //   }
  // }

  render() {
    let learn = this.state.isClicked ? '/learncolor.png' : '/learnblack.png'
    let dictionary = this.state.isClicked ? '/dictionarycolor.png' : '/dictionaryblack.png'
    let discuss = this.state.isClicked ? '/discusscolor.png' : '/discussblack.png'

    return (
      <div className="header">
        <ul>
          <li onClick={this.toggleIcon} value="learn"><Link to="/lessons"><img src={this.state.isClicked ? '/learncolor.png' : '/learnblack.png'} /> LEARN</Link></li>
          <li onClick={this.toggleIcon} value="dictionary"> <Link to="/dictionary"><img src={this.state.isClicked ? '/dictionarycolor.png' : '/dictionaryblack.png'} />DICTIONARY</Link></li>
          <li onClick={this.toggleIcon} value="discuss"><Link to="/lessons"> <img src={this.state.isClicked ? '/discusscolor.png' : '/discussblack.png'} />DISCUSS</Link></li>
          <li> settings</li>
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