import React from 'react'
import { Link } from 'react-router-dom'
import "./login.css"

const Login = () => {
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

    </div>
  )
}

export default Login