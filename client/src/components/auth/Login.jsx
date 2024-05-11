import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <h3>Login</h3>
        <form>
          <div>
            <label>Email:</label>
            <input type="email"/>
          </div>

          <div>
            <label>password:</label>
            <input type="password" />
          </div>

          <button> Login </button>

          <div >
            <p >Do you have an account?</p>
            <Link to={"/register"}>Register</Link>
          </div>
        </form>
      
    </div>
  )
}

export default Login