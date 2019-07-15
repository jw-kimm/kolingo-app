import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, NavLink, Alert } from 'reactstrap';
import { connect } from 'react-redux';
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
      <NavLink onClick={this.toggle} href='#'>
        Register
      </NavLink>

      <Modal isOpen={this.state.modal} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>Register</ModalHeader>
        <ModalBody>
          {this.state.msg ? (
            <Alert color='danger'>{this.state.msg}</Alert>
          ) : null}
          <Form onSubmit={this.onSubmit}>
            <FormGroup>
            <Label for='firstName'>First Name</Label>
              <Input
                type='text'
                name='firstName'
                id='firstName'
                placeholder='First Name'
                className='mb-3'
                onChange={this.onChange}
              />
              <Label for='lastName'>Last Name</Label>
              <Input
                type='text'
                name='lastName'
                id='lastName'
                placeholder='Last Name'
                className='mb-3'
                onChange={this.onChange}
              />
              <Label for='userName'>Username</Label>
              <Input
                type='text'
                name='userName'
                id='userName'
                placeholder='Username'
                className='mb-3'
                onChange={this.onChange}
              />

              <Label for='email'>Email</Label>
              <Input
                type='email'
                name='email'
                id='email'
                placeholder='Email'
                className='mb-3'
                onChange={this.onChange}
              />

              <Label for='password'>Password</Label>
              <Input
                type='password'
                name='password'
                id='password'
                placeholder='Password'
                className='mb-3'
                onChange={this.onChange}
              />
              <Button color='dark' style={{ marginTop: '2rem' }} block>
                Register
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
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

export default connect( mapStateToProps, 
    { register, clearErrors })(RegisterModal);