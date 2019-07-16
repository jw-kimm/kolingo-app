import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/authAction';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

class Logout extends Component{

  render(){
    return (
    // <Fragment>
      <Link onClick={this.props.logout} href="#">
      Logout
      </Link>
    // </Fragment>
    )
  }
}

Logout.propTypes = {
    logout: PropTypes.func.isRequired
}

export default connect ( null, { logout })(Logout);