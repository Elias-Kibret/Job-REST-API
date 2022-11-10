const getAllJobs = async (req, res) => {
	res.send("get all");
};
const getSingleJobs = async (req, res) => {
	res.send("get single job");
};
const createJobs = async (req, res) => {
	res.send("create job");
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
