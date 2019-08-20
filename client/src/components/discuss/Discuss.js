import React, { Component } from "react";
import { connect } from 'react-redux'
import { fetchDiscussion, addDiscussion } from '../../store/actions/discussAction'
import DiscussForm from './DiscussForm'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const DiscussionList = styled.div`
  display: flex;
  margin: 50px;
  flex-direction: column;
  font-size: 20px;
  line-height: 100px;
`
const List = styled.li`
  margin-bottom: 10px;
  border-bottom: 3px solid #c5c3c378;
  margin-left: 20px;
`

class Discuss extends Component {
  state = {
    title: '',
    content: '',
  }

  componentDidMount() {
    this.props.fetchDiscussion();
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    this.props.addDiscussion(this.state)
    this.setState({
      title: '',
      content: ''
    })
  }

  render() {
    let discussArr

    discussArr = this.props.discuss
      .map(discuss => (
        <List>
          <li><Link to={`/discuss/${discuss._id}`}>{discuss.title} </Link></li>
          <p style={{ fontSize: 15 }}>{discuss.created}</p>
        </List>
      )).reverse()
    return (
      <>
        <DiscussForm {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <DiscussionList>
          {discussArr}
        </DiscussionList>
      </>
    )
  }
}


const mapStateToProps = ({ discuss }) => {
  return {
    discuss: discuss
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchDiscussion: () => dispatch(fetchDiscussion()),
    addDiscussion: (discuss) => dispatch(addDiscussion(discuss))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Discuss)