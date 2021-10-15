//CRUD operations

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectID

const connectioURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


MongoClient.connect(connectioURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    db.collection('task').deleteOne({
        description: "Clean the house"
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})


