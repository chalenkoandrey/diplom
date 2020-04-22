const { ObjectID: ObjectId } = require('mongoose');
module.exports = [
  { _id: ObjectId(), name: 'Вася', 'OrderDish': ["картошка", "котлетка"], 'cost': 100, 'number': 5 },
  { _id: ObjectId(), name: 'Петя', 'OrderDish': ["макароны", "котлетка"], 'cost': 80, 'number': 3 },
];