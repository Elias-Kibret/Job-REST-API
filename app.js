require("dotenv").config();
require("express-async-errors");
const express = require("express");
const connectDB = require("./db/connect");
const validate = require("./middlewares/authentication");
const app = express();

//Routes
const authRoute = require("./Routes/auth");
const jobRoute = require("./Routes/job");

// Connect DB

// Middlewares
app.use(express.json());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/job", validate, jobRoute);

const PORT = process.env.PORT || 5000;

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);

		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`);
		});
	} catch (error) {
		console.log(error);
	}
};

start();
