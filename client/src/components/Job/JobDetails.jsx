import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const JobDetails = () => {
  const { id } = useParams();
  const [jobDetails, setJobDetails] = useState();
  const [user, setUser] = useState({});
  console.log(jobDetails);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    try {
      axios.get(`/api/job/${id}`).then((res) => {
        setJobDetails(res?.data?.details);
      });
    } catch (error) {
      alert("Something wrong !!");
    }
  }, []);

  if (!localStorage.getItem("user")) {
    window.location.href = "/login";
  }

  return (
    <div>
      {jobDetails ? (
        <div
          className="lg:px-[4rem] xl:px-[5rem] 2xl:px-[6rem] w-[100%] mx-auto space-y-3 p-8"
        >
          <h1 className="text-3xl font-bold italic"><span className="font-serif font-bold text-teal-800">Job Title: </span>{jobDetails[0]?.title}</h1>
          <div>
            <p>
              <span className="text-lg font-serif font-bold text-teal-800">Location: </span> {jobDetails[0]?.location}
            </p>
          </div>
          <div className="flex gap-5">
            <span className="text-lg font-serif font-bold text-teal-800">Posted By</span>
            <div className="mt-7">
              <p className="text-lg font-medium">
                <span className="text-teal-900">Company: </span>
                {jobDetails[0]?.company}
              </p>
              <p className="text-lg font-medium">
                <span className="text-teal-900">Position: </span> {jobDetails[0]?.position}{" "}
              </p>
            </div>
          </div>
          <div>
            <p className="text-gray-600 text-[18px]">
              <span className="text-lg font-serif font-bold text-teal-800">Discription: </span> {jobDetails[0]?.description}
            </p>
          </div>
          <div>
            <p className="">
              <span className="text-lg font-serif font-bold text-teal-800">Salary Range:</span> <i className="font-bold text-green-600">{jobDetails[0]?.salaryFrom}</i> <span className="text-lg font-medium">to</span>{" "}
              <i className="font-bold text-green-600">{jobDetails[0]?.salaryTo}</i>
            </p>
          </div>
          <div className="pt-5">
            {user?.data &&
            user?.data?.role === "recruiter" &&
            user?.data?.uid === jobDetails[0]?.addedBy ? (
              <Link to={`/application/reqruiter/${jobDetails[0]?.jid}`}>
                <button className="bg-teal-300 px-3 py-1 font-medium text-lg rounded-lg border-2">Applications</button>
              </Link>
            ) : user?.data && user?.data?.role === "candidate" ? (
              <>
                <Link to={`/application/${jobDetails[0]?.jid}`}>
                  <button className="bg-teal-300 px-3 py-1 font-medium text-lg rounded-lg border-2">Apply Now</button>
                </Link>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default JobDetails;
