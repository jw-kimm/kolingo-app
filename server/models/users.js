const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  updated: { 
    type: Date, 
    default: Date.now 
  },
  created: { 
    type: Date, 
    default: Date.now 
  },
  userExp: {
    type: Number,
    min: 0,
    max: 100,
    default: 0
  }
});

var User = mongoose.model('User', UserSchema);

module.exports = User;