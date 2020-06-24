const express = require("express");
let router = express.Router();
const controller = require("./contoroller");
const authorization = require("./authorization");
router.route("/api/auth/sign_in")
  .post(authorization.login)
router.route("/registration/")
  .post(authorization.registration)
router.route("/api/db/showalldishes")
  .get(controller.showall);
router.route("/api/db/detailed/:id")
  .get(controller.showByIdDetailed)
router.route("/api/db/small/:id")
  .get(controller.showByIdSmall)
router.route("/api/db/order/show/:id")
  .get(controller.showOrderById)
router.route("/api/db/order/lsit")
  .get(controller.dishOrderlist)
router.route("/api/db/order/neworder/")
  .post(controller.newOrder)
router.route("/chat")
  .get(controller.getMessages);
module.exports.Router = router