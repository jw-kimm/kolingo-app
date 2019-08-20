import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import styled from 'styled-components'

// import { Link } from 'react-router-dom';
import RegisterModal from '../auth/RegisterModal'
// import Logout from '../auth/Logout'
import LoginModal from '../auth/LoginModal'
import { loadUser } from "../../store/actions/authAction";

const NavBar = styled.div`
  background-color: #235390;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  font-family: Varela Round;
  color: white;
  `

const Button = styled.div`
  background-color: white;
  color: #235390;
  font-size: 15px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  border-radius: 25px;
  font-family: 'Varela Round', sans-serif;
  border-width: 0 0 4px;
  margin-right: 22px;
`

// :hover {
//   color: yellow;
// }


class MainNavbar extends Component {
  state = {
    showLoginModal: false,
    showReigsterModal: false,
  }

  componentDidMout() {
    this.props.loadUser();
  }

  showLoginModal = (e) => {
    e.preventDefault();
    this.setState({
      showLoginModal: true,
      showReigsterModal: false,
    })
  }

  showReigsterModal = (e) => {
    e.preventDefault();
    this.setState({
      showLoginModal: false,
      showReigsterModal: true,
    })
  }

  closeModal = () => {
    this.setState({
      showLoginModal: false,
      showReigsterModal: false,
    });
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const guestLink = (
      <>
        <Button>
          <a href="/" onClick={this.showLoginModal} style={{ fontSize: 15 }}>
            Login
            </a>
        </Button>
        <Button >
          <a href="/" onClick={this.showReigsterModal} style={{ fontSize: 15 }}>
            Register
            </a>
        </Button>
      </>
    )
    const authLink = (
      //avatar to contain this info 
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/lessons" className="nav-link">
            <strong> {user ? `Welcome ${user.username}` : " "}</strong>
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link">
            Logout
        </a>
        </li>
      </ul>
    )

    let login
    if (this.state.showLoginModal) {
      login = <LoginModal onClose={this.closeModal} />
    }

    let signup
    if (this.state.showReigsterModal) {
      signup = <RegisterModal onClose={this.closeModal} />
    }

    return (
      <>
        <NavBar >
          <h1 style={{ fontSize: 35, marginLeft: 20, flexGrow: 1 }}> kolingo </h1>
          {isAuthenticated ? authLink : guestLink}
        </NavBar>

        <div>
          {login}
          {signup}
        </div>
      </>
    )
  }
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

