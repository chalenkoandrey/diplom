const mongoose = require("./mongoose").mongoose;
const Schema = mongoose.Schema;
const Client = new Schema({
  name: { type: String, required: true },
  number: { type: String },
  count: { type: Number }
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
  type: { type: String, required: true },
  availability: { type: String, required: true }
});
const DishOrder = new Schema({
  dishes: { type: [String] },
  cost: { type: Number, required: true },
  table: { type: String, required: true },
  status: { type: String, required: true },
  client: { type: String, required: true }
});
const UserModel = mongoose.model('Client', Client);
const DishModel = mongoose.model('Dish', Dish);
const EmployeeModel = mongoose.model("Employee", Employee);
const DishOrderModel = mongoose.model("DishOrder", DishOrder);
module.exports = { UserModel, DishModel, EmployeeModel, DishOrderModel };