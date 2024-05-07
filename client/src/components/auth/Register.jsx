import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({});
  const [showRecruiterFields, setShowRecruiterFields] = useState(false);
  const [showCandidateFields, setShowCandidateFields] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "userType" && value === "recruiter") {
      setShowRecruiterFields(true);
    } else {
      setShowRecruiterFields(false);
    }

    if (name === "userType" && value === "candidate") {
      setShowCandidateFields(true);
    } else {
      setShowCandidateFields(false);
    }
  };

  const postData = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/user/register", formData).then((res) => {
        if (res?.data?.status === "failed") {
          throw new Error("Not enough data, Please fill all the fields");
        } else {
          navigate("/login");
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <form action="" onSubmit={postData}>
        <div>
          <label htmlFor="firstName">First name: </label>
          <input
            type="text"
            name="firstName"
            placeholder=""
            className=""
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last name: </label>
          <input
            type="text"
            name="lastName"
            placeholder=""
            className=""
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            placeholder=""
            className=""
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            placeholder=""
            className=""
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="userType">Role: </label>
          <select name="userType" onChange={handleChange}>
            <option value="">Select Role</option>
            <option value="candidate">Candidate</option>
            <option value="recruiter">Recruiter</option>
          </select>
        </div>
        <div>
          <label htmlFor="mobile">Phone no. : </label>
          <input
            type="text"
            name="mobile"
            placeholder=""
            className=""
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="address">Address: </label>
          <input
            type="text"
            name="address"
            placeholder=""
            className=""
            onChange={handleChange}
          />
        </div>
        {showRecruiterFields && (
          <>
            <div>
              <label htmlFor="position">Position: </label>
              <input
                type="text"
                name="position"
                placeholder=""
                className=""
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="company">Company name : </label>
              <input
                type="text"
                name="company"
                placeholder=""
                className=""
                onChange={handleChange}
              />
            </div>
          </>
        )}
        {showCandidateFields && (
          <>
            <div>
              <label htmlFor="dob">Date of birth : </label>
              <input
                type="date"
                name="dob"
                placeholder=""
                className=""
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="highestEducation">Highest education : </label>
              <input
                type="text"
                name="highestEducation"
                placeholder=""
                className=""
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="experience">Experience : </label>
              <input
                type="number"
                name="experience"
                placeholder=""
                className=""
                onChange={handleChange}
              />
            </div>
          </>
        )}
        <button>Register</button>
      </form>
    </>
  );
};

export default Register;
