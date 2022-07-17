import React, { useEffect } from 'react'
import { fetchSingleDiscussion } from '../../store/actions/discussAction'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import CommentForm from './CommentForm'
import moment from 'moment'
import styled from 'styled-components'

const SingleDiscuss = ({ auth, match, discuss, fetchSingleDiscussion }) => {
  useEffect(() => {
    fetchSingleDiscussion(match.params.id)
  }, [])


  if (discuss.length === 0) return null

  const { title, content, author, createdAt, comments } = discuss

  return (
    <Container>
      <Discussion__block>
      <h1> Discussion </h1>
      <h2> {title}</h2>
      <p> {content}</p>
      <p> {author}</p>
      <p> {moment(createdAt).fromNow(true)}</p>
      </Discussion__block>
      {/* <CommentForm />
      <p> {comments && comments
        .map(({ content, i }) => (
          <p>{content}</p>
        ))}</p> */}
    </Container>
  );
}

SingleDiscuss.propTypes = {
  auth: PropTypes.object.isRequired,
}


const mapStateToProps = (state) => {
  return {
    discuss: state.discuss,
    auth: state.auth,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSingleDiscussion: (id) => dispatch(fetchSingleDiscussion(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleDiscuss)

/*

const SingleDiscuss = ({ auth, match, discuss, fetchSingleDiscussion, fetchComments, comments }) => {
  const [Comment, setComment] = useState('')
  debugger
  useEffect(() => {
    fetchSingleDiscussion(match.params.id)
    fetchComments()
  }, [])

  const handleSubmit = (evt) => {
    evt.preventDefault()
    const variables = {
      content: Comment,
      author: auth.user.userData._id,
      discussId: props.discussId
    }
    addComments(setComment(''), variables)

  }

  if (discuss.length === 0) return null

  const { title, content, author, createdAt } = discuss
  // const { body, author, discussId } = comments

  return (
    <>
      <h1> Discussion </h1>
      <h1> {title}</h1>
      <p> {content}</p>
      <p> {author}</p>
      <p> {moment(createdAt).fromNow(true)}</p>
      <CommentForm handleSubmit={handleSubmit} />
      {/* <p> {comments && comments
        .map(({ content, i }) => (
          <p>{content}</p>
        ))}</p> */


const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 30px;
`

const Discussion__block = styled.div`
  display: flex;
`