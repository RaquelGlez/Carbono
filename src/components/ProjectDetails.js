import React, { useState, useEffect } from "react";
import { getProject } from "../helpers/getProjects";
import {
  DetailsCard,
  DetailImpact,
  DetailDevelopProject,
} from "./ProjectsDetails/detailSections";
import ImplementationBtn from "./ProjectsDetails/ImplementationBtn";
import { IframeMap } from "./ProjectsDetails/IframeMap";

export const ProjectDetails = ({ projectId }) => {
  const [project, setProject] = useState({});
  useEffect(() => {
    getDataProject(projectId);
  }, [projectId]);

  const getDataProject = (projectId) => {
    getProject(projectId)
      .then((item) => {
        console.log("data project details", projectId);
        setProject(item);
      })
      .catch((err) => {
        console.log("hubo un error al obtener los datos", err);
        setProject(null);
      });
  };

  const {
    name,
    location,
    description,
    problem,
    services,
    impact,
    images,
    activities,
  } = project;

  return (
    <div className="details__container" id="detail">
      <DetailsCard {...project} />
      <div className="details__implementation-container ">
        <div className="details__implementation-title">
          <h3>Implementación</h3>
          <ImplementationBtn />
        </div>
        <div className="details__restauration-container">
          <h5>Actividades de restauracion</h5>
          <div>Acordeon......</div>
        </div>
        <h5>Mapa de obras</h5>
        {/* <div className="details__iframe-map">
          <IframeMap />
        </div> */}
        <h5>Galeria de imagenes</h5>
        <div className="details__carousel">
          <div>... Aquí va el corrousel</div>
        </div>
      </div>
      <div className="details__impact">
        {impact ? <DetailImpact impactData={impact} /> : null}
      </div>
      <DetailDevelopProject />
    </div>
  );
};

export default ProjectDetails;
