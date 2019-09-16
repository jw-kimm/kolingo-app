import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class UserPage extends Component {

  render() {

    const { user } = this.props.auth
    return (
      <div>
        {
          this.props.isAuthenticated ?
            `Welcome ${user.username} ${user.userExp}`
            :
            <h4> Please log in </h4>
        }
      </div>
    );
  }
}

UserPage.propTypes = {
  auth: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    isAuthenticated: state.auth.isAuthenticated,
    user: state.user
  }
}

export default connect(mapStateToProps, null)(UserPage);
