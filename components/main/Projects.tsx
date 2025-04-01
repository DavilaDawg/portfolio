"use client"

import React from "react";
import ProjectCard from "./sub/ProjectCard";
import Video from "./Video";

const Projects = () => {
    return (
        <div className="flex flex-col items-center justify-center py-2">
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
                My Projects
            </h1>
            <div className=" flex flex-col md:flex-row gap-10 px-10 ">
                <ProjectCard
                    src="/rover2.png"
                    url="https://github.com/DavilaDawg"
                    title="Rover&Out"
                    description="Rover and Out leverages advanced 3D modeling, interactive mapping, and dynamic data visualization to deliver a cutting-edge educational experience. Built with intuitive UI/UX design, real-time data integration, and robust performance optimization."
                />
                <ProjectCard
                    src="/pawgang.png"
                    url="https://github.com/DavilaDawg/paw-gang"
                    title="Paw Gang"
                    description="An app leveraging Google Maps API to locate dog parks and schedule visits. I was responsible for converting the codebase from JavaScript to TypeScript, developing secure authentication, and extensive unit, integration, and end-to-end testing for reliability."
                />
                <ProjectCard
                    src="/HOPLOGO.png"
                    url="https://github.com/hopwithfriends"
                    title="Hop"
                    description="An app using Docker images to deploy virtual machines, enabling real-time browser interactions for users. It ensures robust security with authentication and encryption, available on web and mobile."
                />
                 <ProjectCard
                    src="/gam1.png"
                    url="https://github.com/DavilaDawg/aliensVScows"
                    title="Aliens vs. Cows: Python Game"
                    description="A two player game where one player pilots the UFO in attempt to capture all the cows while avoiding obstacles in a limited amount of time and the opponent attempts to herd cows away from the UFO until time runs out."
                />
                <ProjectCard
                    src="/Mars.png"
                    url="https://github.com/DavilaDawg/mars_game.git"
                    title="Mars Exploration: Python Game"
                    description="Players take on the role of pioneers building a sustainable civilization on Mars. They can mine valuable resources, conduct research, and unlock technologies to overcome Mars' harsh environment. As they progress, they will expand colonies and tackle challenges."
                />
            </div>

            <Video/> 
        </div>
    );
};

export default Projects;