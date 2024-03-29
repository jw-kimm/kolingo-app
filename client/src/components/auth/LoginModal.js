import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../store/actions/authAction';
import { clearErrors } from '../../store/actions/errorAction';
import { Redirect } from 'react-router-dom'

import styled from 'styled-components'




class LoginModal extends Component {
  state = {
    modal: false,
    email: '',
    password: '',
    errors: {},
    msg: null
  }

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      if (error.id === 'LOGIN_FAIL') {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
    if (this.state.modal) {
      if (isAuthenticated) {
        this.toggle();
      }
    }
  }

  toggle = () => {
    this.props.clearErrors();
    this.setState({
      modal: !this.state.modal
    });
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
    }
    this.props.login(user);
  }

  logInDemoUser = () => {
    const user = {
      email: "demo@email.com",
      password: "demouser"
    }
    this.props.login(user);
  }

  render() {
    const { isAuthenticated } = this.props;

    if (isAuthenticated) {
      if (window.location.pathname === '/') {
        return < Redirect to="/lessons" />
      }
      this.props.onClose()
      window.location.reload();
      return < Redirect to="/lessons" />
    }

    return (
      <ModalContainer style={{ display: "block" }} toggle={this.toggle}>
        <ModalContent>
          <button className="popup-close" onClick={this.props.onClose}>✖</button>
          <h3
            style={{ padding: 10, borderBottom: "1px solid #dee2e6", textAlign: "left", margin: 0 }}>
            Login
          </h3>
          {this.state.msg ? (
            <Alert >{this.state.msg}</Alert>
          ) : null}
          <form onSubmit={this.handleSubmit}>
            <ModalInput>
              <Label htmlFor="email">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
              </Label>
            </ModalInput>
            <ModalInput>
              <Label htmlFor="password">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                />
              </Label>
            </ModalInput>

            <Button type="submit" style={{ outline: "none" }}>
              LOG IN
          </Button>
            <Button type="submit" style={{ outline: "none" }} onClick={() => this.logInDemoUser()}>
              LOG IN AS DEMO USER
          </Button>
          </form>

        </ModalContent>
      </ModalContainer>
    )
  }
}

LoginModal.propTypes = {
  isAuthenticated: PropTypes.bool,
  error: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(mapStateToProps, { login, clearErrors })(LoginModal);


const ModalContainer = styled.div`
  display: none;
  position: fixed; 
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%;
  height: 100%; 
  overflow: auto; 
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4); 
`
const ModalContent = styled.div`
  top: 50%;
  width: 500px; 
  height: auto
  background-color: white;
  border-radius: 4px;
  padding: 20px;
  position: fixed;
  transform: translate(-50%,-50%);
  left: 50%;
  text-align: center;
`

const ModalInput = styled.div`
  background: #f0f0f0;
  border: 2px solid #e5e5e5;
  border-radius: 10px;
  padding: 12px;
  line-height: 6px;
  margin-bottom: 12px;
`
const Button = styled.button`
  border-color: transparent;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  border-width: 0 0 4px;
  padding: 16px 20px;
  background-color: #1899d6;
  color: #fff;
  cursor: pointer;
  border-radius: 16px;
  margin-top: 20px;
  margin-right: 12px;
  font-size: 12px;
`

const Label = styled.label`
  width: 100%;
  text-align: left;
  margin-left: 10px
`

const Alert = styled.p`
  background-color: #f30404a8;
  color: white;
  font-size: 20px;
  padding: 6px 131px;
`