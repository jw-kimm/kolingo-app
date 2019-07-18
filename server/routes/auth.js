const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth')
const User = require('../models/users');

//@desc auth user
//@route POST /auth
//@access Public

// router.post('/', (req,res )=> {
//     const { email, password } = req.body
//     //Simple Validation
//     if(!email || !password){
//         return res.status(404).json({msg: 'Please enter all fields'})
//     }

//     User.findOne({email})
//         .then(user => {
//             if(!user) return res.status(400).json({ msg: 'User does not exist'})

//             // validate password
//             bcrypt.compare(password, user.password)
//                 .then(isMatch => {
//                     if(!isMatch) return res.status(400).json({ msg: "Invalid credentials"});

//                     jwt.sign(
//                         {id: user.id },
//                         config.get('jwtSecret'),
//                         { expiresIn: 3600 }, (err,token) => {
//                             if(err) throw err;
//                             res.json({
//                                 token,
//                                 user:{
//                                     id: user.id,
//                                     userName: user.userName,
//                                     email: user.email
//                                 }
//                             })
//                         }
//                     )
//                 })
//         })
// });


// router.post("/login", (req, res, next) => {
//   const { email, password } = req.body
//   if(!email || !password){
//     return res.status(404).json({msg: 'Please enter all fields'})
//   }

//   User.find({ email })
//     .exec()
//     .then(user => {
//       if (user.length < 1) {
//         return res.status(401).json({
//           message: "Auth failed"
//         });
//       }
//       bcrypt.compare(password, user[0].password, (err, result) => {
//         if (err) {
//           return res.status(401).json({
//             message: "Auth failed"
//           });
//         }
//         if (result) {
//           const token = jwt.sign(
//             {
//               email: user[0].email,
//               userId: user[0]._id
//             },
//             process.env.JWT_KEY,
//             {
//                 expiresIn: "1h"
//             }
//           );
//           return res.status(200).json({
//             message: "Auth successful",
//             token: token
//           });
//         }
//         res.status(401).json({
//           message: "Auth failed"
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


router.post("/", (req, res, next) => {
  const { email, password } = req.body

  User.find({ email })
    .exec()
    .then(user => {
      if (user.length < 1) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      bcrypt.compare(password, user[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: "Auth failed"
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              email: user[0].email,
              userId: user[0]._id
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1h"
            }
          );
          return res.status(200).json({
            message: "Auth successful",
            token: token
          });
        }
        res.status(401).json({
          message: "Auth failed"
        });
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

//@desc get user data
//@route GET /auth/user
//@access Private

router.get('/user', auth, (req,res) => {
    User.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user));
})

module.exports = router;