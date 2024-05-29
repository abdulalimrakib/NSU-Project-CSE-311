import React, { useState } from "react";
import {Link} from "react-router-dom"
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({});
  const [showRecruiterFields, setShowRecruiterFields] = useState(false);
  const [showCandidateFields, setShowCandidateFields] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "userType" && value === "recruiter") {
      setShowRecruiterFields(true);
    }
    if (name === "userType" && (value === "" || value === "candidate")) {
      setShowRecruiterFields(false);
    }
    if (name === "userType" && value === "candidate") {
      setShowCandidateFields(true);
    }
    if (name === "userType" && (value === "" || value === "recruiter")) {
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
          // navigate("/login");
          window.location.href = "/login";
          alert("successfully registered");
        }
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen mx-4">
      <div className="w-full max-w-2xl p-8 space-y-3 rounded-xl border bg-white font-sans">
        <h1 className="text-3xl font-bold text-center text-[#27634D]">
          Register
        </h1>
        <form action="" onSubmit={postData} className="space-y-6">
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="space-y-2 text-sm">
                <label htmlFor="firstName" className="block">
                  First name:{" "}
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder=""
                  className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring"
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2 text-sm">
                <label htmlFor="lastName" className="block">
                  Last name:{" "}
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder=""
                  className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring"
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2 text-sm">
                <label htmlFor="email" className="block">
                  Email:{" "}
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder=""
                  className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring"
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2 text-sm">
                <label htmlFor="password" className="block">
                  Password:{" "}
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder=""
                  className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-2 text-sm">
                <label htmlFor="userType" className="block">
                  Role:{" "}
                </label>
                <select
                  name="userType"
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring"
                >
                  <option value="">Select Role</option>
                  <option value="candidate">Candidate</option>
                  <option value="recruiter">Recruiter</option>
                </select>
              </div>
              <div className="space-y-2 text-sm">
                <label htmlFor="mobile" className="block">
                  Phone no. :{" "}
                </label>
                <input
                  type="text"
                  name="mobile"
                  placeholder=""
                  className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring"
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2 text-sm">
                <label htmlFor="address" className="block">
                  Address:{" "}
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder=""
                  className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring"
                  onChange={handleChange}
                />
              </div>
              {showRecruiterFields && (
                <>
                  <div className="space-y-2 text-sm">
                    <label htmlFor="position" className="block">
                      Position:{" "}
                    </label>
                    <input
                      type="text"
                      name="position"
                      placeholder=""
                      className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2 text-sm">
                    <label htmlFor="company" className="block">
                      Company name :{" "}
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder=""
                      className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring"
                      onChange={handleChange}
                    />
                  </div>
                </>
              )}
              {showCandidateFields && (
                <>
                  <div className="space-y-2 text-sm">
                    <label htmlFor="dob">Date of birth : </label>
                    <input
                      type="date"
                      name="dob"
                      placeholder=""
                      className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2 text-sm">
                    <label htmlFor="highestEducation">
                      Highest education :{" "}
                    </label>
                    <input
                      type="text"
                      name="highestEducation"
                      placeholder=""
                      className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2 text-sm">
                    <label htmlFor="experience">Experience : </label>
                    <input
                      type="number"
                      name="experience"
                      placeholder=""
                      className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring"
                      onChange={handleChange}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
          <button className="text-lg rounded-xl p-[10px] block w-full bg-[#27634D] text-white border-y-4 hover:bg-[#2b6e55] font-bold">
            Register
          </button>
          <div className="flex gap-2">
            <h3 className="">Do you have an account?</h3>
            <Link to={"/login"} className="li"><u>Login</u></Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
