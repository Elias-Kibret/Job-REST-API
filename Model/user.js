const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
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

userSchema.pre("save", async function (next) {
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
	next();
});

const user = mongoose.model("User", userSchema);
module.exports = user;

// Elias Kibret
