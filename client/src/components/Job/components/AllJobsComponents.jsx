import React from "react";
import { Link } from "react-router-dom";

const AllJobsComponents = ({ item }) => {
  const { jid, title, location, salaryFrom, salaryTo } = item;
  return (
    <div className="lg:px-[4rem] xl:px-[5rem] 2xl:px-[6rem] w-[100%] mx-auto py-3 flex items-end justify-between border-b-2">
      <div className="space-y-3">
        <h2 className="text-2xl font-semibold text-teal-800">{title}</h2>
        <i className="text-gray-500 self-end">{location}</i>
        <p>
          <span className="font-medium text-lg">Salary</span>:{" "}
          <b>
            <i>
              <span>{salaryFrom}</span>
            </i>
          </b>{" "}
          to{" "}
          <b>
            <i>
              <span>{salaryTo}</span>
            </i>
          </b>
        </p>
      </div>
      <Link to={`/job/${jid}`}>
        <button className="bg-teal-200 px-3 py-1 rounded-xl font-semibold border-2">Job details</button>
      </Link>
    </div>
  );
};

export default AllJobsComponents;
