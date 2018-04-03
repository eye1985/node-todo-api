const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

const id = '5abf81e0dc1d9734ada64533';
const userId = '5abab23e0a1a700594e5154b';

if(!ObjectID.isValid(id)){
    return console.log('ID not valid');
}

// Todo.find({
//     _id: id,
// }).then((todos) => {
//     console.log('Todos', todos);
// });
//
// Todo.findOne({
//     _id: id,
// }).then((todos) => {
//     console.log('Todo', todos);
// });
//
// Todo.findById(id)
//     .then(todos => {
//         if(!todos){
//             return console.log('Id not found');
//         }
//         console.log('Todo by id', todos);
//     });


User.findById(userId)
    .then(user => {
        if(!user){
            return console.log('User does not exist');
        }

        console.log('User found: ', JSON.stringify(user, undefined, 2));
    }).catch(e => {
        console.log('Error: ', e);
    });