const express = require("express");
const router = express.Router();

const { login, register } = require("../Controller/auth");
router.post("/regiser", register);
router.post("/login", login);

module.exports = router;
