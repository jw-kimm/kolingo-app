import React, { Component } from "react";
// import { Container, ListGroup, ListGroupItem } from 'reactstrap';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { gotLessons } from '../store/actions/lessonActions';
import PropTypes from 'prop-types';

class LessonsList extends Component {

    async componentDidMount() {
        const test = await this.props.gotLessons();
        
      }
    
    render() {
        return (
            // <Container>
            //    <ListGroup>
            //         <TransitionGroup className='Lessons-list'>
            //         {lesson.map(({ _id, title }) => (
            //         <CSSTransition key={_id} timeout={500} classNames='fade'>
            //             <ListGroupItem>
            //                 {title}
            //             </ListGroupItem>
            //         </CSSTransition>
            // ))}
            //         </TransitionGroup>
            //     </ListGroup>   
            // </Container>
            <div className="problem-container">
            <h2>{this.props.lesson.title}</h2>
            </div>
        )
    }
}

LessonsList.propTypes = {
    gotLessons: PropTypes.func.isRequired,
    lesson: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    debugger 
    return {lesson: state.lesson,}
}
  
  export default connect(mapStateToProps,
    { gotLessons }
  )(LessonsList);