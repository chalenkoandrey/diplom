const { ObjectID: ObjectId } = require('mongoose');
module.exports = [
  { _id: ObjectId(), name: 'картошка', 'cost': 50, 'weight': '200gr', 'time': '40min', 'image': "http://google.com", 'type': "garnish" },
  { _id: ObjectId(), name: 'макароны', 'cost': 40, 'weight': '200gr', 'time': '15min', 'image': "http://google.com", 'type': "garnish" },
  { _id: ObjectId(), name: 'котлетка', 'cost': 50, 'weight': '200gr', 'time': '30min', 'image': "http://google.com", 'type': "meat" }
];