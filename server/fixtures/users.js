const mongoose = require('mongoose');
module.exports = [
  { _id: mongoose.Types.ObjectId(), name: 'Вася', 'OrderDish': ["5ea02537d68c558bcc012bdf", "5ea02537d68c558bcc012be1"], 'cost': 100, 'number': 5 },
  { _id: mongoose.Types.ObjectId(), name: 'Петя', 'OrderDish': ["5ea02537d68c558bcc012be0", "5ea02537d68c558bcc012be1"], 'cost': 80, 'number': 3 },
];