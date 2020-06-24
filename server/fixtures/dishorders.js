const mongoose = require('mongoose');
module.exports = [
  {
    _id: mongoose.Types.ObjectId(),
    dishes: ["5ea02537d68c558bcc012bdf", "5ea02537d68c558bcc012be1"],
    'cost': 100,
    'table': 5,
    status: "in process",
    client: "5ea14b99a67540001ec441b6"
  },
  {
    _id: mongoose.Types.ObjectId(),
    dishes: ["5ea02537d68c558bcc012be0", "5ea02537d68c558bcc012be1"],
    'cost': 80,
    'table': 3,
    status: "ready",
    client: "5ea14b99a67540001ec441b7"
  },
];