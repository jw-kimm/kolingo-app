import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../store/actions/authAction';
import { clearErrors } from '../../store/actions/errorAction';

class LoginModal extends Component {

  state = {
    email: '',
    password: '',
    errors: {}
  }

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
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

    console.log(user);
    // login(user).then(res => {
    //   if (res) {
    //     this.props.history.push(`/profile`)
    //   }
    // })
    this.props.login(user);
  }


  render() {
    return (
      <div className="modal-container">
        <div className="modal-content">
          <div className="popup">
            <button className="popup-close" onClick={this.props.onClose}>✖</button>
            <form onSubmit={this.handleSubmit}>
              <h3 className="modal-header">Login</h3>
              <div className="modal-input">
                <label htmlFor="email">
                  <input
                    type="text"
                    className="login-input"
                    name="email"
                    placeholder="Enter email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  />
                </label>
                {/* </div>
              <div className="modal-input"> */}
                <label htmlFor="password">
                  <input
                    type="password"
                    className="login-input"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                  />
                </label>
              </div>
              <button
                type="submit"
                className="login-btn"
              >
                Log in
              </button>
            </form>
          </div>
        </div>
      </div>
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
