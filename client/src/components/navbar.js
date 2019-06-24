import React, {Component} from 'react'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
// import { logout } from '../store'

class Navbar extends Component {
render() {
  return (
    <div className="header">
        <h1>Kolingo</h1>
        {/* <nav>
          <Link to="/">Home</Link>
        </nav> */}
      </div>
    )
  }
}
export default Navbar;

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

// export default connect(null, mapDispatch)(Navbar)

// /**
//  * PROP TYPES
//  */
// Navbar.propTypes = {
//   handleClick: PropTypes.func.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired
// }

