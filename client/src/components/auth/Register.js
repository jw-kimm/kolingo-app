import React, { Component } from 'react';
import RegisterModal from './RegisterModal'

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
      <div className="outerContainer">
        <div className="inner-container">
          <h2 style={{ color: "#4b4b4b", margin: " 0 24px 24px", textAlign: "center", lineHeight: "40px", fontSize: "32px" }}>
            Want us to help you keep your daily goal?
          </h2>
          <ul className="sub-btn">
            <li className="nav-item">
              <a href="/" onClick={this.handleClick}>
                REGISTER
              </a>
            </li>
            <li className="nav-item">
              <a href="/lessons" style={{
                marginTop: "24px", textAlign: "center", width: "100%", background: "none", color: "", borderWidth: "2px 2px 4px", borderColor: "transparent",
                padding: "12px 16px", cursor: "pointer"
              }}>
                NOT NOW </a>
            </li>
          </ul>
        </div>
        <div>
          {this.state.isOpen ?
            <RegisterModal
              onClose={this.closePopup}
            /> : null}
        </div>
      </div>
    );
  }
}

export default Register;