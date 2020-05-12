const mongoose = require('mongoose');
module.exports = [
  {
    _id: mongoose.Types.ObjectId(),
    name: 'Гена',
    'login': 'admin',
    'password': '61646d696e',
    'role': 'admin',
    'todolist': null
  },
  {
    _id: mongoose.Types.ObjectId(),
    name: 'Федор',
    'login': 'manager',
    'password': '6d616e61676572',
    'role': 'manager',
    'todolist': null
  },
];