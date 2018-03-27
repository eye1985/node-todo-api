// const MongoClient = require('mongodb').MongoClient;

const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');

    // db.collection('Todos')
    //     .findOneAndUpdate({
    //         _id : new ObjectID('5ab9edae5d02a577d5c48d11')
    //     }, {
    //         $set : {
    //             completed : true
    //         }
    //     }, {
    //         returnOriginal : false
    //     }).then(result => {
    //     console.log(result);
    // });

    db.collection('Users')
        .findOneAndUpdate({
            _id : new ObjectID('5ab9ddf1b38c0f260375ed7c')
        },{
            $set : {
                name : 'erik'
            },

            $inc : {
                age : 1
            }
        }, {
            returnOriginal : false
        })
        .then(result => {
            console.log(result);
        })

    // client.close();
});