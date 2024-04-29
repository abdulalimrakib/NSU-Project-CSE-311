import { useContext, useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { userContext } from "../../hooks/context";
import { RiLogoutCircleRLine } from "react-icons/ri";


const Navbar = () => {
  const [isMenuCliked, setIsMenuCliked] = useState(false)
  const { isAuthorized, setIsAuthorized, user } = useContext(userContext)

  useEffect(() => {

  }, [])

  return (
    <div className="bg-teal-600 text-white">
      <div className="flex justify-between items-center px-[1rem] sm:px-[2rem] lg:px-[4rem] xl:px-[5rem] 2xl:px-[6rem] w-[100%] mx-auto">
        <div>
          <a className=" font-bold" href="/">
            <img className="w-[30%] py-2" src="../../../public/JobZee-logos__white.png" alt="logo" />
          </a>
        </div>
        <ul className="hidden md:flex gap-5">
          <li className="flex items-center"><Link className="font-medium" to={'/'}>HOME</Link></li>
          <li className="flex items-center"><Link className="font-medium" to={'/job/all'}>ALL JOBS</Link></li>
          {user && user.role === 'recruiter' ? (
            <>
              <li className="flex items-center">
                <Link className="font-medium" to={"/application/applicants"}>
                  APPLICANT'S APPLICATIONS
                </Link>
              </li>
            </>
          ) :
            (<>
              <li className="flex items-center">
                <Link className="font-medium" to={"/application/me"}>
                  MY APPLICATIONS
                </Link>
              </li>
            </>)
          }
          {user && user.role === 'recruiter' ? (
            <>
              <li className="flex items-center">
                <Link className="font-medium" to={"/job/post"}>
                  POST NEW JOB
                </Link>
              </li>
              <li className="flex items-center">
                <Link className="font-medium" to={"/job/me"}>
                  VIEW YOUR JOBS
                </Link>
              </li>
            </>
          ) :
            (<></>)
          }
          {
            isAuthorized ? (
              <button className='flex mx-auto text-white bg-red-700 border-0 py-2 px-2 rounded-full focus:outline-none hover:bg-red-800 text-lg'>
                <Link className='flex items-center gap-2' to={'/login'}><RiLogoutCircleRLine /></Link>
              </button>
            ) : (
              <button className='flex mx-auto text-blue-300 border-0 rounded-full focus:outline-none hover:text-blue-400 text-lg font-bold'>
                <Link className='flex items-center gap-2' to={'/login'}>LOGIN</Link>
              </button>
            )
          }

          {/* <li><Link to={''}>logo2</Link></li> */}
        </ul>

        <div className="md:hidden">
          <div className="flex items-center gap-5">
            <ul className="flex gap-5">
              {
                isAuthorized ? (
                  <button className='flex mx-auto text-white bg-red-700 border-0 py-2 px-2 rounded-full focus:outline-none hover:bg-red-800 text-lg'>
                    <Link className='flex items-center gap-2' to={'/login'}><RiLogoutCircleRLine /></Link>
                  </button>
                ) : (
                  <button className='flex mx-auto text-blue-300 border-0 rounded-full focus:outline-none hover:text-blue-400 text-lg font-bold'>
                    <Link className='flex items-center gap-2' to={'/login'}>LOGIN</Link>
                  </button>
                )
              }
            </ul>
            {
              isMenuCliked ? (<MdClose onClick={() => setIsMenuCliked(false)} />) : (<FiMenu onClick={() => setIsMenuCliked(true)} />)
            }
          </div>
        </div>
      </div>
      <div className={`container ${isMenuCliked ? "block" : "hidden"}`}>
        <ul>
          <li className="flex items-center"><Link className="font-medium" to={'/'}>HOME</Link></li>
          <li className="flex items-center"><Link className="font-medium" to={'/job/all'}>ALL JOBS</Link></li>
          {user && user.role === 'recruiter' ? (
            <>
              <li className="flex items-center">
                <Link className="font-medium" to={"/application/applicants"}>
                  APPLICANT'S APPLICATIONS
                </Link>
              </li>
            </>
          ) :
            (<>
              <li className="flex items-center">
                <Link className="font-medium" to={"/application/me"}>
                  MY APPLICATIONS
                </Link>
              </li>
            </>)
          }
          {user && user.role === 'recruiter' ? (
            <>
              <li className="flex items-center">
                <Link className="font-medium" to={"/job/post"}>
                  POST NEW JOB
                </Link>
              </li>
              <li className="flex items-center">
                <Link className="font-medium" to={"/job/me"}>
                  VIEW YOUR JOBS
                </Link>
              </li>
            </>
          ) :
            (<></>)
          }
        </ul>
      </div>
    </div>
  )
}

export default Navbar