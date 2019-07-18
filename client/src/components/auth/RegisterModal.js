import React, { Component } from 'react';
// import { button, Modal, ModalHeader, ModalBody, Form label, input, NavLink, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { register } from '../../store/actions/authAction';
import { clearErrors } from '../../store/actions/errorAction';


class RegisterModal extends Component {
  state = {
    modal: false,
    firstName:'',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    msg: null
  };


  componentDidUpdate(prevProps) {
  const { error, isAuthenticated } = this.props;
  if (error !== prevProps.error) {
    // Check for register error
    if (error.id === 'REGISTER_FAIL') {
      this.setState({ msg: error.msg.msg });
    } else {
      this.setState({ msg: null });
    }
  }

  // If authenticated, close modal
  if (this.state.modal) {
    if (isAuthenticated) {
      this.toggle();
    }
  }
  }

  toggle = () => {
  // Clear errors
  this.props.clearErrors();
  this.setState({
    modal: !this.state.modal
  });
  };

  onChange = e => {
  this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
  e.preventDefault();

  const { firstName, lastName, userName, email, password } = this.state;

  // Create user object
  const newUser = {
    firstName,
    lastName,
    userName,
    email,
    password
  };

  // Attempt to register
  this.props.register(newUser);
  };

  render() {
  return (
    <div>
      <div className="bg-modal" onClick={this.toggle} href='#'>
        Register
      </div>

        {/* <ModalHeader toggle={this.toggle}>Register</ModalHeader> */}

          {/* {this.state.msg ? (
            <Alert color='danger'>{this.state.msg}</Alert>
          ) : null} */}
          <form onSubmit={this.onSubmit} className="modal-content">
          
            <label for='firstName'>First Name</label>
              <input
                type='text'
                name='firstName'
                id='firstName'
                placeholder='First Name'
                className='login-input'
                onChange={this.onChange}
              />
              <label for='lastName'>Last Name</label>
              <input
                type='text'
                name='lastName'
                id='lastName'
                placeholder='Last Name'
                className='login-input'
                onChange={this.onChange}
              />
              <label for='userName'>Username</label>
              <input
                type='text'
                name='userName'
                id='userName'
                placeholder='Username'
                className='login-input'
                onChange={this.onChange}
              />

              <label for='email'>Email</label>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Email'
                className='login-input'
                onChange={this.onChange}
              />

              <label for='password'>Password</label>
              <input
                type='password'
                name='password'
                id='password'
                placeholder='Password'
                className='login-input'
                onChange={this.onChange}
              />
              <button color='dark' style={{ marginTop: '2rem' }} block >
                Register
              </button>
            
          </form>
    </div>
  );
  }
}

//   render() {
//     return (
//       <div className="inner-container">
//         <div className="header">
//           Register
//         </div>
//         <div className="box">
//         <div className="input-group">
//             <label htmlFor="username">First Name</label>
//             <input
//               type="text"
//               name="firstname"
//               className="login-input"
//               placeholder="First Name"/>
//           </div>
//           <div className="input-group">
//             <label htmlFor="username">Last Name</label>
//             <input
//               type="text"
//               name="lastName"
//               className="login-input"
//               placeholder="Last Name"/>
//           </div>
//           <div className="input-group">
//             <label htmlFor="username">Username</label>
//             <input
//               type="text"
//               name="username"
//               className="login-input"
//               placeholder="Username"/>
//           </div>

//           <div className="input-group">
//             <label htmlFor="email">Email</label>
//             <input type="text" name="email" className="login-input" placeholder="Email"/>
//           </div>

//           <div className="input-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               name="password"
//               className="login-input"
//               placeholder="Password"/>
//           </div>
//           <button
//             type="button"
//             className="login-btn"
//             onClick={this.onSubmit }>Register</button>
//         </div>
//       </div>
//     );
//   }
// }

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

export default connect( mapStateToProps,{ register, clearErrors })(RegisterModal);