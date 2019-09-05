const express = require('express')
const router = new express.Router()
const Task = require('../models/task')

const auth = require('../middleware/auth')

router.post('/tasks', auth, async (req, res) =>{

  //const task = new Task(req.body)
  const task = new Task({
    ...req.body,
    owner: req.user._id
  })

  try {
    await task.save()
    res.status(201).send(task)
  } catch (e) {
    res.status(400).send(e);
  }

})

//GET /tasks?complete=true
//GET /tasks?limit=1&skip=10
//GET /tasks?sortBy=createdAt_asc/desc
router.get('/tasks', auth,  async (req, res) => {


  const match = {}
  const sort = {}


  if (req.query.complete) {
    match.complete = req.query.complete === 'true'
  }

  if(req.query.sortBy) {
    const pt = req.query.sortBy.split('_')
    sort[pt[0]] = pt[1] === 'desc' ? -1 : 1
  }

  try {
    await req.user.populate({
      path: 'tasks',
      match,
      options: {
        limit: parseInt(req.query.limit),
        skip: parseInt(req.query.skip),
        sort
      }
    }).execPopulate()

    res.send(req.user.tasks);
  } catch (e) {
    res.status(500).send()
  }

})

router.get('/tasks/:id', auth, async (req, res) => {
  const _id = req.params.id

  try {

    //const task = await Task.findById(_id)
    const task = await Task.findOne( {_id, owner: req.user._id })

    if( !task ) {
      return res.status(404).send()
    }
    res.send(task)

  } catch (e) {
    res.status(500).send()
  }

})



router.patch('/tasks/:id', auth, async (req, res) => {
  const _id = req.params.id
  const updates = Object.keys(req.body)
  const allowed = ['desc', 'complete']
  const isValid = updates.every( (u) => allowed.includes(u))

  if(!isValid){
    return res.status(400).send({error: "INvalid Field"})
  }
  try {
    const task = await Task.findOne({_id: req.params.id, owner: req.user._id})

    if(!task){
      res.status(404).send()
    }
    updates.forEach( (update) => task[update] = req.body[update])
    await task.save()


    res.send(task)
  } catch (e) {
    res.status(400).send(e)
  }
})


router.delete('/task/:id', auth, async (req, res) => {
  try {

    const task = await Task.findOneAndDelete({_id: req.params.id, owner: req.user._id})

    if(!task){
      return res.status(404).send()
    }

    res.send(task)
  } catch (e) {
    res.status(500).send(e)
  }
})

module.exports = router
