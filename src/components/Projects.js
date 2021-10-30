import React, { useEffect, useState } from "react";
import { getProjects } from "../helpers/getProjects";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getDataCards();
  }, []);

  const getDataCards = () => {
    getProjects().then((item) => {
      setProjects(item);
    });
  };

  return (
    <div className="projects__container" id="proyectos">
      <h3 className="projects__title">Todos nuestros proyectos</h3>
      <section className="projects__cards">
        {projects.map((project, index) => (
          <ProjectCard {...project} mainComponent="project-cards" key={index} />
        ))}
      </section>
    </div>
  );
};

export default Projects;
