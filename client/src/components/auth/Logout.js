import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/authAction';
import PropTypes from 'prop-types';

class Logout extends Component {

  render() {
    return (
      <a href="/" onClick={this.props.logout}>
        Logout
      </a>
    )
  }
}

Logout.propTypes = {
  logout: PropTypes.func.isRequired
}

export default connect(null, { logout })(Logout);