import React, { Component } from 'react'
// import {connect} from 'react-redux'
import styled from 'styled-components'


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

// const timeoutLength = 300;

class Navbar extends Component {
  state = {
    showMenu: false,
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

  render() {
    // const { user } = this.props.auth;
    return (
      <>
        <NavBar>
          <li onClick={this.toggleIcon} value="learn" >
            <a href="/lessons" activeClassName="active">
              <img style={{ maxHeight: 32 }}
                alt=""
                src={this.state.isClicked ? '/learncolor.png' : '/learnblack.png'} />
              LEARN</a>
          </li>

          <li onClick={this.toggleIcon} value="dictionary">
            <a href="/dictionary" activeClassName="active">
              <img
                style={{ maxHeight: 32 }}
                alt=""
                src={this.state.isClicked ? '/dictionarycolor.png' : '/dictionaryblack.png'} /> DICTIONARY</a></li>

          <li onClick={this.toggleIcon} value="discuss" >
            <a href="/discuss" activeClassName="active">
              <img
                alt=""
                style={{ maxHeight: 32 }}
                src={this.state.isClicked ? '/discusscolor.png' : '/discussblack.png'} />
              DISCUSS</a></li>
          {/* <li>  <strong> {user ? `Welcome ${user.username}` : " "}</strong> </li> */}
          <li>
            <Button
              onClick={this.showMenu} style={{ outline: "none" }}>
              <img style={{ maxHeight: 32 }} src="/avatar.png" alt="" />
            </Button>
          </li>
        </NavBar>
        <Menu>
          {
            this.state.showMenu ? (
              <DropDown>
                <ul style={{ fontSize: 30, color: "#b1acac69" }}>Account</ul>
                <Options onClick={this.handleClose}><a href="/profile">Your Profile </a></Options>
                <Options onClick={this.handleClose}><a href="/setting"> Settings </a></Options>
                <Options onClick={this.handleClose}><a href="/"> Logout </a></Options>
              </DropDown>
            ) :
              (
                null
              )}
        </Menu>
      </>
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