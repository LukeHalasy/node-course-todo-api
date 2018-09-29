const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then(result => {
//   console.log(result);
// });

// Todo.findOneAndRemove

// Todo.findOneAndRemove({_id: '5bb005c99303276c2fd87d81'}).then((todo) => {
//
// });

// Todo.findByIdAndRemove

Todo.findByIdAndRemove('5bb005c99303276c2fd87d81').then(todo => {
  console.log(todo);
});
