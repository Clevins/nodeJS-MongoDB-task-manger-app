const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true
})

//New User Model Added with Mongoose

const User = mongoose.model('User', {
  name: {
    type: String
  },
  age: {
    type: Number
  }
})

//New User Added with promise

// const newUser = new User({
//   name: "Cormac Levins",
//   age: 21
// })

// newUser.save().then( () => {
//   console.log(newUser);
// }).catch( (error) => {
//   console.log("Error" + error)
// })

//New task Model Added with Mongoose

const Task = mongoose.model('Tasks', {
  desc: {
    type: String
  },
  complete: {
    type: Boolean
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
