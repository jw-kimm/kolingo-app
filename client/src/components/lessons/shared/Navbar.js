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
`

const Button = styled.button`
  padding: 8px 12px;
  display: inline-block
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

`
const Menu = styled.div`
  display: block;
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
    showModal: false,
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


  handleClick = (e) => {
    e.preventDefault();
    this.setState(prevState => {
      return {
        showModal: !prevState.showModal
      }
    })
  }

  closeModal = () => {
    this.setState({
      showModal: false
    });
  }


  render() {
    const { isAuthenticated } = this.props.auth;

    let authUser
    let guestUser

    if (isAuthenticated) {
      authUser =
        <DropDown>
          <ul style={{ fontSize: 30, color: "#b1acac69" }}>Account</ul>
          <Options><a href="/profile">Your Profile </a></Options>
          <Options><a href="/setting"> Settings </a></Options>
          <Options> <Logout /></Options>
        </DropDown>
    } else {
      guestUser =
        <DropDown>
          <ul style={{ fontSize: 30, color: "#b1acac69" }}>Account</ul>
          <Options><a href="/" onClick={this.handleClick}>Create A Profile</a></Options>
          <Options> <a href="/" onClick={this.handleClick}>Sign In</a></Options>
        </DropDown>
    }

    let login
    if (this.state.showModal) {
      login = <LoginModal onClose={this.closeModal} />
    }

    let signup
    if (this.state.showModal) {
      signup = <RegisterModal onClose={this.closeModal} />
    }

    return (
      <>
        <NavBar>
          <li>
            <Img style={{ maxHeight: 32 }}
              alt=""
              src='/learncolor.png' />
            <a href="/lessons">
              LEARN</a>
          </li>
          <li>
            <a href="/dictionary" >
              <Img
                style={{ maxHeight: 32 }}
                alt=""
                src='/dictionarycolor.png' /> DICTIONARY</a></li>
          <li >
            <a href="/discuss">
              <Img
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
            this.state.showMenu && isAuthenticated ? (
              authUser
            ) :
              (
                guestUser
              )}
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

// const mapState = state => {
//   return {
//     isAuthenticated: state.auth.isAuthenticated,
//   }
// }

// // const mapDispatch = dispatch => {
// //   return {
// //     handleClick() {
// //       dispatch(logout())
// //     }
// //   }
// // }

// export default Navbar