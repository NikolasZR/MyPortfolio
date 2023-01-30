import React from "react";
import ecomerce from "../assets/portfolio/ecomerce.png"
import countries from "../assets/portfolio/countries.png";

const Portfolio = () => { 
    const projects = [
        {
            id: 1,
            name: "Countries App",
            image: countries,
            description: "App to search countries and filter by region",
            technologies: "React, Redux, CSS",
            link: "",
            github: "https://github.com/NikolasZR/PI-Countries-main",
        },
        {
            id: 2,
            name: "Ecomerce",
            image: ecomerce,
            description: "Ecomerce app",
            technologies: "React, Redux, CSS",
            link: "https://fullstackstore.vercel.app/",
            github: "https://github.com/norato777/fullstackstore"
        }
    ]
    return (
        <div
            name="portfolio"
            className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
        >
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Portfolio
                    </p>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="flex flex-col justify-center items-center p-4"
                        >
                            <img
                                src={project.image}
                                alt={project.name}
                                className="rounded-md duration-200 hover:scale-105"
                            />
                            <p className="text-2xl font-bold text-center mt-4">
                                {project.name}
                            </p>
                            <p className="text-center">{project.description}</p>
                            <p className="text-center">{project.technologies}</p>
                            <div className="flex justify-center items-center">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-2 flex items-center rounded-md hover:scale-110 duration-300"
                                >
                                    Visit
                                </a>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-2 flex items-center rounded-md hover:scale-110 duration-300"
                                >
                                    Github
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;