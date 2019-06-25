const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {

  if (error) {
    return console.log("Cannot Connect");
  }

  const db = client.db(databaseName);

  db.collection('users').insertOne({

    name: "cormac levins",
    age: 21

  }, (error, result) => {
    if(error){
      return console.log("CAnnot Insert User");
    }

    console.log(result.ops);

  })
})
