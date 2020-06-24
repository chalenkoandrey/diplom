const DishModel = require("./model").DishModel;
const DishOrderModel = require("./model").DishOrderModel;
const MessageModel = require("./model").MessageModel
function showall(req, res) {//show all dishes in DataBase
  DishModel.find()
    .exec()
    .then((result) => {
      res
        .status(200)
        .json({ result });
    })
    .catch((error) => {
      res
        .status(502)
        .send(error);
    })
}
function showByIdDetailed(req, res) {//show detailed  dish  by id
  var dishIdForShow = req.params.id;
  DishModel.findById(dishIdForShow)
    .exec()
    .then((result) => {
      if (result != null) {
        res.json({ result });
      }
      else {
        res
          .status(404)
          .send("No dish with this Id");
      }
    })
    .catch((error) => {
      res
        .status(502)
        .send(error);
    })
}
function showByIdSmall(req, res) {//show small dish by id
  var dishIdForShow = req.params.id;
  DishModel.findById(dishIdForShow).select("name cost image availability")
    .exec()
    .then((result) => {
      if (result != null) {
        res.json({ result });
      }
      else {
        res
          .status(404)
          .send("No dish with this Id");
      }
    })
    .catch((error) => {
      res
        .status(502)
        .send(error);
    })
}
function newOrder(req, res) {
  if (req.body.orderList && req.body.table && req.body.user) {
    const list = req.body.orderList.split(",");
    let order = new DishOrderModel({
      dishes: list,
      table: req.body.table,
      status: "new",
      user: req.body.user
    });
    order.save()
      .then((rezult) => {
        res
          .status(200)
          .json(
            rezult
          );
      })
      .catch((error) => {
        res
          .status(502)
          .send({ error: "Error add new order" + error });
      })
  }
  else {
    return res
      .status(449)
      .send({ error: "Not full params" });
  }
}
function showOrderById(req, res) {
  var orderIdForShow = req.params.id;
  DishOrderModel.findById(orderIdForShow)
    .exec()
    .then((result) => {
      if (result != null) {
        res.json({ result });
      }
      else {
        res
          .status(404)
          .send("No order with this Id");
      }
    })
    .catch((error) => {
      console.log(error);
    })
}
function dishOrderlist(req, res) {
  DishOrderModel.find()
    .exec()
    .then((result) => {
      res.json(result);
    })
}
function getMessages(req, res) {
  MessageModel.find()
    .then((result) => {
      console.log(result)
      res.json(result)
    })
}
module.exports = {
  showall, showByIdDetailed, showByIdSmall, showOrderById, dishOrderlist, newOrder, getMessages
};