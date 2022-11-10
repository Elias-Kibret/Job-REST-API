const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "please provide name"],
		minlength: 3,
		maxlength: 50,
	},
	email: {
		type: String,
		required: [true, "please provide email"],
		minlength: 3,
		maxlength: 50,
		match: [
			/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
			"Incorrect email format",
		],
		unique: true,
	},
	password: {
		type: String,
		required: [true, "Please provide passwors"],
		minlength: 6,
	},
});

const user = mongoose.model("User", userSchema);
module.exports = user;
