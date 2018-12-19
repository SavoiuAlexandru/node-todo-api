const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to database TodoApp');
    }

    console.log('connected to mongo db server');
    const db = client.db('TodoApp');

    // deleteMany
    db.collection('Todos').deleteMany({text:'eat lunch'}).then((result) => {
        console.log(result);
    });

    // deleteOne
    db.collection('Todos').deleteOne({text:'eat lunch'}).then((result) => {
        console.log(result);
    });

    // findOneAndDelete
    db.collection('Todos').findOneAndDelete({text:'eat lunch'}).then((result) => {
        console.log(result);
    });

    // findOneAndDelete for users
    db.collection('Users').findOneAndDelete({_id: new ObjectID('5c1a512a393a4531d4877084')}).then((result) => {
        console.log(result);
    });

    client.close();
});