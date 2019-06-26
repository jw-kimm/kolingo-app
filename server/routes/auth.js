const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth')
const User = require('../models/users');

//@desc auth user
//@route POST /auth
//@access Public

router.post('/', (req,res )=> {
    const { email, password } = req.body
    //Simple Validation
    if(!email || !password){
        return res.status(404).json({msg: 'Please enter all fields'})
    }

    User.findOne({email})
        .then(user => {
            if(!user) return res.status(400).json({ msg: 'User does not exist'})

            // validate password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(!isMatch) return res.status(400).json({ msg: "Invalid credentials"});

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