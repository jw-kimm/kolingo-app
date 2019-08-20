import React, { Component } from "react";
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchSingleDiscuss } from '../../store/actions/discussAction'

const Content = styled.div`
  display: flex;
  width: 700px;
  flex-direction: column;
  margin-bottom: 10px;
  margin-left: 20px;
`

class SingleDiscuss extends Component {

  componentDidMount() {
    this.props.fetchSingleDiscuss(this.props.match.params.id);
  }

  render() {
    const discuss = this.props.discuss
    return (
      <>
        <Content>
          <ul style={{ display: "inline-block", width: 900 }}>
            <li>{discuss.title} </li>
            <li>{discuss.content}</li>
            <li>{discuss.created}</li>
            <li >{discuss.updated}</li>
          </ul>

          <Link to={`/discuss`}> Back </Link>
        </Content>
      </>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    discuss: state.discuss,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSingleDiscuss: (id) => dispatch(fetchSingleDiscuss(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleDiscuss)


