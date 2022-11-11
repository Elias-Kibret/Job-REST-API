const userModel = require("../Model/user");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { UnauthenticatedError } = require("../errors");

const validate = async (req, res, next) => {
	//check header
	const authHeader = req.headers.token;

	if (!authHeader || !authHeader.startsWith("Bearer")) {
		throw new UnauthenticatedError("Authentication invalid");
		console.log(authHeader.startsWith("Bearer "));
	} else {
		const token = authHeader.split(" ")[1];

		try {
			const payload = jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
				if (err) {
					throw new UnauthenticatedError("InValid Token");
				} else {
					console.log(req.user);
					next();
				}
			});
		} catch (error) {
			throw new UnauthenticatedError(error);
		}
	}
};

module.exports = validate;
