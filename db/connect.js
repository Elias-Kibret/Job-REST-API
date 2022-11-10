const mongoose = require("mongoose");
const connectDB = (url) => {
	return mongoose.connect(
		url,
		{
			useNewUrlParser: true,
			userCreateIndex: true,
			useFindAndModify: false,
			useUnifeidToplopy: true,
		},
		() => {
			console.log("Connected DB");
		}
	);
};

module.exports = connectDB;
