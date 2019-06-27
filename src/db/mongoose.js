const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true
})

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
    minLength: 7,
    validate(value){
      if(value.toLowerCase().includes("password")){
        throw new Error("Password can't contain 'password' ");
      }
    }

  }
})

//New User Added with promise

// const newUser = new User({
//   name: "Jim Levins    ",
//   email: "JIM@OUYTLOOK.IE",
//   password: "password"
// })
//
// newUser.save().then( () => {
//   console.log(newUser);
// }).catch( (error) => {
//   console.log("Error" + error)
// })

//New task Model Added with Mongoose

const Task = mongoose.model('Tasks', {
  desc: {
    type: String,
    required: true,
    trim: true
  },
  complete: {
    type: Boolean,
    default: false
  }
})

//New Task Added with promise

// const newTask = new Task({
//   desc: "New Task",
//   complete: false
// })
//
// newTask.save().then( () => {
//   console.log(newTask);
// }).catch( (error) => {
//   console.log(error)
// })
