import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Soy un programador full stack con experiencia en JavaScript, React, Bootstrap, HTML, CSS, Redux, Node.js, SQL y MongoDB/Mongoose. Me enfoco en desarrollar soluciones eficientes y escalables, y estoy comprometido con el uso de tecnologías actuales y mejores prácticas de programación. Estoy listo para llevar mis habilidades y conocimientos a su proyecto y ayudarlo a alcanzar sus objetivos tecnológicos

        </p>

        <br />

      </div>
    </div>
  );
};

export default About;
