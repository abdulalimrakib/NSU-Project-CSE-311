const router = require("express").Router();
const { verifyToken } = require("../config/authentication");
const { getAllJobs, postJob, getMyJobs, updateJob, deleteJob, jobDetails } = require("../controller/job.controller");

router.get("/getall", getAllJobs);
router.post("/post-job", verifyToken, postJob);
router.get("/my-jobs", verifyToken, getMyJobs);
router.put("/update/:jid", verifyToken, updateJob);
router.delete("/delete/:jid", verifyToken, deleteJob);
router.get("/:jid", verifyToken, jobDetails);

module.exports = router;
