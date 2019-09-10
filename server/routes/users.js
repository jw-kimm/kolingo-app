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
  if (!username || !email || !password) {
    return res.status(404).json({ msg: 'Please enter all fields' })
  }
  User.find({ email })
    .exec()
    .then(user => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: "User exists"
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err
            });
          } else {
            const user = new User({
              username,
              email,
              password: hash
            });
            user
              .save()
              .then(result => {
                console.log(result);
                const token = jwt.sign(
                  {
                    email: email,
                  },
                  process.env.JWT_SECRET,
                  {
                    expiresIn: "1h"
                  }
                );
                res.status(201).json({
                  message: "User created",
                  token: token
                })
              })
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                });
              });
          }
        });
      }
    });
});


// /users/:id
router.get('/:userId', async (req, res, next) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
})

//should received entire object
router.put('/:userId', async (req, res, next) => {
  try {
    const { userId } = req.params;
    const newUser = req.body;
    const result = await User.findByIdAndUpdate(userId, newUser);
    res.status(200).json({ success: true });
  } catch (err) {
    next(err);
  }
});

//only that needs to be updated.
router.patch('/:userId', async (req, res, next) => {
  try {
    const { userId } = req.params;
    const newUser = req.body;
    const result = await User.findByIdAndUpdate(userId, newUser);
    res.status(200).json({ success: true });
  } catch (err) {
    next(err);
  }
});

//delete user
router.delete('/:userId', (req, res, next) => {
  User.remove({ _id: req.params.userId })
    .then(result => {
      res.status(200).json({
        message: "User deleted"
      })
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      })
    })
})

//logout

router.delete('/logout', (req, res, next) => {
  req.session.destroy()
  res.status(204).end()
})


module.exports = router;