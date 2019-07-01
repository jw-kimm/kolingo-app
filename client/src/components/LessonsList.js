import React, { Component } from "react";
// import { Container, ListGroup, ListGroupItem } from 'reactstrap';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { fetchLessons } from '../store/actions/lessonActions';
import PropTypes from 'prop-types';

class LessonsList extends Component {

componentDidMount() {
  this.props.fetchLessons();
        
      }
    
    render() {
        debugger
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
            <p>{this.props.lessons.title}</p>
            </div>
        )
    }
}

LessonsList.propTypes = {
  fetchLessons: PropTypes.func.isRequired,
    lesson: PropTypes.object.isRequired
}

const mapStateToProps = state => { 
    return {
        lessons: state.lesson
    }
}

const mapDispatchToProps = dispatch => {
    return {
      fetchLessons: () => dispatch(fetchLessons())
    }
}
  
  export default connect(mapStateToProps,mapDispatchToProps)(LessonsList);