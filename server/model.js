const mongoose = require("./mongoose").mongoose;
const Schema = mongoose.Schema;
const User = new Schema({
  name: { type: String, required: true },
  orderDish: { type: [String], required: true, },
  cost: { type: Number },
  number: { type: Number, required: true }
});
const Employee = new Schema({
  name: { type: String, required: true },
  login: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  todolist: { type: String, required: true }
});
const Dish = new Schema({
  name: { type: String, required: true },
  cost: { type: Number, required: true },
  weight: { type: Number, required: true },
  time: { type: String, required: true },
  image: { type: String, required: true },
  type: { type: String, required: true }
});
const UserModel = mongoose.model('User', User);
const DishModel = mongoose.model('Dish', Dish);
const EmployeeModel = mongoose.model("Employee", Employee)
module.exports = { UserModel, DishModel, EmployeeModel };