const { ObjectID: ObjectId } = require('mongoose');
module.exports = [
  { _id: ObjectId(), name: 'Гена', 'login': 'admin', 'password': 'admin', 'role': 'admin', 'todolist': null },
  { _id: ObjectId(), name: 'Федор', 'login': 'manager', 'password': 'manager', 'role': 'manager', 'todolist': null },
];