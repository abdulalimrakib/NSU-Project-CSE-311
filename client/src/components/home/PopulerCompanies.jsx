import React from "react";
import { FaMicrosoft, FaApple } from "react-icons/fa";
import { SiTesla } from "react-icons/si";
import PopularCatagoriComponents from "./components/PopularCatagoriComponents";
import PopulerCompaniesComponents from "./components/PopulerCompaniesComponents";

const PopulerCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "Microsoft",
      location: "Bashundhora R/A, Bangladesh",
      openPositions: 10,
      icon: <FaMicrosoft />,
    },
    {
      id: 2,
      title: "Tesla",
      location: "Bashundhora R/A, Bangladesh",
      openPositions: 5,
      icon: <SiTesla />,
    },
    {
      id: 3,
      title: "Apple",
      location: "Bashundhora R/A, Bangladesh",
      openPositions: 20,
      icon: <FaApple />,
    },
  ];

  return (
    <div>
      <h1>TOP COMPANIES</h1>
      <div>
        {companies.map((item) => (
          <PopulerCompaniesComponents key={item.id} item={item}/>
          // <PopularComComponents key={item.id} item={item}/>
        ))}
      </div>
    </div>
  );
};

export default PopulerCompanies;
