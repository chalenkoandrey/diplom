const mongoose = require('mongoose');
module.exports = [
  {
    _id: mongoose.Types.ObjectId("5ea02537d68c558bcc012bdf"),
    name: 'картошка',
    'cost': 50,
    'weight': '200gr',
    'time': '40min',
    'image': "1.jpg",
    'type': "garnish",
    'availability': "available"
  },
  {
    _id: mongoose.Types.ObjectId("5ea02537d68c558bcc012be0"),
    name: 'макароны',
    'cost': 40,
    'weight': '200gr',
    'time': '15min',
    'image': "2.jpg",
    'type': "garnish",
    'availability': "available"
  },
  {
    _id: mongoose.Types.ObjectId("5ea02537d68c558bcc012be1"),
    name: 'котлетка',
    'cost': 50,
    'weight': '200gr',
    'time': '30min',
    'image': "3.jpg",
    'type': "meat",
    'availability': "available"
  },
  {
    _id: mongoose.Types.ObjectId(),
    name: 'рассыпчастый рис',
    'cost': 30,
    'weight': '200gr',
    'time': '30min',
    'image': "3.jpg",
    'type': "meat",
    'availability': "available"
  }
];