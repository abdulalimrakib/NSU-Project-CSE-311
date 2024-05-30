import axios from "axios";
import React, { useEffect, useState } from "react";

const MyApplicationCard = ({ item }) => {
  console.log(item);
  const { id, name, email, mobile, address, message } = item;
  const [user, setUser] = useState({});

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [item]);

  const deleteApplication = async () => {
    try {
     await axios.delete(`/api/application/delete/${id}`)

    } catch (error) {
      alert("Something Wrong")
    }
  };

  return (
    <div className="lg:px-[4rem] xl:px-[5rem] 2xl:px-[6rem] w-[100%] mx-auto py-5 border-b-2">
      <div className="flex space-x-1 items-center text-xl">
        <h3 className="font-bold font-serif text-teal-800">Name:</h3>
        <p>{name}</p>
      </div>
      <div className="flex space-x-1 items-center text-xl">
        <h3 className="font-bold font-serif text-teal-800">Email:</h3>
        <p>{email}</p>
      </div>
      <div className="flex space-x-1 items-center text-xl">
        <h3 className="font-bold font-serif text-teal-800">Phone:</h3>
        <p>{mobile}</p>
      </div>
      <div className="flex space-x-1 items-center text-xl">
        <h3 className="font-bold font-serif text-teal-800">Address:</h3>
        <p>{address}</p>
      </div>
      <div className="flex space-x-1 items-center text-xl">
        <h3 className="font-bold font-serif text-teal-800">Cover Letter:</h3>
        <p>{message}</p>
      </div>
      <div>
        {user?.data && user?.data?.role === "recruiter" ? (
          <>
            <button onClick={deleteApplication}>Delete Application</button>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default MyApplicationCard;
