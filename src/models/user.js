const mongoose = require('mongoose')
const validator = require('validator')

//New User Model Added with Mongoose
const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true
  },
  age: {
    type: Number,
    default:0,
    validate(value) {
      if(value < 0){
        throw new Error('Age Must be > 0')
      }
    }
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value){
      if(!validator.isEmail(value)){
        throw new Error('Not Valid Email')
      }
    }
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 7,
    validate(value){
      if(value.toLowerCase().includes("password")){
        throw new Error("Password can't contain 'password' ");
      }
    }

  }
})

module.exports = User
