const mongoose = require('mongoose');
module.exports = [
  { _id: mongoose.Types.ObjectId(), name: 'Гена', 'login': 'admin', 'password': 'admin', 'role': 'admin', 'todolist': null },
  { _id: mongoose.Types.ObjectId(), name: 'Федор', 'login': 'manager', 'password': 'manager', 'role': 'manager', 'todolist': null },
];