const job = require("../Model/job");
const jobModel = require("../Model/job");

const getAllJobs = async (req, res) => {
	const jobs = await jobModel
		.find({ createdBy: req.user._doc._id })
		.sort("createdAt");
	res.status(200).json({ jobs, count: jobs.length });
};
const getSingleJobs = async (req, res) => {};
const createJobs = async (req, res) => {
	req.body.createdBy = req.user._doc._id;
	const newJob = await jobModel(req.body).save();
	console.log(newJob);
	res.status(200).json(newJob);
};
const updateJobs = async (req, res) => {
	res.send("update job");
};
const deleteJobs = async (req, res) => {
	res.send("delete job");
};

module.exports = {
	getAllJobs,
	getSingleJobs,
	createJobs,
	updateJobs,
	deleteJobs,
};
