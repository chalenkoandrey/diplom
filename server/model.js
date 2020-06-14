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
  dishes: { type: [] },
  cost: { type: Number },
  table: { type: String },
  status: { type: String },
  client: { type: String },
  camera: { type: String }
});
const MessageSchema = new Schema({
  body: { type: String },
  author: { type: String }
});
const UserModel = mongoose.model('Client', Client);
const DishModel = mongoose.model('Dish', Dish);
const EmployeeModel = mongoose.model("Employee", Employee);
const DishOrderModel = mongoose.model("DishOrder", DishOrder);
const MessageModel = mongoose.model("Message", MessageSchema);
module.exports = { UserModel, DishModel, EmployeeModel, DishOrderModel, MessageModel };