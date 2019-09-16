import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import LoginModal from '../auth/LoginModal'
import RegisterModal from '../auth/RegisterModal'


// import { Redirect } from 'react-router-dom'
// import { Link } from 'react-router-dom';
// import Logout from '../auth/Logout'
// import { loadUser } from "../../store/actions/authAction";

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

class MainNavbar extends Component {
  state = {
    showLoginModal: false,
    showRegisterModal: false,
  }

  showLoginModal = (e) => {
    e.preventDefault();
    this.setState({
      showLoginModal: true,
      showRegisterModal: false,
    })
  }

  showRegisterModal = (e) => {
    e.preventDefault();
    this.setState({
      showLoginModal: false,
      showRegisterModal: true,
    })
  }

  closeModal = () => {
    this.setState({
      showLoginModal: false,
      showRegisterModal: false,
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
          <a href="/" onClick={this.showRegisterModal} style={{ fontSize: 15 }}>
            Register
            </a>
        </Button>
      </>
    )
    const authLink = (
      //avatar to contain this info 
      <>
        <Button>
          <strong> {user ? `Welcome ${user.username}` : " "}</strong>
        </Button>
        <Button>
          <a href="/" >
            Logout
        </a>
        </Button>
      </>
    )

    let login
    if (this.state.showLoginModal) {
      login = <LoginModal onClose={this.closeModal} />
    }

    let signup
    if (this.state.showRegisterModal) {
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
}

const mapStateToProps = ({ auth }) => {
  return {
    auth: auth,
  };
};


export default connect(mapStateToProps, null)(MainNavbar);

