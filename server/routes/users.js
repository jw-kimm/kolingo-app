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
            });
        })
      })
    })
});


module.exports = router;