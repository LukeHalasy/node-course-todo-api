const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// var id = '5bafb46891dbec0e490a9dc5';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log('Todo', todo);
// });
//
// Todo.findById(id)
//   .then(todo => {
//     if (!todo) {
//       return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo);
//   })
//   .catch(e => console.log(e));

//User.findById

var userId = '6bab9d03b67436a7377a9a04';
User.findById(userId)
  .then(user => {
    if (!user) {
      return console.log('ID not found');
    }
    console.log('User by ID', user);
  })
  .catch(e => {
    console.log(e);
  });
