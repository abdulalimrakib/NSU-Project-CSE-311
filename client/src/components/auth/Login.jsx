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
