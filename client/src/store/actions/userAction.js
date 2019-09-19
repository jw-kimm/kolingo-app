// import axios from 'axios'
// import { UPDATE_USER, UPDATE_EXP } from './types';
// import { tokenConfig } from './authAction';
// import { returnErrors } from './errorAction';

// const updateUser = user => ({ type: UPDATE_USER, user })
// // const updateUserPoints = updatePoints => ({ type: UPDATE_EXP, updatePoints })

// export const updateUserInfo = (user) => (dispatch, getState) => {
//   axios
//     .put('/api/auth/user', user, tokenConfig(getState))
//     .then(res =>
//       dispatch({
//         type: UPDATE_USER,
//         payload: res.data
//       })
//     )
//     .catch(err =>
//       dispatch(returnErrors(err.response.data, err.response.status))
//     );
// }

// //update user exp
// export const updateUserExp = (user) => async dispatch => {
//   try {
//     const newExp = await axios.put('/api/auth/user', user)
//     dispatch(updateUserPoints(newExp.data))
//   } catch (err) {
//     console.err(err)
//   }
// }

