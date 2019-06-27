const mongoose = require('mongoose')
const validator = require('validator')

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

module.exports = Task
