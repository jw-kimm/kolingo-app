// import React from 'react'
// import { Route, Redirect } from 'react-router-dom'
// import { connect } from 'react-redux'
// import PropTypes from 'prop-types';

// const ProtectedRoute = ({
//   component: Component,
//   isAuthenticated,
//   // ...rest,
//   path,
//   exact
// }) => (
//     <Route
//       // {...rest}
//       exact={exact}
//       path={path}
//       render={(props) =>
//         !isAuthenticated ? (
//           <Component {...props} />
//         ) : (
//             <Redirect to="/" />
//           )
//       }
//     />
//   );

// ProtectedRoute.propTypes = {
//   auth: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//   isAuthenticated: state.auth.isAuthenticated
// })

// export default connect(mapStateToProps)(ProtectedRoute);