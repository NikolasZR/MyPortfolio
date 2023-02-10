import React from "react";
import Diploma from "../assets/Diploma.PNG" ;

const Logros = () => {
  const techs = [
    {
      id: 1,
      src: Diploma,
      title: "Diploma",
      style: "shadow-yellow-500",
    },
  ];

    return (
        <div
      name="logros"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
        <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-4xl font-bold text-white">Logros</h1>
            <div className="flex flex-wrap justify-center items-center">
                {techs.map((tech) => (
                    <div
                        key={tech.id}
                        className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${tech.style}`}
                    >
                        

                        <img
                            src={tech.src}
                            alt={tech.title}
                            className="max-w-sm h-auto"
                        />
                        <p className="text-center">{tech.title}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
    );
};

export default Logros;