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
  // display: block;
  // padding: 8px 25px;
  // color: #333;
  // text-decoration: none;
  //   :hover{
  //     color: #fff;
  //     background: #939393;
  //   }
`

const DropDown = styled.div`
  width: 200px;
  float: right;
  // min-width: 100%; /* Set width of the dropdown */
  // background: #f2f2f2;
  // display: none;
  // position: absolute;
  // z-index: 999;
  // left: 0;
`
const Menu = styled.div`

`

// const timeoutLength = 300;

class Navbar extends Component {
  state = {
    // isClicked: false,
    // anchorEl: null,
    mouseOverButton: false,
    mouseOverMenu: false,
    showMenu: false,
  }

  // toggleIcon = () => {
  //   this.setState({
  //     isClicked: !this.state.isClicked
  //   })
  // }

  // handleClick = event => {
  //   this.setState({
  //     open: true,
  //     anchorEl: event.currentTarget
  //   });
  // };

  // handleClose = () => {
  //   this.setState({
  //     mouseOverButton: false,
  //     mouseOverMenu: false
  //   });
  // };

  // enterButton = () => {
  //   this.setState({
  //     mouseOverButton: true
  //   });
  // }

  // leaveButton = () => {
  //   setTimeout(() => {
  //     this.setState({
  //       mouseOverButton: false
  //     });
  //   }, timeoutLength);
  // }

  // enterMenu = () => {
  //   this.setState({
  //     mouseOverMenu: true
  //   });
  // }

  // leaveMenu = () => {
  //   setTimeout(() => {
  //     this.setState({
  //       mouseOverMenu: false
  //     });
  //   }, timeoutLength);
  // }

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
    // let learn = this.state.isClicked ? '/learncolor.png' : '/learnblack.png'
    // let dictionary = this.state.isClicked ? '/dictionarycolor.png' : '/dictionaryblack.png'
    // let discuss = this.state.isClicked ? '/discusscolor.png' : '/discussblack.png'
    // const open = this.state.mouseOverButton || this.state.mouseOverMenu;
    // const { user } = this.props.auth;
    return (
      <>
        <NavBar>
          <li onClick={this.toggleIcon} value="learn" >
            <a href="/lessons"  >
              <img style={{ maxHeight: 32 }}
                alt=""
                src={this.state.isClicked ? '/learncolor.png' : '/learnblack.png'} />
              LEARN</a>
          </li>

          <li onClick={this.toggleIcon} value="dictionary">
            <a href="/dictionary">
              <img
                style={{ maxHeight: 32 }}
                alt=""
                src={this.state.isClicked ? '/dictionarycolor.png' : '/dictionaryblack.png'} /> DICTIONARY</a></li>

          <li onClick={this.toggleIcon} value="discuss" >
            <a href="/lessons">
              <img
                alt=""
                style={{ maxHeight: 32 }}
                src={this.state.isClicked ? '/discusscolor.png' : '/discussblack.png'} />
              DISCUSS</a></li>
          {/* <li>  <strong> {user ? `Welcome ${user.username}` : " "}</strong> </li> */}
          <li>
            <Button
              // onClick={this.handleClick}
              // onMouseEnter={this.enterButton}
              // onMouseLeave={this.leaveButton}
              onClick={this.showMenu}>
              <img style={{ maxHeight: 32 }} src="/avatar.png" alt="" />
            </Button>
          </li>
        </NavBar>
        <Menu>
          {
            // this.state.open ? (
            this.state.showMenu ? (
              <DropDown
                // anchorEl={this.state.anchorEl}
                // open={open}
                // onClose={this.handleClose}
                MenuListProps={{
                  onMouseEnter: this.enterMenu,
                  onMouseLeave: this.leaveMenu,
                }}
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <ul style={{ fontSize: 19 }}>Account</ul>
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