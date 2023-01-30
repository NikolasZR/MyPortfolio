import React from "react";


import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import express from "../assets/express.png";
import mongodb from "../assets/mongodb.png";
import node from "../assets/node.png";
import redux from "../assets/redux.png";
import postgresql from "../assets/postgresql.png";
import bootstrap from "../assets/bootstrap.png";


const Experience = () => {
  const techs = [
   
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: bootstrap,
      title: "bootstrap",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: node,
      title: "node JS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: express,
      title: "express",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: mongodb,
      title: "mongodb",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: redux,
      title: "redux",
      style: "shadow-purple-400",
    },
    {
      id: 10,
      src: postgresql,
      title: "postgresql",
      style: "shadow-orange-400",
    },
    
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;