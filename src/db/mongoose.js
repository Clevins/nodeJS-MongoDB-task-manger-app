const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true
})

const User = mongoose.model('User', {
  name: {
    type: String
  },
  age: {
    type: Number
  }
})

const newUser = new User({
  name: "Cormac Levins",
  age: 21
})

newUser.save().then( () => {
  console.log(newUser);
}).catch( (error) => {
  console.log("Error" + error)
})
