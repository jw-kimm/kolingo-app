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
  debugger
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  } else if (email === "demo@email.com" && password === "demouser") {

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
              {},
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
  }
});


//@desc get user data
//@route GET /auth/user
//@access Private
router.get('/user', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/auth/user
// @desc    updating user
// @access  Private
router.post('/user', auth, (req, res) => {
  User.findById(req.user.id)
    .then(user => {
      if (req.body.email) {
        user.email = req.body.email;
        user.username = req.body.username;
        user.userExp = Number(req.body.userExp)
      } else if (req.body.userExp) {
        user.userExp = Number(req.body.userExp)
      }
      try {
        user.save()
        res.status(201).json('User Updated!')
      } catch (e) {
        err => res.status(400).json('Error' + err)
      }
    })
    .catch(err => {
      res.status(400).json('Error' + err)
    });
});


module.exports = router;