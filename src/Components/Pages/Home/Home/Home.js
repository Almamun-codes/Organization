import React from "react";
import About from "../About/About";
import Carousel from "../Carousel/Carousel";
import CurrentCommittee from "../CurrentCommittee/CurrentCommittee";
import Members from "../Members/Members";
import NextEvent from "../NextEvent/NextEvent";

const Home = () => {
  return (
    <div>
      <Carousel></Carousel>
      <NextEvent></NextEvent>
      <About></About>
      <CurrentCommittee></CurrentCommittee>
      <Members></Members>
    </div>
  );
};

export default Home;
