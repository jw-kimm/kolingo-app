import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';
import RegisterModal from '../auth/RegisterModal'
// import Logout from '../auth/Logout'
import LoginModal from '../auth/LoginModal'

import { loadUser } from "../../store/actions/authAction";


class MainNavbar extends Component {
  state = {
    isOpen: false,
  }

  componentDidMout() {
    this.props.loadUser();
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState(prevState => {
      return {
        isOpen: !prevState.isOpen
      }
    })
  }

  closePopup = () => {
    this.setState({
      isOpen: false
    });
  }


  render() {
    // const { isAuthenticated, user } = this.props.auth;

    // const guestLink = (
    //   <ul className="navbar-nav">
    //     <li className="nav-item">
    //       <a href="/" className="controller" onClick={this.handleClick}>
    //         Login
    //   </a>
    //     </li>
    //     <li className="nav-item">
    //       <a href="/" className="controller" value="Register" onClick={this.toggle} >
    //         Register
    //   </a>
    //     </li>
    //   </ul>
    // )
    // const authLink = (
    //   <ul className="navbar-nav">
    //     <li className="nav-item">
    //       <a href="/profile" className="nav-link">
    //         <strong> {user ? `Welcome ${user.userName}` : " "}</strong>
    //       </a>
    //     </li>
    //     <li className="nav-item">
    //       <a href="/" className="nav-link">
    //         Logout
    //     </a>
    //     </li>
    //   </ul>
    // )

    // if(this.state.showLoginModal) {
    //   return <LoginModal />
    // } else if(this.state.showRegisterModal) {
    //   return <RegisterModal />
    // } 
    return (
      <div>
        <div className="navbar" expand="sm">
          <h1 style={{ left: "39px", margin: "0", width: "400px" }}> Kolingo </h1>
          <li className="nav-item">
            <a href="/" className="controller" onClick={this.handleClick}>
              Login
          </a>
          </li>
        </div>

        <div>
          {this.state.isOpen ?
            <LoginModal
              onClose={this.closePopup}
            /> : null}
        </div>
      </div>
    )
  }

  //   render() {
  //     const { isAuthenticated, user } = this.props.auth;
  //     const loginRegLink = (
  //       <ul className="navbar-nav">
  //         <li className="nav-item">
  //           <Link to="/login" className="nav-link">
  //             Login
  //           </Link>
  //         </li>
  //         <li className="nav-item">
  //           <Link to="/register" className="nav-link">
  //             Register
  //           </Link>
  //         </li>
  //       </ul>
  //     )

  //     const userLink = (
  //       <ul className="navbar-nav">
  //         <li className="nav-item">
  //           <Link to="/profile" className="nav-link">
  //             User
  //           </Link>
  //         </li>
  //         {/* <li className="nav-item">
  //           <a href="" onClick={this.logOut} className="nav-link">
  //             Logout
  //           </a>
  //         </li> */}
  //       </ul>
  //     )

  //     return (
  //       <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">

  //         <div
  //           className="collapse navbar-collapse justify-content-md-center"
  //           id="navbarsExample10"
  //         >
  //           <ul className="navbar-nav">
  //             <li className="nav-item">
  //               <Link to="/" className="nav-link">
  //                 Home
  //               </Link>
  //             </li>
  //           </ul>
  //           {isAuthenticated ? userLink : loginRegLink}
  //         </div>
  //       </nav>
  //     )
  //   }
}


MainNavbar.propTypes = {
  auth: PropTypes.object.isRequired,
  loadUser: PropTypes.func.isRequired,
}

const mapStateToProps = ({ auth }) => {
  return {
    auth: auth,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadUser: () => dispatch(loadUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainNavbar);

