import React, { useState } from "react";
import axios from "axios";
import "../../../public/login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/user/login", formData).then((res) => {
        if (res.data.status === "success") {
          console.log(res.data);
          localStorage.setItem("user", JSON.stringify(res.data));
          alert("log-in successful");
          window.location.href = "/";
        } else {
          throw new Error("Invalid email or password");
        }
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="div">
      <div className="container mb-5">
        <img className="image" src="./JobZeelogo.png"></img>
      </div>
      <div className="div-clear"></div>

      <h1 className="h4">Login to your account</h1>

      <form onSubmit={postData}>
        <div className="form">
          <div className="em py-4">
            <label>Email Address:</label>
            <p>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                className="border-b-2 focus:outline-none focus:border-[#00DFC0] mt-3"
                required
              />
            </p>
          </div>
          <div className="div-clear"></div>

          <div className="em py-4">
            <label>password:</label>
            <p className="p">
              <input
                type="password"
                name="password"
                placeholder=""
                onChange={handleChange}
                className="border-b-2 focus:outline-none focus:border-[#00DFC0] mt-3"
                required
              />
            </p>
          </div>
          <div className="div-clear"></div>
          <button type="submit" className="btn">
            Login
          </button>
        </div>
        <div className="div-clear"></div>
        <div>
          <img className="image1" src="./login.png"></img>
        </div>

        <div className="div-clear"></div>

        <div>
          <div className="em2 py-4">
            <h3 className="h3">Do you have an account?</h3>
            <Link to={"/register"} className="li"><u>Register</u></Link>
          </div>
          <div className="div-clear"></div>
        </div>
        <div className="div-clear"></div>
      </form>
    </div>
  );
};

export default Login;
