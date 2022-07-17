import React, { Component } from "react";
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { fetchDiscussion, addDiscussion } from '../../store/actions/discussAction'
import styled from 'styled-components'
import Navbar from '../lessons/shared/Navbar'
import moment from 'moment';
import DiscussForm from './DiscussForm'


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
        <List key={i} >
          <Header as={Link} to={`/discuss/${discuss._id}`}>{discuss.title}
            <ul>
              <Details>Posted by : {discuss.author} </Details>
              <Date>Posted on {moment(discuss.created).fromNow(true)}</Date>
            </ul>
          </Header>
          <Message>{discuss.content}</Message>
        </List>
      )).reverse()
    const { user } = this.props.auth

    return (
      <>
        <Navbar />
        <DiscussContainer>
          <DiscussForm {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} user={user} />
          <DiscussionList>
            {discussArr}
          </DiscussionList>
        </DiscussContainer>
      </>
    )
  }
}

Discuss.propTypes = {
  auth: PropTypes.object.isRequired,
}



const mapStateToProps = (state) => {
  return {
    discuss: state.discuss,
    auth: state.auth,
    error: state.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDiscussion: () => dispatch(fetchDiscussion()),
    addDiscussion: (discuss) => dispatch(addDiscussion(discuss))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Discuss)

const DiscussContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const DiscussionList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 36px;
  padding: 24px;
  overflow: hidden;
`
const List = styled.div`
  border-radius: 4px;
  -webkit-box-shadow: 0 0 10px rgb(184, 181, 181);
  min-height: 100px;
  padding: 12px;
  width: 800px;
  margin-bottom: 3rem;
`
const Header = styled.h4`
  margin: 0;
  padding-bottom: 10px;
  height: 60px;

  ul{
    border-bottom: 2px solid rgb(229, 229, 229);
     marginTop: 8px;
  }
`

const Message = styled.p`
  margin-top: 50px;
  font-size: 15px;
  min-height: 80px;
  overflow-wrap: break-word;
`
const Details = styled.li`
  margin-top: 12px;
  font-size: 12px;
  color: grey;
  float: left;
`
const Date = styled.li`
  margin-top: 12px;
  font-size: 12px;
  color: grey;
  float: right;
  margin: 0;
`
