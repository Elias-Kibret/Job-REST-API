const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
	{
		company: {
			type: String,
			required: [true, "Please Enter your company name"],
			maxlength: 50,
		},
		postion: {
			type: String,
			required: [true, "Please provide position"],
			maxlength: 100,
		},
		status: {
			type: String,
			enum: ["interview", "declined", "pending"],
			default: "pending",
		},
		createdBy: {
			type: mongoose.Types.ObjectId,
			ref: "User",
			required: [true, "Please provide user"],
		},
	},
	{
		timestamps: true,
	}
);

const job = mongoose.model("Job", jobSchema);

module.exports = job;
