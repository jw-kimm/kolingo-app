import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadUser } from '../../store/actions/authAction';
import PropTypes from 'prop-types';
import { me } from '../../store/actions/userAction'

class UserPage extends Component {

  async componentDidMount() {
    debugger
    await this.props.me();
  }

  render() {
    debugger
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

const mapDispatchToProps = (dispatch) => {
  return {
    me: () => dispatch(me())
  }
}


// export default Users
export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
