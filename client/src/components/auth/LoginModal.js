import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom'
import { login } from '../../store/actions/authAction';
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
  text-align: center;
  padding: 20px;
  position: fixed;
  transform: translate(-50%,-50%);
  left: 50%;
`

const Input = styled.input`
  width: 90%;
  line-height: 24px;
  text-align: left;
  display: table-cell;
  padding: 8px 0 8px 20px;
  background: transparent!important;
  border: 0!important;
  border-top: 2px solid #e5e5e5;
`


class LoginModal extends Component {
  state = {
    email: '',
    password: '',
    errors: {}
  }

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      // Check for register error
      if (error.id === 'LOGIN_FAIL') {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
  }

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


  render() {
    if (this.props.isAuthenticated)
      return <Redirect to="/lessons" />

    return (
      <ModalContainer>
        <ModalContent>
          <button className="popup-close" onClick={this.props.onClose}>✖</button>
          <form onSubmit={this.handleSubmit}>
            <h3 className="modal-header">Login</h3>

            <div className="modal-input">
              <label htmlFor="email">
                <Input
                  type="text"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
              </label>
            </div>
            <div className="modal-input">
              <label htmlFor="password">
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                />
              </label>
            </div>
            <button
              type="submit"
              className="auth-btn"
            >
              Log in
              </button>
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
