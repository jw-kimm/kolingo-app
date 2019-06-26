const express = require("express");
const router = express.Router();
const User = require('../models/users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

//get ALL users /users
router.get ('/',  async (req,res,next) => {
    const users = await User.find({})
    res.status(200).json(users);
}),

// router.get('/register', (req,res) => res.send('register'))
//@desc register a user
//@route POST /register
//@access Public

router.post('/', (req,res )=> {
    const { firstName, lastName, userName, email, password } = req.body
    if(!firstName ||!lastName ||!userName || !email || !password){
        return res.status(404).json({msg: 'Please enter all fields'})
    }

    User.findOne({email})
        .then(user => {
            if(user) return res.status(400).json({ msg: 'User already exists'})

            const newUser = new User ({
                firstName,
                lastName,
                userName,
                email,
                password
            });

            // Create salt & hash
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => {

                            jwt.sign(
                                {id: user.id },
                                config.get('jwtSecret'),
                                { expiresIn: 3600 }, (err,token) => {
                                    if(err) throw err;
                                    res.json({
                                        token,
                                        user:{
                                            id: user.id,
                                            userName: user.userName,
                                            email: user.email
                                        }
                                    })
                                }
                            )
                        })
                })
            })
        })
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





module.exports = router;