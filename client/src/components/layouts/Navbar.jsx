import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { RiLogoutCircleRLine } from "react-icons/ri";
import axios from "axios";

const Navbar = () => {
  const [isMenuCliked, setIsMenuCliked] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    console.log(storedUser);
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleClick = async () => {
    try {
      await axios.get("/api/user/logout").then((res) => {
        console.log(res);
        if (res.data.status === "success") {
          localStorage.removeItem("user");
          setUser(null);
          window.location.href = '/login'
        } else {
          throw new Error("Something wrong!!!");
        }
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className= {`bg-teal-600 text-white ${localStorage.getItem('user') ? "block" : "hidden"}`}>
      <div className="flex justify-between items-center px-[1rem] sm:px-[2rem] lg:px-[4rem] xl:px-[5rem] 2xl:px-[6rem] w-[100%] mx-auto">
        <div>
          <a className=" font-bold" href="/">
            <img
              className="w-[30%] py-2"
              src="../../../public/JobZee-logos__white.png"
              alt="logo"
            />
          </a>
        </div>
        <ul className="hidden md:flex gap-5">
          <li className="flex items-center">
            <Link className="font-medium" to={"/"}>
              HOME
            </Link>
          </li>
          <li className="flex items-center">
            <Link className="font-medium" to={"/job/all"}>
              ALL JOBS
            </Link>
          </li>
          {user?.data && user?.data?.role === "recruiter" ? (
            <></>
          ) : (
            <>
              <li className="flex items-center">
                <Link className="font-medium" to={"/application/me"}>
                  MY APPLICATIONS
                </Link>
              </li>
            </>
          )}
          {user?.data && user?.data?.role === "recruiter" ? (
            <>
              <li className="flex items-center">
                <Link className="font-medium" to={"/job/post"}>
                  POST JOB
                </Link>
              </li>
              <li className="flex items-center">
                <Link className="font-medium" to={"/job/me"}>
                  POSTED JOBS
                </Link>
              </li>
            </>
          ) : (
            <></>
          )}
          {localStorage.getItem("user") ? (
            <button className="flex mx-auto text-white bg-red-700 border-0 py-2 px-2 rounded-full focus:outline-none hover:bg-red-800 text-lg">
              <a
                className="flex items-center gap-2"
                href={"/login"}
                onClick={handleClick}
              >
                <RiLogoutCircleRLine />
              </a>
            </button>
          ) : (
            <>
              {/* <a className='flex items-center gap-2' href={'/login'}>LOGIN</a> */}
            </>
          )}

          {/* <li><Link to={''}>logo2</Link></li> */}
        </ul>

        <div className="md:hidden">
          <div className="flex items-center gap-5">
            <ul className="flex gap-5">
              {localStorage.getItem("user") ? (
                <button className="flex mx-auto text-white bg-red-700 border-0 py-2 px-2 rounded-full focus:outline-none hover:bg-red-800 text-lg">
                  <a className="flex items-center gap-2" href={"/login"}>
                    <RiLogoutCircleRLine />
                  </a>
                </button>
              ) : (
                <button className="flex mx-auto text-blue-300 border-0 rounded-full focus:outline-none hover:text-blue-400 text-lg font-bold">
                  <a className="flex items-center gap-2" href={"/login"}>
                    LOGIN
                  </a>
                </button>
              )}
            </ul>
            {isMenuCliked ? (
              <MdClose onClick={() => setIsMenuCliked(false)} />
            ) : (
              <FiMenu onClick={() => setIsMenuCliked(true)} />
            )}
          </div>
        </div>
      </div>
      <div className={`container ${isMenuCliked ? "block" : "hidden"}`}>
        <ul>
          <li className="flex items-center">
            <Link className="font-medium" to={"/"}>
              HOME
            </Link>
          </li>
          <li className="flex items-center">
            <Link className="font-medium" to={"/job/all"}>
              ALL JOBS
            </Link>
          </li>
          {user && user.role === "recruiter" ? (
            <>
              {/* <li className="flex items-center">
                <Link className="font-medium" to={"/application/applicants"}>
                  APPLICANT'S APPLICATIONS
                </Link>
              </li> */}
            </>
          ) : (
            <>
              <li className="flex items-center">
                <Link className="font-medium" to={"/application/me"}>
                  MY APPLICATIONS
                </Link>
              </li>
            </>
          )}
          {user?.data && user?.data?.role === "recruiter" ? (
            <>
              <li className="flex items-center">
                <Link className="font-medium" to={"/job/post"}>
                  POST JOB
                </Link>
              </li>
              <li className="flex items-center">
                <Link className="font-medium" to={"/job/me"}>
                  POSTED JOBS
                </Link>
              </li>
            </>
          ) : (
            <></>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
