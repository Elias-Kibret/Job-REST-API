const job = require("../Model/job");
const jobModel = require("../Model/job");
const { NotFoundError, BadRequestError } = require("../errors/index");
const getAllJobs = async (req, res) => {
	const jobs = await jobModel
		.find({ createdBy: req.user._doc._id })
		.sort("createdAt");
	res.status(200).json({ jobs, count: jobs.length });
};
const getSingleJobs = async (req, res) => {
	const {
		user: { _id: userId },
		params: { id: jobId },
	} = req;

	const job = await jobModel.findOne({
		_id: jobId,
		createdBy: userId,
	});
	if (!job) {
		throw new NotFoundError(`No Job with id ${jobId}`);
	} else {
		res.status(200).json(job);
	}
};
const createJobs = async (req, res) => {
	req.body.createdBy = req.user._doc._id;
	const newJob = await jobModel(req.body).save();
	console.log(newJob);
	res.status(200).json(newJob);
};
const updateJobs = async (req, res) => {
	const {
		body: { company, position },
		user: { _id: userId },
		params: { id: jobId },
	} = req;
	if (company === "" && position === "") {
		throw new BadRequestError("Please provide what you want to update");
	} else {
		const job = await jobModel.findByIdAndUpdate(
			{ _id: jobId, createdBy: userId },
			{ $set: req.body },
			{ new: true, runValidators: true }
		);
	}
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
