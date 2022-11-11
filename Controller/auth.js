const userModel = require("../Model/user");
const { StatusCode } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
	const newUser = await new userModel(req.body).save();
	const token = newUser.createJWT();
	res.status(200).json({ name: { name: newUser.getName() }, token });
};

const login = async (req, res) => {
	const { email, password } = req.body;
	if (!email || !password) {
		throw new BadRequestError("Please provde email and passwored");
	} else {
		const user = await userModel.findOne({ email });

		if (!user) {
			throw new UnauthenticatedError("Invalid Credentials");
		} else {
			if (await user.comparePassword(user.password)) {
				const token = user.createJWT();
				res.status(200).json({ name: { name: user.getName() }, token });
			}
		}
	}
};
// ? ELIAS KIBRET
module.exports = {
	register,
	login,
};
