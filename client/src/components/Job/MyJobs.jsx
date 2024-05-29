import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AllJobsComponents from "./components/AllJobsComponents";
import axios from "axios";

const MyJobs = () => {
  const [myJobs, setMyJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      axios.get("/api/job/my-jobs").then((res) => {
        setMyJobs(res?.data?.data);
      });
    } catch (error) {
      alert("Something wrong !!");
    }
  }, []);

  if (!localStorage.getItem("user")) {
    // navigate("/login");
    window.location.href = '/login'
  }

  return (
    <div className="flex flex-col gap-10">
      {myJobs ? (
        <>
          {myJobs.map((item) => (
            <AllJobsComponents key={item.jid} item={item} />
          ))}
        </>
      ) : (
        <>
          <h2>No Job Found</h2>
        </>
      )}
    </div>
  );
};

export default MyJobs;
