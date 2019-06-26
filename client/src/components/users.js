import React, { Component } from 'react';
// import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import {connect} from 'react-redux'
// import { getUser } from '../store/actions/userAction'
// import PropTypes from 'prop-types'


class Users extends Component{

  componentDidMount(){
    // this.props.getUser();
  }

  render() {
    // const { users } = this.props.users
    return (
      <div>

      </div>
      // <Container>
      //   <Button color="dark" style={{margineBottom: '2rem'}} onClick={() => {
      //     const name = prompt('Enter User')
      //     if(name) {
      //       this.setState(state => ({
      //         users: [...state.users,]
      //       }))
      //     }
      //   }}>
      //   Add User
      //   </Button>

      //   <ListGroup>
      //     <TransitionGroup className="user-list">
      //     {users.map(({ id, name}) => (
      //       <CSSTransition key={id} timeout={500} className="fade">
      //       <ListGroupItem>
      //         {name}
      //       </ListGroupItem>
      //       </CSSTransition>
      //     ))}
      //     </TransitionGroup>
      //   </ListGroup>
      // </Container>
  );
}
}



// const mapStateToProps = (state) => {
//   return {
//     user: state.user
//   }
// }

export default Users

// export default connect(mapStateToProps, { getUser })(Users);

// /**
//  * PROP TYPES
//  */
// Users.propTypes = {
//   getUser: PropTypes.func.isRequired,
//   user: PropTypes.object.isRequired
// }