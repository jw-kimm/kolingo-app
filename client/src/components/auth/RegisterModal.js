// import React, { Component } from 'react';
// // import { button, Modal, ModalHeader, ModalBody, Form label, input, NavLink, Alert } from 'reactstrap';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types';
// import { register } from '../../store/actions/authAction';
// import { clearErrors } from '../../store/actions/errorAction';


// class RegisterModal extends Component {
//   state = {
//     modal: false,
//     firstName:'',
//     lastName: '',
//     userName: '',
//     email: '',
//     password: '',
//     msg: null
//   };


//   componentDidUpdate(prevProps) {
//   const { error, isAuthenticated } = this.props;
//   if (error !== prevProps.error) {
//     // Check for register error
//     if (error.id === 'REGISTER_FAIL') {
//       this.setState({ msg: error.msg.msg });
//     } else {
//       this.setState({ msg: null });
//     }
//   }

//   // If authenticated, close modal
//   if (this.state.modal) {
//     if (isAuthenticated) {
//       this.toggle();
//     }
//   }
//   }

//   toggle = () => {
//   // Clear errors
//   this.props.clearErrors();
//   this.setState({
//     modal: !this.state.modal
//   });
//   };

//   onChange = e => {
//   this.setState({ [e.target.name]: e.target.value });
//   };

//   onSubmit = e => {
//   e.preventDefault();

//   const { firstName, lastName, userName, email, password } = this.state;

//   // Create user object
//   const newUser = {
//     firstName,
//     lastName,
//     userName,
//     email,
//     password
//   };

//   // Attempt to register
//   // this.props.register(newUser);
//   register(newUser).then(res => {
//     this.props.history.push(`/login`)
//   })
//   };

//   render() {
//   // return (
//   //   <div>
//   //     <div className="bg-modal" onClick={this.toggle} href='#'>
//   //       Register
//   //     </div>

//   //       {/* <ModalHeader toggle={this.toggle}>Register</ModalHeader> */}

//   //         {/* {this.state.msg ? (
//   //           <Alert color='danger'>{this.state.msg}</Alert>
//   //         ) : null} */}
//   //         <form onSubmit={this.onSubmit} className="modal-content">

//   //           <label for='firstName'>First Name</label>
//   //             <input
//   //               type='text'
//   //               name='firstName'
//   //               id='firstName'
//   //               placeholder='First Name'
//   //               className='login-input'
//   //               onChange={this.onChange}
//   //             />
//   //             <label for='lastName'>Last Name</label>
//   //             <input
//   //               type='text'
//   //               name='lastName'
//   //               id='lastName'
//   //               placeholder='Last Name'
//   //               className='login-input'
//   //               onChange={this.onChange}
//   //             />
//   //             <label for='userName'>Username</label>
//   //             <input
//   //               type='text'
//   //               name='userName'
//   //               id='userName'
//   //               placeholder='Username'
//   //               className='login-input'
//   //               onChange={this.onChange}
//   //             />

//   //             <label for='email'>Email</label>
//   //             <input
//   //               type='email'
//   //               name='email'
//   //               id='email'
//   //               placeholder='Email'
//   //               className='login-input'
//   //               onChange={this.onChange}
//   //             />

//   //             <label for='password'>Password</label>
//   //             <input
//   //               type='password'
//   //               name='password'
//   //               id='password'
//   //               placeholder='Password'
//   //               className='login-input'
//   //               onChange={this.onChange}
//   //             />
//   //             <button color='dark' style={{ marginTop: '2rem' }} block >
//   //               Register
//   //             </button>

//   //         </form>
//   //   </div>
//   // );
//   return (
//     <div className="modal-container">
//       <div className="modal-content">
//         <div className="col-md-6 mt-5 mx-auto">
//           <form noValidate onSubmit={this.onSubmit}>
//             <h1 className="modal-header">Register</h1>
//             <div className="modal-input">
//               <label for="name">First name</label>
//               <input
//                 type="text"
//                 className="register-input"
//                 name="first_name"
//                 placeholder="Enter your first name"
//                 value={this.state.first_name}
//                 onChange={this.onChange}
//               />
//             </div>
//             <div className="modal-input">
//               <label for="name">Last name</label>
//               <input
//                 type="text"
//                 className="register-input"
//                 name="last_name"
//                 placeholder="Enter your lastname name"
//                 value={this.state.last_name}
//                 onChange={this.onChange}
//               />
//             </div>
//             <div className="modal-input">
//               <label for="email">Email address</label>
//               <input
//                 type="email"
//                 className="register-input"
//                 name="email"
//                 placeholder="Enter email"
//                 value={this.state.email}
//                 onChange={this.onChange}
//               />
//             </div>
//             <div className="modal-input">
//               <label for="password">Password</label>
//               <input
//                 type="password"
//                 className="register-input"
//                 name="password"
//                 placeholder="Password"
//                 value={this.state.password}
//                 onChange={this.onChange}
//               />
//             </div>
//             <button
//               type="submit"
//               className="btn btn-lg btn-primary btn-block"
//             >
//               Register!
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
//   }
// }

// //   render() {
// //     return (
// //       <div className="inner-container">
// //         <div className="header">
// //           Register
// //         </div>
// //         <div className="box">
// //         <div className="input-group">
// //             <label for="username">First Name</label>
// //             <input
// //               type="text"
// //               name="firstname"
// //               className="login-input"
// //               placeholder="First Name"/>
// //           </div>
// //           <div className="input-group">
// //             <label for="username">Last Name</label>
// //             <input
// //               type="text"
// //               name="lastName"
// //               className="login-input"
// //               placeholder="Last Name"/>
// //           </div>
// //           <div className="input-group">
// //             <label for="username">Username</label>
// //             <input
// //               type="text"
// //               name="username"
// //               className="login-input"
// //               placeholder="Username"/>
// //           </div>

// //           <div className="input-group">
// //             <label for="email">Email</label>
// //             <input type="text" name="email" className="login-input" placeholder="Email"/>
// //           </div>

// //           <div className="input-group">
// //             <label for="password">Password</label>
// //             <input
// //               type="password"
// //               name="password"
// //               className="login-input"
// //               placeholder="Password"/>
// //           </div>
// //           <button
// //             type="button"
// //             className="login-btn"
// //             onClick={this.onSubmit }>Register</button>
// //         </div>
// //       </div>
// //     );
// //   }
// // }

// RegisterModal.propTypes = {
//   isAuthenticated: PropTypes.bool,
//   error: PropTypes.object.isRequired,
//   register: PropTypes.func.isRequired,
//   clearErrors: PropTypes.func.isRequired
// };

// const mapStateToProps = state => ({
//   isAuthenticated: state.auth.isAuthenticated,
//   error: state.error
// });

// export default connect( mapStateToProps,{ register, clearErrors })(RegisterModal);


import React, { Component } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../store/actions/authAction';
import { clearErrors } from '../../store/actions/errorAction';

class RegisterModal extends Component {
  state = {
    username: '',
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

  handleChange = (e) => {
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
    return (
      <div className="modal-container">
        <div className="modal-content">
          <div className="popup">
            <button className="popup-close" onClick={this.props.onClose}>✖</button>
            <form onSubmit={this.handleSubmit}>
              <h3 className="modal-header">Register</h3>
              <div className="modal-input">
                <label htmlFor="username">
                  <input
                    type="text"
                    className="register-input"
                    name="username"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.handleChange}
                  />
                </label>
                <label htmlFor="email">
                  <input
                    type="text"
                    className="register-input"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </label>
                <label htmlFor="password">
                  <input
                    type="password"
                    className="register-input"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
              <button
                type="submit"
                className="register-btn"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
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
  mapStateToProps,
  { register, clearErrors }
)(RegisterModal);