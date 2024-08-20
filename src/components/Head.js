import React from "react";
import { FaSun } from "react-icons/fa6";
import { BsFillMoonStarsFill } from "react-icons/bs";

const Head = () => {
  return (
    <div className="grid grid-flow-col">
      <div className="col-span-2">
        <h1>{"<Nikhil Rawal/>"}</h1>
      </div>
      <div className="flex col-span-1">
        <h1>About</h1>
        <h1>Skills</h1>
        <h1>Portfolio</h1>
        <h1>Contact</h1>
      </div>
      <div className="flex col-span-2">
        <FaSun />
        <BsFillMoonStarsFill />
      </div>
    </div>
  );
};

export default Head;
