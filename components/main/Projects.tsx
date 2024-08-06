import React from "react";
import ProjectCard from "./sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 pb-56">
        <ProjectCard
          src="/rover2.png"
          title="Rover&Out"
          discription="Rover and Out leverages advanced 3D modeling, interactive mapping, and dynamic data visualization to deliver a cutting-edge educational experience. Built with intuitive UI/UX design, real-time data integration, and robust performance optimization"
        />
          <ProjectCard
            src="/pawgang.png"
            title="Paw Gang"
            discription="An app leveraging Google Maps API to locate dog parks and schedule visits. It includes secure authentication, robust data encryption, and a protected database for storing user and park information. It includes extensive unit, integration, and end-to-end testing for reliability."
          />
        <ProjectCard
          src="/axios.png"
          title="Hop"
          discription="An app using Docker images to deploy virtual machines, enabling real-time browser interactions for users. It ensures robust security with authentication and encryption, available on web and mobile."
        />
      </div>
    </div>
  );
};

export default Projects;
