const router = require("express").Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/users');

//get ALL users /users
router.get('/', async (req, res, next) => {
  const users = await User.find({})
  res.status(200).json(users);
});

// @desc register a user
// @route POST /register
// @access Public
router.post("/", (req, res, next) => {

  const { username, email, password } = req.body
  console.log(req.body)
  // Simple validation
  if (!username || !email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  // Check for existing user
  User.findOne({ email })
    .then(user => {
      if (user) return res.status(400).json({ msg: 'User already exists' });

      const newUser = new User({
        username,
        email,
        password
      });

      // Create salt & hash
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save()
            .then(user => {
              jwt.sign(
                { id: user._id },
                process.env.JWT_SECRET,
                { expiresIn: "4h" },
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
            });
        })
      })
    })
});


// //should received entire object
// router.put('/:userId', async (req, res, next) => {
//   try {
//     const { userId } = req.params;
//     const newUser = req.body;
//     const result = await User.findByIdAndUpdate(userId, newUser);
//     res.status(200).json({ success: true });
//   } catch (err) {
//     next(err);
//   }
// });





// // /users/:id
// router.get('/:userId', async (req, res, next) => {
//   try {
//     const { userId } = req.params;
//     const user = await User.findById(userId);
//     res.status(200).json(user);
//   } catch (err) {
//     next(err);
//   }
// })


// //only that needs to be updated.
// router.patch('/:userId', async (req, res, next) => {
//   try {
//     const { userId } = req.params;
//     const newUser = req.body;
//     const result = await User.findByIdAndUpdate(userId, newUser);
//     res.status(200).json({ success: true });
//   } catch (err) {
//     next(err);
//   }
// });

// //delete user
// router.delete('/:userId', (req, res, next) => {
//   User.remove({ _id: req.params.userId })
//     .then(result => {
//       res.status(200).json({
//         msg: "User deleted"
//       })
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({
//         error: err
//       })
//     })
// })


module.exports = router;