import React, { Component } from "react";
import { connect } from 'react-redux'
import { fetchDiscussion, addDiscussion } from '../../store/actions/discussAction'
import DiscussForm from './DiscussForm'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Navbar from '../lessons/shared/Navbar'

const DiscussionList = styled.div`
  display: grid;
  grid-gap: 5rem;
  grid-template-columns: 400px 400px;
  align-items: center;
  justify-content: center;
  margin-top: 36px;
  padding: 24px;
  overflow: hidden;
`
const List = styled.div`
  border-radius: 4px;
  -webkit-box-shadow: 0 0 10px rgb(184, 181, 181);
  min-height: 100px
  padding: 12px;
`
const Header = styled.h4`
  margin: 0;
  border-bottom: 3px solid rgb(229, 229, 229);
`

const Message = styled.p`
  margin-top: 12px;
  font-size: 15px;
  min-height: 80px;
`
const Date = styled.p`
  margin-top: 12px;
  font-size: 12px
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
      .map((discuss, i) => (
        <List key={i}>
          <Header>{discuss.title}</Header>
          <Message>{discuss.content}</Message>
          <Date>{discuss.created}</Date>
        </List>
      )).reverse()
    return (
      <>
        <Navbar />
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