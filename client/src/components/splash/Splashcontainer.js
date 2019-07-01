import { connect } from 'react-redux';

import Splash from './Splash'
import { fetchLessons } from '../../store/actions/lessonActions'

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


export default connect(mapStateToProps, mapDispatchToProps)(Splash)