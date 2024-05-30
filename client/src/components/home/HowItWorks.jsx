import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <div>
      <h1>How JobZee Works</h1>
      <div>
        <div className="">
          <FaUserPlus />
          <p>Create Account</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, culpa.
          </p>
        </div>
        <div className="">
          <MdFindInPage />
          <p>Find a Job/Post a Job</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, culpa.
          </p>
        </div>
        <div className="">
          <IoMdSend />
          <p>Apply For Job/Recruit Suitable Candidates</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, culpa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
