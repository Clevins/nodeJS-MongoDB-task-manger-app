const { MongoClient, ObjectID } = require('mongodb');

// dorect to bin folder in mongodb
//run mongod --port 27017 --dbpath C:\users\corma\mongodb-data

//init db
const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

// const id = new ObjectID();
// console.log(id);
// console.log(id.getTimestamp());

//Calling Mongo Client
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {

  if (error) {

    return console.log("Cannot Connect");
  }

  const db = client.db(databaseName);

  //------------------CREATE/IMSERT WITH MONGO DB ---------------------------------------------------------

  //INSERT ONE USER
  // db.collection('users').insertOne({
  //
  //   name: "cormac levins",
  //   age: 21
  //
  // }, (error, result) => {
  //   if(error){
  //     return console.log("CAnnot Insert User");
  //   }
  //
  //   console.log(result.ops);
  //
  // })

  //INSERT MANY USERS
  // db.collection('users').insertMany([
  //   {
  //     name: "ronan levins",
  //     age: 21
  //   },{
  //     name: "des levins",
  //     age: 21
  //   }
  // ], (error, result) => {
  //
  //     if(error){
  //         return console.log("CAnnot Insert User");
  //     }
  //
  //     console.log(result.ops);
  //
  // })

  //INSERT MANY TASKS
  // db.collection('tasks').insertMany([
  //   {
  //     desc: "Add Task",
  //     completed: true
  //   }, {
  //     desc: "Remove Task",
  //     completed: false
  //   }, {
  //     desc: "Update Task",
  //     completed: false
  //   }
  // ], (error, result) => {
  //
  //     if(error){
  //         return console.log("CAnnot Insert Task");
  //     }
  //
  //     console.log(result.ops);
  //
  // })

  //------------------READ WITH MONGO DB ---------------------------------------------------------

  //READ USERS WITH findOne
  // db.collection('users').findOne(
  // {
  //   name: 'des levins'
  // }, (error, result) => {
  //   if(error){
  //     return console.log("Error");
  //   }
  //
  //   console.log(result);
  // });


  //READ USERS WITH find
  // db.collection('users').find({ age: 21 }).count( (error, result) => {
  //   console.log(result);
  // })

  //READ TASLS WITH findOne
  // db.collection('tasks').findOne( { _id: new ObjectID("5d1217abef12f50ef87ba481")}, (error, task) =>{
  //
  //   if(error){
  //     return console.log("Error");
  //   }
  //
  //   console.log(task);
  // })


  //READ TASLS WITH find
  // db.collection('tasks').find({ completed: false}).toArray( (error, tasks) => {
  //
  //   if(error){
  //     return console.log("Error");
  //   }
  //
  //   console.log(tasks);
  // })

  //------------------UPDATE WITH MONGO DB & PROMISES ---------------------------------------------------------

  //Update Users with updateOne
  //Using Promises to handle callback

  // db.collection('users').updateOne(
  // {
  //   _id: new ObjectID("5d0cb06b506dda9730987050")
  // }, {
  //     $inc: {
  //       age: 1
  //     }
  // }).then( (result) => {
  //   console.log(result)
  // }).catch( (error) => {
  //   console.log(error)
  // })

  //Update Tasks with UpdateMany
  //Using Promises to handle callback

  // db.collection('tasks').updateMany(
  //   {
  //     completed: true
  //   }, {
  //     $set: {
  //       completed: false
  //     }
  //   }
  // ).then( (result) => {
  //   console.log(result)
  // }).catch( (error) => {
  //   console.log(error)
  // })

  //------------------DELETE WITH MONGO DB & PROMISES ---------------------------------------------------------

  //delete users with deletemany
  //Using PROMISES

  // db.collection('users').deleteMany({
  //   age:22
  // }).then( (result) => {
  //   console.log(result)
  // }).catch( (error) => {
  //   console.log(error);
  // })

  //delete tasks with deleteOne
  //Using PROMISES

  // db.collection('tasks').deleteOne(
  //   {
  //     desc: "Remove Task"
  //   }
  // ).then( (result) => {
  //   console.log(result)
  // }).catch( (error) => {
  //   console.log(error)
  // })



})
