const express = require('express')
const router = new express.Router()
const Task = require('../models/task')

router.post('/tasks', async (req, res) =>{


  const task = new Task(req.body)

  try {
    await task.save()
    res.status(201).send(task)
  } catch (e) {
    res.status(400).send(e);
  }

})

router.get('/tasks', async (req, res) => {

  try {
    const task = await Task.find({})
    res.send(task);
  } catch (e) {
    res.status(500).send()
  }

})

router.get('/tasks/:id',async (req, res) => {
  const _id = req.params.id

  try {

    const task = await Task.findById(_id)
    res.send(task)

  } catch (e) {
    res.status(500).send()
  }

})



router.patch('/tasks/:id', async (req, res) => {
  const _id = req.params.id
  const updates = Object.keys(req.body)
  const allowed = ['desc', 'complete']
  const isValid = updates.every( (u) => allowed.includes(u))

  if(!isValid){
    return res.status(400).send({error: "INvalid Field"})
  }
  try {

    const task = await Task.findById(_id)

    updates.forEach( (update) => task[update] = req.body[update])
    await task.save()

    if(!task){
      res.status(404).send()
    }

    res.send(task)
  } catch (e) {
    res.status(400).send(e)
  }
})


router.delete('/task/:id', async (req, res) => {
  try {
    const task = Task.findByIdAndDelete(req.params.id)

    if(!task){
      return res.status(404).send()
    }

    res.send(task)
  } catch (e) {
    res.status(500).send(e)
  }
})

module.exports = router
