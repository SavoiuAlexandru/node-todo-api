const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to database TodoApp');
    }

    console.log('connected to mongo db server');
    const db = client.db('TodoApp');

    // findOneAndUpdate
    db.collection('Todos').findOneAndUpdate({
            _id: new ObjectID('5c1a4fa03e88a72978c8e780')
        }, {
            $set: {
                completed: true
            }
        }, {
            returnOriginal: false
        }
    ).then((result) => {
        console.log(result);
    });

    // findOneAndUpdate
    db.collection('Users').findOneAndUpdate({
            _id: new ObjectID('5c1a5865c94b8b1dfc1b7cf4')
        }, {
            $set: {
                name: 'Gigi muschi'
            },
            $inc: {
                age: 1
            },
        }, {
            returnOriginal: false
        }
    ).then((result) => {
        console.log(result);
    });

    client.close();
});