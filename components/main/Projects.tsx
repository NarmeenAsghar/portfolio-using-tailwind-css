import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center pt-10 pb-20"
      id="projects"
    >
          <h1 className="Welcome-text pl-4 pr-4 text-[60px]">
            Projects
          </h1>
      <div className="h-full w-full flex flex-col items-center justify-around md:flex-row gap-10 px-10">
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;