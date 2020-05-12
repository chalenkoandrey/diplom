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
router.route("/api/db/showdishesbytype/")
  .get(controller.acceptFriendById)
router.route("/users/:id/requestFriend/")
  .post(authorization.isUserAuthorized, controller.addFriendsReqById)
router.route("/users/:id/acceptFriend/")
  .post(authorization.isUserAuthorized, controller.acceptFriendById)
router.route("/users/:id/deleteFriend/")
  .delete(authorization.isUserAuthorized, controller.deleteFriendById)
router.route("/users/:id/deleteRequest/")
  .delete(authorization.isUserAuthorized, controller.deleteFriendsReqById)
router.route("/homepage/")
  .get(authorization.isUserAuthorized, controller.showByToken)
module.exports.Router = router