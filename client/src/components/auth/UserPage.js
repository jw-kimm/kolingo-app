import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../store/actions/userAction';
import PropTypes from 'prop-types';

class UserPage extends Component {

  async componentDidMount() {
    await this.props.getUser();
  }

  render() {
    const { user } = this.props
    return (
      <div>
        <h1> Hello {user.email}</h1>
      </div>
    );
  }
}

UserPage.propTypes = {
  getUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

// export default Users
export default connect(mapStateToProps, { getUser })(UserPage);
