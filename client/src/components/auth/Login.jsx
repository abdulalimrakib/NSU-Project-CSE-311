
import React from 'react'
import { Link } from 'react-router-dom'
import "./login.css"
import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../../hooks/context";

const Login = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const { setIsAuthorized, setUser } = useContext(userContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/user/login", formData).then((res) => {
        if (res.data.status === "success") {
          setIsAuthorized(true)
          setUser(res.data.data)
          navigate("/");
          alert("log-in successful");
        } else {
          throw new Error("Invalid email or password");
        }
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className='div'>
      <div class="container">
        <img class="image" src="./JobZeelogo.png"></img>
      </div>
      <div class="div-clear"></div>


      <h1 class="h4">Login to your account</h1>

      <form>
        <div className='form'>

          <div className="em py-4">

            <label>Email Address:</label>
            <p><input className='border-b-2 focus:outline-none focus:border-[#00DFC0]' type="email" required />
            </p>
          </div>
          <div class="div-clear"></div>


          <div className="em py-4">
            <label>password:</label>
            <p className='p'><input className='border-b-2 focus:outline-none focus:border-[#00DFC0]' type="password" required />
            </p>
          </div>

          <div class="div-clear"></div>

          <button type="submit" class="btn">Login</button>

        </div>

        <div class="div-clear"></div>



        <div>
          <img class="image1" src="./login.png"></img>
        </div>

        <div class="div-clear"></div>


        <div >

          <div className='em2 py-4'>

            <h3 className='h3'>Do you have an account?</h3>

            <Link to={"/register"} className='li'>Register </Link>

          </div>

          <div class="div-clear"></div>

        </div>

        <div class="div-clear"></div>


      </form>
    <div>
      <h3>Login</h3>
      <form onSubmit={postData}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            className=""
            placeholder=""
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            className=""
            placeholder=""
            onChange={handleChange}
          />
        </div>

        <button> Login </button>
        <div>
          <p>Do you have an account?</p>
          <Link to={"/register"}>Register</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
