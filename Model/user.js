//? THE BEST WAY TO SETUP JWT

const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const userSchema = new mongoose.Schema(
	{
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
	},
	{
		methods: {
			createJWT() {
				return jwt.sign(
					{
						userId: this._id,
						name: this.name,
					},
					process.env.JWT_SECRET,
					{
						expiresIn: "1d",
					}
				);
			},

			comparePassword(canditatePassword) {
				const isMatch = bcrypt.compare(canditatePassword, this.password);
				return isMatch;
			},
		},
	}
);

// ** 👨‍💻  ELIAS KIBRET

userSchema.pre("save", async function (next) {
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
	next();
});

userSchema.methods.getName = function () {
	return this.name;
};

// userSchema.methods.createJWT = function () {
// 	return jwt.sign(
// 		{
// 			userId: this._id,
// 			name: this.name,
// 		},
// 		process.env.JWT_SECRET,
// 		{
// 			expiresIn: "1d",
// 		}
// 	);
// };

const user = mongoose.model("User", userSchema);
module.exports = user;

// Elias Kibret
