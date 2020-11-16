import React, { Component } from "react";
import { connect } from 'react-redux'
import { fetchDiscussion, addDiscussion } from '../../store/actions/discussAction'
import DiscussForm from './DiscussForm'
import styled from 'styled-components'
import Navbar from '../lessons/shared/Navbar'
import Moment from 'react-moment';

const DiscussContainer = styled.div`
  display: flex;
  flex-direction: column;
`

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
  overflow-wrap: break-word;
`
const Details = styled.p`
  margin-top: 12px;
  font-size: 12px;
  color: grey;
`

class Discuss extends Component {
  state = {
    title: '',
    content: '',
    author: '',
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
      content: '',
      author: '',
    })
  }

  render() {
    let discussArr

    discussArr = this.props.discuss
      .map((discuss, i) => (
        <List key={i}>
          <Header>{discuss.title} </Header>
          <Message>{discuss.content}</Message>
          <Details>Posted by : {discuss.author} </Details>
          <Details>Posted on <Moment format='YYYY/MM/DD'>{discuss.created}</Moment></Details>
        </List>
      )).reverse()
    return (
      <>
        <Navbar />
        <DiscussContainer>
          <DiscussForm {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
          <DiscussionList>
            {discussArr}
          </DiscussionList>
        </DiscussContainer>
      </>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    discuss: state.discuss,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDiscussion: () => dispatch(fetchDiscussion()),
    addDiscussion: (discuss) => dispatch(addDiscussion(discuss))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Discuss)