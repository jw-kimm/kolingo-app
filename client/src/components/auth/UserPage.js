import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class UserPage extends Component {

  render() {
    debugger
    const { auth } = this.props
    return (
      <div>
        {
          this.props.isAuthenticated ? `Welcome ${auth.user.username}` :
            <h4> Please log in </h4>
        }
      </div>
    );
  }
}

UserPage.propTypes = {
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    isAuthenticated: state.auth.isAuthenticated,
  }
}

export default connect(mapStateToProps, null)(UserPage);
