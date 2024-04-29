import React from 'react'
import { IoHomeSharp } from "react-icons/io5";

import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='flex flex-col items-center px-[1rem] sm:px-[2rem] lg:px-[4rem] xl:px-[5rem] 2xl:px-[6rem] w-[100%] mx-auto'>
      <img src="../../../public/notfound.png" alt="" />
      <button className='flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
        <Link className='flex items-center gap-2' to={'/'}>Go to Home <IoHomeSharp/></Link>
      </button>
    </div>
  )
}

export default NotFound