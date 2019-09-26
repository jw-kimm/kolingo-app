import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom'
import { register } from '../../store/actions/authAction';
import { clearErrors } from '../../store/actions/errorAction';

import styled from 'styled-components'

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
  justify-content: center;
  align-items: center; 
`
const ModalContent = styled.div`
  top: 50%;
  width: 500px; 
  height: 320px;
  background-color: white;
  border-radius: 4px;
  padding: 20px;
  position: fixed;
  transform: translate(-50%,-50%);
  left: 50%;
  text-align: center
`

const ModalInput = styled.div`
  background: #f0f0f0;
  border: 2px solid #e5e5e5;
  border-radius: 10px;
  padding: 10px;
  line-height: 2px;
  margin-bottom: 12px;
`

const Button = styled.button`
  border-color: transparent;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  border-width: 0 0 4px;
  padding: 12px 16px;
  background-color: #1899d6;
  color: #fff;
  cursor: pointer;
  border-radius: 16px;
  margin-top: 12px;
`

const Label = styled.label`
  width: 100%;
  text-align: left;
  margin-left: 10px
`

class RegisterModal extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    msg: null
  };

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      if (error.id === 'REGISTER_FAIL') {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = this.state;
    const newUser = {
      username,
      email,
      password
    };
    this.props.register(newUser);
  };

  render() {
    const { isAuthenticated } = this.props;

    if (isAuthenticated) {
      this.props.onClose()
    }
    if (isAuthenticated)
      return <Redirect to="/lessons" />

    return (
      <ModalContainer style={{ display: "block" }}>
        <ModalContent>
          <button className="popup-close" onClick={this.props.onClose}>✖</button>
          <h3
            style={{ padding: 10, borderBottom: "1px solid #dee2e6", textAlign: "left", margin: 0 }}>
            Register
          </h3>
          <form onSubmit={this.handleSubmit}>
            <ModalInput>
              <Label htmlFor="username" >
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.handleInputChange}
                  style={{ width: "100%" }}
                />
              </Label>
            </ModalInput>
            <ModalInput>
              <Label htmlFor="email">
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
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

            <Button type="submit">
              Register
          </Button>
          </form>


        </ModalContent>
      </ModalContainer >
    )
  }
}

RegisterModal.propTypes = {
  isAuthenticated: PropTypes.bool,
  error: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(
  mapStateToProps, { register, clearErrors })(RegisterModal);