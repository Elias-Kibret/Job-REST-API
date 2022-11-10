const router = require("express").Router();

const {
	getAllJobs,
	updateJobs,
	deleteJobs,
	createJobs,
	getSingleJobs,
} = require("../Controller/job");
const { route } = require("./auth");

router.route("/").post(createJobs).get(getAllJobs);
router.route("/:id").delete(deleteJobs).get(getSingleJobs).patch(updateJobs);
module.exports = router;
