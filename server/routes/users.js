const router = require("express").Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/users');

//get ALL users /users
router.get ('/',  async (req,res,next) => {
    const users = await User.find({})
    res.status(200).json(users);
}),

// @desc register a user
// @route POST /register
// @access Public

// router.post('/', (req,res )=> {
//   const { firstName, lastName, userName, email, password } = req.body
//   if(!firstName ||!lastName ||!userName || !email || !password){
//       return res.status(404).json({msg: 'Please enter all fields'})
//   }

//   User.findOne({email})
//     .then(user => {
//       if(user) return res.status(400).json({ msg: 'User already exists'})

//       const newUser = new User ({
//         firstName,
//         lastName,
//         userName,
//         email,
//         password
//       });

//       // Create salt & hash
//       bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(newUser.password, salt, (err, hash) => {
//           if(err) throw err;
//           newUser.password = hash;
//           newUser.save()
//             .then(user => {
//                 jwt.sign(
//                   { id: user.id },
//                   config.get('jwtSecret'),
//                     { expiresIn: 3600 }, (err,token) => {
//                       if(err) throw err;
//                         res.json({
//                           token,
//                           user:{
//                             id: user.id,
//                             userName: user.userName,
//                             email: user.email
//                           }
//                         })
//                     }
//                 )
//             })
//           })
//       })
//     })
// });

//  router.post('/', (req, res, next) => {
//   const { firstName, lastName, userName, email, password } = req.body
//     if(!firstName ||!lastName ||!userName || !email || !password){
//       return res.status(404).json({msg: 'Please enter all fields'})
//   }
//   User.find({ email })
//     .then(user => {
//     if(user.length >= 0) {
//       return res.status(400).json({ 
//         msg: 'User already exists'
//       })
//     } else {
//       bcrypt.hash(email, 10, (err, hash) => {
//         if(err){
//           return res.status(500).json({ error: err });
//         } else {
//           const newUser = new User ({
//             firstName,
//             lastName,
//             userName,
//             email,
//             password
//           });
//         newUser
//         .save()
//         .then(result => {
//           console.log(result);
//           res.status(201).json({ message: 'User Created' });
//         })
//         .catch(err => {
//           console.log(err);
//           res.status(500).json({error: err})
//         });
//       }
//     })
//     }
//   })
// });
router.post("/", (req, res, next) => {

  const { firstName, lastName, userName, email, password } = req.body
  if(!firstName ||!lastName ||!userName || !email || !password){
    return res.status(404).json({msg: 'Please enter all fields'})
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
              firstName,
              lastName,
              userName,
              email,
              password: hash
            });
            user
              .save()
              .then(result => {
                console.log(result);
                res.status(201).json({
                  message: "User created"
                });
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
router.get('/:userId', async(req,res,next) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    res.status(200).json(user);
  } catch (err) {
      next(err);
  }
})

//should received entire object
router.put('/:userId', async(req,res,next) => {
  try {
    const { userId } = req.params;
    const newUser = req.body;
    const result = await User.findByIdAndUpdate(userId, newUser);
    res.status(200).json({success: true});
  } catch (err) {
    next(err);
  }
});

//only that needs to be updated.
router.patch('/:userId', async(req,res,next) => {
  try {
    const { userId } = req.params;
    const newUser = req.body;
    const result = await User.findByIdAndUpdate(userId, newUser);
    res.status(200).json({success: true});
  } catch (err) {
    next(err);
  }
});

router.delete('/:userId', (req,res,next) => {
  User.remove({_id: req.params.userId})
  .then(result=> {
    res.status(200).json({
      message: "User deleted"
    })
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error:err
    })
  })
})

module.exports = router;