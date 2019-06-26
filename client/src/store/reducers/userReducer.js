// import axios from 'axios'
import {GET_USER, USER_LOADING} from '../actions/types'


 /**
 * INITIAL STATE
 */

const defaultUser = {
    user: {},
    loading: false
}


 /**
 * REDUCER
 */

export default function(state = defaultUser, action) {
    switch (action.type) {
      case GET_USER:
        return {
            ...state,
            users: action.payload,
            loading:false
        }
     case USER_LOADING:
        return { ...state, loading: true}
      default:
        return state
    }
  }
  