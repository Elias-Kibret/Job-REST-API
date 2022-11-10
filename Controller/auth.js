const userModel = require("../Model/user");
const { StatusCode } = require("http-status-codes");
const bcrypt = require("bcrypt");
const register = async (req, res) => {
	const { name, email, password } = req.body;

	const salt = await bcrypt.genSalt(10);
	req.body.password = await bcrypt.hash(req.body.password, salt);
	const newUser = await new userModel(req.body).save();

	res.status(200).json({ ...newUser._doc });
};
const login = async (req, res) => {
	res.send("login user");
};

module.exports = {
	register,
	login,
};
