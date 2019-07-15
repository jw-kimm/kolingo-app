import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/authAction';
import { NavLink} from 'reactstrap';
import PropTypes from 'prop-types';

class Logout extends Component{

    render(){
        return (
            <Fragment>
                <NavLink onClick={this.props.logout} href="#">
                Logout
                </NavLink>
            </Fragment>
        )
    }
}

Logout.propTypes = {
    logout: PropTypes.func.isRequired
}


export default connect ( null, { logout })(Logout);