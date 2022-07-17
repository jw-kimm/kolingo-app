import axios from 'axios';
import { GET_DISCUSSION, GET_SINGLE_DISCUSSION, POST_DISCUSSION, GET_COMMENTS, POST_COMMENT } from '../actions/types'

/**
 * ACTION CREATORS
 */
const getDiscussion = discuss => ({
  type: GET_DISCUSSION,
  discuss
})

const getSingleDiscussion = discuss => ({
  type: GET_SINGLE_DISCUSSION,
  discuss
})

const postDiscussion = discuss => ({
  type: POST_DISCUSSION,
  discuss
})

//get all comments

const getComments = comment => ({
  type: GET_COMMENTS,
  comment
})

const postComments = comment => ({
  type: POST_COMMENT,
  comment
})



/**
 * THUNK CREATORS
 */
export const fetchDiscussion = () => async dispatch => {
  try {
    const { data } = await axios.get(`/api/discuss`)
    dispatch(getDiscussion(data));
  } catch (err) {
    console.log(err)
  }
}

export const fetchSingleDiscussion = (discussId) => async dispatch => {
  try {
    const { data } = await axios.get(`/api/discuss/${discussId}`)
    dispatch(getSingleDiscussion(data));
  } catch (err) {
    console.log(err)
  }
}



export const addDiscussion = (discuss) => async dispatch => {
  try {
    const { data } = await axios.post(`/api/discuss`, discuss)
    dispatch(postDiscussion(data));
  } catch (err) {
    console.log(err)
  }
}

////////////////comments

// export const fetchComments = () => async dispatch => {
//   try {
//     const { data } = await axios.get(`/api/comments`)
//     dispatch(getComments(data));
//   } catch (err) {
//     console.log(err)
//   }
// }

// export const addComments = (comment) => async dispatch => {
//   try {
//     const { data } = await axios.post(`/api/comments`, comment)
//     dispatch(postComments(data));
//   } catch (err) {
//     console.log(err)
//   }
// }
