// import React, { Component, Fragment } from 'react';
// import { 
//     Collapse,
//     Navbar,
//     NavbarToggler,
//     NavbarBrand,
//     Nav,
//     NavItem,
//     NavLink,
//     Container
//  } from 'reactstrap';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types'
// import RegisterModal from '../auth/RegisterModal'
// import Logout from '../auth/Logout'
// import LoginModal from '../auth/LoginModal'

// class MainNavbar extends Component {
//     state = {
//         isOpen: false
//     }

//     static propTypes ={
//         auth: PropTypes.object.isRequired
//     }

//     toggle = () => {
//         this.setState({
//             isOpen: !this.state.isOpen
//         });
//     }

//     render() {
//         const { isAuthenticated, user } = this.props.auth;

//         const authLinks = (
//             <Fragment>
//                 <NavItem>
//                     <span className="navbar-text mr-3"> <strong> { user? `Welcome ${user.userName}` : " "}</strong> </span>
//                 </NavItem>
//                 <NavItem>
//                     <Logout />
//                 </NavItem>
//             </Fragment>
//         );
//         const guestLinks = (
//             <Fragment>
//                 <NavItem>
//                     <RegisterModal />
//                 </NavItem>
//                 {/* <LoginModal /> */}
//                 {/* <NavItem>
//                 </NavItem> */}
//             </Fragment>
//         )

//         return(
//             <div>
//             <Navbar dark expand="sm" className="mb-5">
//                 <Container>
//                     <NavbarBrand href="/"> Kolingo </NavbarBrand>
//                     <NavbarToggler onClick={this.toggle} />
//                     <Collapse isOpen={this.state.isOpen} navbar>
//                         <Nav className='ml-auto' navbar>
//                         { isAuthenticated ? authLinks : guestLinks} 
//                         </Nav>
//                     </Collapse>
//                 </Container>
//             </Navbar>
//             </div>
//         )
//     }
// }

// const mapStateToProps = state => ({
//     auth: state.auth
// })

// export default connect(mapStateToProps, null)(MainNavbar);

import React, {Component} from 'react';
import { Link, withRouter} from 'react-router-dom';

class MainNavbar extends Component {
  logOut(e){
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push('/')
  }

  render(){
      const loginRegLink = (
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/login" className="nav-link">
            Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link">
            Register
            </Link>
          </li>
        </ul>
      )
      const userLink = (
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/profile" className="nav-link">
            User
            </Link>
          </li>
          <li className="nav-item">
            <a href="" onClick={this.logOut} className="nav-link">
            Log Out
            </a>
          </li>
        </ul>
      )
        return(

        )
  }
}

// export default connect(mapStateToProps, null)(MainNavbar);