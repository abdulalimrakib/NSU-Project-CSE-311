import axios from "axios";
import React, { useEffect, useState } from "react";
import MyApplicationCard from "./components/MyApplicationCard";
import { useParams } from "react-router-dom";

const ApplicantsApplications = () => {
  const { jid } = useParams();
  const [applications, setApplications] = useState([]);
  // console.log(applications);

  useEffect(() => {
    try {
      axios.get(`/api/application/recruiter/${jid}`).then((res) => {
        setApplications(res.data.data.applications);
        // console.log(res.data.data.applications);
      });
    } catch (error) {
      alert(error.message);
    }
  }, [applications]);

  return (
    <div className="flex flex-col gap-10">
      {applications.map((item) => (
        <MyApplicationCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ApplicantsApplications;
