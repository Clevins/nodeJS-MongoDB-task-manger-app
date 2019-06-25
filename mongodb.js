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

  db.collection('users').findOne(
    {
      name: 'des levins'
    }, (error, result) => {
      if(error){
        return console.log("Error");
      }

      console.log(result);
    });






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


})
