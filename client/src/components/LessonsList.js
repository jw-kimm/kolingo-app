import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getLessons } from '../store/actions/lessonActions';
import PropTypes from 'prop-types';

class LessonsList extends Component {

    componentDidMount() {
        this.props.getLessons();
      }
    
    render() {
        const { lesson } = this.props.lesson;
        return (
            <Container>
               <ListGroup>
                    <TransitionGroup className='Lessons-list'>
                    {lesson.map(({ _id, title }) => (
                    <CSSTransition key={_id} timeout={500} classNames='fade'>
                        <ListGroupItem>
                            {title}
                        </ListGroupItem>
                    </CSSTransition>
            ))}
                    </TransitionGroup>
                </ListGroup>   
            </Container>
        )
    }
}

LessonsList.propTypes = {
    getLessons: PropTypes.func.isRequired,
    lesson: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    lesson: state.lesson,
  });
  
  export default connect(mapStateToProps,
    { getLessons }
  )(LessonsList);