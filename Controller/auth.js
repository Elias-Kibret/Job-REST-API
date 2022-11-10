const userModel = require("../Model/user");
const { StatusCode } = require("http-status-codes");
const { BadRequestError } = require("../errors");
const bcrypt = require("bcrypt");
const register = async (req, res) => {
	const { name, email, password } = req.body;
	// if (!name) {
	// 	throw new BadRequestError("please Provide name");
	// }
	// if (!email) {
	// 	throw new BadRequestError("Please provide email");
	// }
	// if (!password) {
	// 	throw new BadRequestError("Please provide password");
	// }

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
