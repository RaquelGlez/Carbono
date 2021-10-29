import React, { useEffect, useState } from "react";
import { dataMap, getProject, getProjects } from "../helpers/getProjects";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    //  getProjects();
    getDataCards();
    // getProject("P001");
    //dataMap();
  }, []);

  const getDataCards = () => {
    getProjects().then((item) => {
      setProjects(item);
    });
  };

  return (
    <div className="projects__container">
      <h3 className="projects__title">Todos nuestros proyectos</h3>
      <section className="projects__cards">
        {projects.map((project, index) => (
          <ProjectCard {...project} key={index} />
        ))}
      </section>
    </div>
  );
};

export default Projects;
