import React from "react";
import HeroSectionComponent from "./components/HeroSectionComponent";
import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";

const HeroSection = () => {
  const details = [
    {
      id: 1,
      title: "1,23,441",
      subTitle: "Live Job",
      icon: <FaSuitcase />,
    },
    {
      id: 2,
      title: "91220",
      subTitle: "Companies",
      icon: <FaBuilding />,
    },
    {
      id: 3,
      title: "2,34,200",
      subTitle: "Job Seekers",
      icon: <FaUsers />,
    },
    {
      id: 4,
      title: "1,03,761",
      subTitle: "Employers",
      icon: <FaUserPlus />,
    },
  ];

  return (
    <div>
      <div>
        <div>
          <h1>Find a job that suits your interest and skills</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
            ratione? Esse minima maiores fugit. Modi debitis, quaerat rem,
            mollitia aperiam tempora voluptatum fugiat impedit tenetur
            reiciendis, eos autem. Ipsam, alias!
          </p>
        </div>
        <div>
          <img src="../../../public/heroS.jpg" alt="" />
        </div>
      </div>

      <div>
        {details.map((item) => (
          <HeroSectionComponent key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
