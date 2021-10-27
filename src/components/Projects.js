import React, { useEffect } from "react";
import { getProject, getProjects } from "../helpers/getProjects";
const Projects = () => {
  useEffect(() => {
    getProjects();
    getProject("P001");
  }, []);
  return (
    <div>
      <h3>Todos nuestros proyectos</h3>
      <div>Es el componente de proyectos</div>
    </div>
  );
};

export default Projects;
