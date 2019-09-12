const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth')
const User = require('../models/users');

//@desc auth user
//@route POST /auth
//@access Public

router.post("/", (req, res, next) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  User.findOne({ email })
    .then(user => {
      if (!user) return res.status(400).json({ msg: 'User Does not exist' });

      // Validate password
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

          jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user: {
                  id: user._id,
                  username: user.username,
                  email: user.email
                }
              });
            }
          )
        })
    })
});


//   User.find({ email })
//     .then(user => {
//       if (!user) return res.status(400).json({ msg: 'User Does not exist' });

//       bcrypt.compare(password, user[0].password, (err, result) => {
//         if (err) {
//           return res.status(401).json({
//             msg: "Auth failed"
//           });
//         }
//         if (result) {
//           const token = jwt.sign(
//             {
//               email: user[0].email,
//               userId: user[0]._id
//             },
//             process.env.JWT_SECRET,
//             {
//               expiresIn: "1h"
//             }
//           );
//           return res.status(200).json({
//             msg: "Auth successful",
//             token: token,
//             user: {
//               id: user.id,
//               username: user.username,
//               email: user.email
//             }
//           });
//         }
//         res.status(401).json({
//           msg: "Auth failed"
//         });
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({
//         error: err
//       });
//     });
// });

//@desc get user data
//@route GET /auth/user
//@access Private

router.get('/user', auth, (req, res) => {
  User.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user));
})

module.exports = router;