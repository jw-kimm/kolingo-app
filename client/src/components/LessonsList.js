import React, { Component } from "react";
// import { Container, ListGroup, ListGroupItem } from 'reactstrap';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { fetchLessons } from '../store/actions/lessonActions';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar'
import Alphabet1 from '../components/Alphabet1';


class LessonsList extends Component {

componentDidMount() {
  this.props.fetchLessons();
  
  }

    render() {
        return (
            <div className="lessons-container">
            <Navbar />

            </div>
        )
    }
}

LessonsList.propTypes = {
  fetchLessons: PropTypes.func.isRequired,
    lesson: PropTypes.object.isRequired
}
const mapStateToProps = ({ lesson }) => {
  return {
    lessons: lesson,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchLessons: () => dispatch(fetchLessons()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(LessonsList)