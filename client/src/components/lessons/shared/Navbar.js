import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Logout from '../../auth/Logout'
import LoginModal from '../../auth/LoginModal'
import RegisterModal from '../../auth/RegisterModal'


const NavBar = styled.div`
  background-color: white;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  font-family: Varela Round;
  color: #afafaf;
  font-weight: 700
  border-bottom: 3px solid #e5e5e5;
  cursor: pointer
`

const Button = styled.button`
  padding: 8px 12px;
  display: inline-block;
  cursor: pointer
`
const Options = styled.li`
  border-bottom: 1px solid #e5e5e5;
  padding: 15px 10px 10 0;
  margin-top: 10px;
  font-size: 18px;
  color: grey;
`

const DropDown = styled.div`
  width: 300px;
  float: right;
  border: 2px solid #e0d8d887;
  padding: 10px;
  z-index: 100
`
const Menu = styled.div`
  display: block;
  cursor: pointer
`

const Img = styled.img`
  filter: opacity(30%) grayscale(1);
  :hover {
    -webkit-filter: grayscale(0);
    filter: none;
  }
`

// const timeoutLength = 300;

class Navbar extends Component {
  state = {
    showMenu: false,
    showLoginModal: false,
    showRegisterModal: false,
  }

  showMenu = (event) => {
    event.preventDefault();
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu = () => {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
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
      showRegisterModal: false
    });
  }


  render() {
    const { isAuthenticated } = this.props.auth;

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
        <NavBar>
          <li className="navLinks">
            <img style={{ maxHeight: 32 }}
              alt=""
              src='/learncolor.png' />
            <a href="/lessons">
              LEARN</a>
          </li>
          {/* <li>
            <a href="/dictionary" >
              <Img
                style={{ maxHeight: 32 }}
                alt=""
                src='/dictionarycolor.png' /> DICTIONARY</a></li> */}
          <li className="navLinks" >
            <a href="/discuss">
              <img
                alt=""
                style={{ maxHeight: 32 }}
                src='/discusscolor.png' />
              DISCUSS</a></li>
          <li>
            <Button
              onClick={this.showMenu} style={{ outline: "none" }}>
              <img style={{ maxHeight: 32 }} src="/avatar.png" alt="" />
            </Button>
          </li>
        </NavBar>
        <Menu>
          {
            isAuthenticated ?
              (
                <DropDown style={this.state.showMenu ? { display: "block" } : { display: "none" }}>
                  <ul style={{ fontSize: 30, color: "#b1acac69" }}>Account</ul>
                  <Options><a href="/profile">Your Profile </a></Options>
                  <Options> <Logout /></Options>
                </DropDown>
              ) : (
                <DropDown style={this.state.showMenu ? { display: "block" } : { display: "none" }}>
                  <ul style={{ fontSize: 30, color: "#b1acac69" }}>Account</ul>
                  <Options><a href="/" onClick={this.showRegisterModal}>Create A Profile</a></Options>
                  <Options> <a href="/" onClick={this.showLoginModal}>Sign In</a></Options>
                </DropDown>
              )
          }
        </Menu>

        <div>
          {signup}
          {login}
        </div>

      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    isAuthenticated: state.auth.isAuthenticated,
  }
}

export default connect(mapStateToProps, null)(Navbar);
