import React, { useEffect, useState } from "react";
import "../../../public/postJob.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PostJob = () => {
  const [formData, setFormData] = useState({});
  console.log(formData);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/job/post-job", formData).then((res) => {
        if (res?.data?.status === "failed") {
          console.log(res.data);
          throw new Error("Not enough data, Please fill all the fields");
        } else {
          //   window.location.href = "/job/all";
          alert("successfully Job Posted");
          navigate("/job/all");
        }
      });
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      window.location.href = "/login";
    }
  }, [localStorage.getItem("user")]);

  return (
    <div className="container">
      <div className="apply_box">
        <h1 className="text-3xl font-bold">Create Job Form</h1>
        <form action="form.php" onSubmit={postData}>
          <div className="form_container">
            <div className="from_control">
              <label className="postJob_label">Job Title</label>
              <input
                type="text"
                className="postJob_input"
                name="title"
                id="job_title"
                placeholder="Enter job title"
                onChange={handleChange}
              />
            </div>

            <div className="from_control">
              <label className="postJob_label">Job location</label>
              <input
                type="text"
                className="postJob_input"
                name="location"
                id="job_location"
                placeholder="Enter job location"
                onChange={handleChange}
              />
            </div>

            <div className="from_control">
              <label className="postJob_label">Salary From</label>
              <input
                type="text"
                className="postJob_input"
                name="salaryFrom"
                id="Salary_from"
                placeholder="Enter information"
                onChange={handleChange}
              />
            </div>

            <div className="from_control">
              <label className="postJob_label">Salary To</label>
              <input
                type="text"
                className="postJob_input"
                name="salaryTo"
                id="salary_To"
                placeholder="Enter information"
                onChange={handleChange}
              />
            </div>

            <div className="from_control">
              <label className="postJob_label">Job Description</label>
              <textarea
                className="postjob_textarea"
                id="description"
                name="description"
                rows="5"
                cols="50"
                placeholder="Enter job description"
                onChange={handleChange}
              ></textarea>
            </div>

            {/* <div className="from_control">
              <label className="block postJob_label">
                Is Expired?:
              </label>
              <input
                name="expired"
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring"
                disabled
                value={'false'}
              >
              </input>
            </div> */}
          </div>
          <div className="button_container">
            <button className="post-job-button" type="submit">
              Submit Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostJob;
