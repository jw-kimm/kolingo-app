import React, { Component } from 'react';
import RegisterModal from './RegisterModal'

import styled from 'styled-components'

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  margin: 0;
`

const InnerContainer = styled.div`
  max-width: 75%;
  padding: 0 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Header = styled.h2`
  color: rgb(75, 75, 75);
  margin: 0px 24px 24px;
  text-align: center;
  line-height: 40px;
  font-size: 32px;
  width: 630px;
`
const Navitem = styled.li`
  font-size: 24px;
  cursor: pointer;
  border-radius: 12px;
  font-family: 'Varela Round',sans-serif;
  margin-bottom: 24px;
  text-align: center;
  width: 400px;
  border-width: 2px 2px 4px;
  border-color: #e5e5e5;
  border-style: solid;
  padding: 12px 16px;
  color: #afafaf;
`

class Register extends Component {
  state = {
    isOpen: false
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
    return (
      <OuterContainer>
        <InnerContainer>
          <Header>
            Want us to help you keep your daily goal?
            <p style={{ color: "grey", fontSize: 16 }}> If you don't log in, your score will not be saved.</p>
          </Header>
          <Navitem>
            <a href="/" onClick={this.handleClick}>
              REGISTER
              </a>
          </Navitem>
          <Navitem>
            <a href="/lessons" style={{
              marginTop: "24px", textAlign: "center", width: "100%", background: "none", color: "", borderWidth: "2px 2px 4px", borderColor: "transparent",
              padding: "12px 16px", cursor: "pointer"
            }}>
              NOT NOW </a>
          </Navitem>
        </InnerContainer>
        <div>
          {this.state.isOpen ?
            <RegisterModal
              onClose={this.closePopup}
            /> : null}
        </div>
      </OuterContainer>
    );
  }
}

export default Register;