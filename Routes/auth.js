const express = require("express");
const router = express.Router();
const validate = require("../middlewares/authentication");
const { login, register } = require("../Controller/auth");
router.post("/register", register);
router.post("/login", validate, login);

module.exports = router;
