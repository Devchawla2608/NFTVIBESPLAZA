
const express = require("express");
const router = express.Router();
const userController = require("../controllers/user_controller.js");

router.post("/create", userController.create);
router.post("/createSession", userController.createSession);

module.exports = router;

