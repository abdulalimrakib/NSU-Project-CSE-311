import axios from "axios";
import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import AllJobsComponents from "./components/AllJobsComponents";

const AllJobs = () => {
  const [allJobs, setAllJobs] = useState([]);
  // const navigate = useNavigate();

  useEffect(() => {
    try {
      axios.get("/api/job/getall").then((res) => {
        setAllJobs(res?.data?.data);
      });
    } catch (error) {
      alert("Something wrong !!");
    }
  }, [allJobs]);

  if (!localStorage.getItem("user")) {
    window.location.href = "/login";
  }

  return (
    <>
      <div className="w-full space-y-3">
        {allJobs ? (
          <>
            {allJobs.map((item) => (
              <AllJobsComponents key={item.jid} item={item} />
            ))}
          </>
        ) : (
          <>
            <h2>No Job Found</h2>
          </>
        )}
      </div>
    </>
  );
};

export default AllJobs;
