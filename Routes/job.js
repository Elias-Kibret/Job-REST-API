const router = require("express").Router();

const {
	getAllJobs,
	updateJobs,
	deleteJobs,
	createJobs,
	getSingleJobs,
} = require("../Controller/job");

router.post("/job", createJobs);
router.delete("/");
