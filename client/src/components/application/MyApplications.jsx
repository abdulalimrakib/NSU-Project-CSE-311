import axios from "axios";
import React, { useEffect, useState } from "react";
import MyApplicationCard from "./components/MyApplicationCard";

const MyApplications = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    try {
      axios.get("/api/application/employer/getall").then((res) => {
        setApplications(res.data.data);
      });
    } catch (error) {
      alert(error.message);
    }
  }, []);

  if (!localStorage.getItem("user")) {
    window.location.href = '/login'
  }

  return (
    <div className="flex flex-col gap-10 space-y-3">
      {applications?.map((item) => (
        <MyApplicationCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default MyApplications;
