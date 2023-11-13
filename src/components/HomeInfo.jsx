import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons/";
const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" alt="" />
    </Link>
  </div>
);
//  This defines an arrow function that takes
// an object as its parameter and explicitly returns an empty expression (())

const renderContent = {
  1: (
    <h1
      className="sm:text-xl sm:leading-snug text-center 
    neo-brutalism-blue py-4 px-8 text-white mx-5"
    >
      Hello world, I am <span className="font-semibold">Santhosh Bahadur</span>
      👋🏻
      <br />A Fullstack Developer from Bengaluru, Karnataka .
    </h1>
  ),
  2: (
    <InfoBox
      text="Worked with many client and personal projects 
      and learnt a lot of things along the way"
      link="/about"
      btnText="Learn More"
    />
  ),
  3: (
    <InfoBox
      text="Made multiple projects wich impacted client in several ways, wanna know how?"
      link="/Projects"
      btnText="Visit my projects"
    />
  ),
  4: (
    <InfoBox
      text="Searching someone who can help you with your projects? "
      link="/contact"
      btnText="Contact me"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
