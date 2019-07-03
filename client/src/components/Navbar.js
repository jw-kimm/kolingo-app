import React, {Component} from 'react'
// import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


class Navbar extends Component {
render() {
  return (
    <div className="header">
        <ul>
          <li><Link to="/lessons">Learn</Link></li>
          <li> <Link to="/dictionary">Dictionary</Link></li>
          <li><Link to="/discuss">Discuss</Link></li>
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