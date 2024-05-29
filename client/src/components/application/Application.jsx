import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Application = () => {
  const [message, setMessage] = useState({});
  const { id } = useParams();
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessage({ ...message, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`/api/application/job/${id}`, message).then((res) => {
        if (res?.data?.status === "failed") {
          throw new Error("Not enough data, Please fill all the fields");
        } else {
          alert("Successfully Submited");
          navigate("/application/me")
        }
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="mx-auto max-w-2xl">
      <div className="w-full py-10 space-y-8">
        <h1 className="text-3xl font-medium text-[#27634D] ">Application Form</h1>
        <form action="" onSubmit={postData}>
          <p className="text-lg py-2 font-medium">Your CV/Cover Letter: </p>
          <textarea
            className="w-full border-2 border-indigo-300 focus:outline-none focus:border-[#27634D] p-2"
            name="message"
            rows="10"
            placeholder="Dear Sir ...."
            onChange={handleChange}
          />
          <div>
            <button className="bg-teal-400 border-2 text-lg font-medium px-3 py-1 rounded-lg">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Application;
