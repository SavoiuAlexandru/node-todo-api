const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to database TodoApp');
    }

    console.log('connected to mongo db server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('unable to insert todo', err);
    //     }
    //
    //     console.log(JSON.stringify(result.ops));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Alexandru Savoiu',
    //     age: 24,
    //     location: 'Alunu, Valcea'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('unable to insert user', err);
    //     }
    //
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
    // });

    client.close();
});