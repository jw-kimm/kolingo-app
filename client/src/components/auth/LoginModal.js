// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types';
// import { login } from '../../store/actions/authAction';
// import { clearErrors } from '../../store/actions/errorAction';


// class LoginModal extends Component {

//   state = {
//     modal: false,
//     userName: '',
//     password: '',
//     msg: null
//   };


//   componentDidUpdate(prevProps) {
//     const { error, isAuthenticated } = this.props;
//     if (error !== prevProps.error) {
//       // Check for register error
//       if (error.id === 'LOGIN_FAIL') {
//         this.setState({ msg: error.msg.msg });
//       } else {
//         this.setState({ msg: null });
//       }
//     }

//     // If authenticated, close modal
//     if (this.state.modal) {
//       if (isAuthenticated) {
//         this.toggle();
//       }
//     }
//   }

//   toggle = () => {
//     // Clear errors
//     this.props.clearErrors();
//     this.setState({
//       modal: !this.state.modal
//     });
//   };

//   onChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   onSubmit = e => {
//     e.preventDefault();

//     const { userName, password} = this.state;

//     const user = {
//         userName, 
//         password
//     }
//     //Attempt to login
//     this.props.login(user);
//   };

//   render() {
//     return (
//       <div>
//         <Link onClick={this.toggle} href='#'>
//           Login
//         </Link>

//         {/* // <Modal isOpen={this.state.modal} toggle={this.toggle}>
//         //   <ModalHeader toggle={this.toggle}>Login</ModalHeader>
//         //     {this.state.msg ?  */}
//         {/* //       <Alert color='danger'>{this.state.msg}</Alert>
//         //     ) : null} */}
//             <form onSubmit={this.onSubmit}>
              
//               <form>
//                 <label for='userName'>Username</label>
//                 <input
//                   type='text'
//                   name='userName'
//                   id='userName'
//                   placeholder='Username'
//                   className='mb-3'
//                   onChange={this.onChange}
//                 />
//                 <label for='password'>Password</label>
//                 <input
//                   type='password'
//                   name='password'
//                   id='password'
//                   placeholder='Password'
//                   className='mb-3'
//                   onChange={this.onChange}
//                 />
//                 <button color='dark' style={{ marginTop: '2rem' }} block>
//                   Login
//                 </button>
//               </form>
//             </form>
//       </div>
//   );
// }
// }
 
// LoginModal.propTypes = {
//   isAuthenticated: PropTypes.bool,
//   error: PropTypes.object.isRequired,
//   login: PropTypes.func.isRequired,
//   clearErrors: PropTypes.func.isRequired
// };

// const mapStateToProps = state => ({
//   isAuthenticated: state.auth.isAuthenticated,
//   error: state.error
// });

// export default connect( mapStateToProps, { login, clearErrors })(LoginModal);

import React, { Component } from 'react';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password,
        }
        console.log(user);
    }

    render() {
        return(
        <div className="container" style={{ marginTop: '50px', width: '700px'}}>
            <h2 style={{marginBottom: '40px'}}>Login</h2>
            <form onSubmit={ this.handleSubmit }>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    name="email"
                    onChange={ this.handleInputChange }
                    value={ this.state.email }
                  />
                </div>
                <div className="form-group">
                    <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    name="password"
                    onChange={ this.handleInputChange }
                    value={ this.state.password }
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                        Login
                    </button>
                </div>
            </form>
        </div>
        )
    }
}

export default Login;