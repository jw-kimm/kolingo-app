import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom'
import { register } from '../../store/actions/authAction';
import { clearErrors } from '../../store/actions/errorAction';

import styled from 'styled-components'

const ModalContainer = styled.div`
  display: flex;
  align-items: center;
`
const ModalContent = styled.div`
  z-index: 1040;
  top: 50%;
  width: 500px; 
  height: 300px;
  background-color: white;
  border-radius: 4px;
  padding: 20px;
  position: fixed;
  transform: translate(-50%,-50%);
  left: 50%;
`

const Input = styled.input`
  // width: 90%;
  line-height: 24px;
  // text-align: left;
  // display: table-cell;
  // padding: 8px 0 8px 20px;
  // background: transparent!important;
  // border: 0!important;
  // border-top: 2px solid #e5e5e5;
`

const Form = styled.form`
  display: table-cell;
  width: 450px;
`

const ModalInput = styled.div`
  background: #f0f0f0;
  border: 2px solid #e5e5e5;
  border-radius: 10px;
  height: 24px;
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
      // Check for register error
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
    // Create user object
    const newUser = {
      username,
      email,
      password
    };
    console.log(newUser);
    // Attempt to register
    this.props.register(newUser);
  };

  render() {
    if (this.props.isAuthenticated)
      return <Redirect to="/lessons" />

    return (
      <>
        <ModalContainer>
          <ModalContent>
            <button className="popup-close" onClick={this.props.onClose}>✖</button>
            <Form onSubmit={this.handleSubmit}>
              <h3 className="modal-header">Register</h3>

              <ModalInput>
                <label htmlFor="username">
                  <Input
                    type="text"
                    name="username"
                    placeholder="Username"
                    onfocus="if(this.value==this.defaultValue)this.value='' "
                    onblur="if(this.value=='')this.value=this.defaultValue;"
                    value={this.state.username}
                    onChange={this.handleInputChange}
                  />
                </label>
              </ModalInput>
              <ModalInput>
                <label htmlFor="email">
                  <Input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  />
                </label>
              </ModalInput>

              <ModalInput>
                <label htmlFor="password">
                  <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                  />
                </label>
              </ModalInput>

              <button
                type="submit"
                className="auth-btn"
              >
                Register
              </button>
            </Form>
          </ModalContent>
        </ModalContainer>
      </>
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