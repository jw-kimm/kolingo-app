import axios from 'axios';
import { GET_DISCUSSION, POST_DISCUSSION, SINGLE_DISCUSS } from '../actions/types'

/**
 * ACTION CREATORS
 */
const getDiscussion = discuss => ({
  type: GET_DISCUSSION,
  discuss
})

const singleDiscuss = discuss => ({
  type: SINGLE_DISCUSS,
  discuss
})


// const singleDiscussion = 
const postDiscussion = discuss => ({
  type: POST_DISCUSSION,
  discuss
})

/**
 * THUNK CREATORS
 */
export const fetchDiscussion = () => async dispatch => {
  try {
    const { data } = await axios.get(`/api/discuss`)
    console.log('INTHUNK', data)
    dispatch(getDiscussion(data));
  } catch (err) {
    console.log(err)
  }
}

export const fetchSingleDiscuss = _id => async dispatch => {
  try {
    const { data } = await axios.get(`/api/discuss/${_id}`)
    console.log('DIScuss', data)
    dispatch(singleDiscuss(data));
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