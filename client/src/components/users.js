import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../store/actions/userAction';
import PropTypes from 'prop-types';

class Users extends Component{

  async componentDidMount(){
    await this.props.getUser();
  }

  render() {
    return (
      <div>
        <h1> Hello </h1>
        {/* <li>{this.props.user.firstName}</li> */}
      </div>

  );
}
}



const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

// export default Users

export default connect(mapStateToProps, { getUser })(Users);

/**
 * PROP TYPES
 */
Users.propTypes = {
  getUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
}