import React, { useState, useEffect } from "react";
import { getProject } from "../helpers/getProjects";
import ImplementationBtn from "./ProjectsDetails/ImplementationBtn";
import { IframeMap } from "./ProjectsDetails/IframeMap";
import {
  DetailsCard,
  Restoration,
  DetailImpact,
  DetailDevelopProject,
} from "./ProjectsDetails/detailSections";

export const ProjectDetails = ({ projectId }) => {
  const [project, setProject] = useState({});
  useEffect(() => {
    getDataProject(projectId);
  }, [projectId]);

  const getDataProject = (projectId) => {
    getProject(projectId)
      .then((item) => {
        setProject(item);
      })
      .catch((err) => {
        console.log("hubo un error al obtener los datos", err);
        setProject({});
      });
  };

  const { impact, images, activities } = project;

  return (
    <div className="details__container" id="detail">
      <DetailsCard {...project} />
      <div className="details__implementation-container ">
        <div className="details__implementation-title">
          <h3>Implementación</h3>
          <ImplementationBtn />
        </div>
        <div className="details__restoration-container">
          <h5>Actividades de restauracion</h5>
          {activities && <Restoration activities={activities} />}
        </div>
        <h5>Mapa de obras</h5>
        <div className="details__iframe-map">
          <IframeMap />
        </div>
        {/*  <h5>Galeria de imagenes</h5>
        <div className="details__carousel">
          <div>carousel</div>
        </div> */}
      </div>
      <div className="details__impact">
        {impact && <DetailImpact impactData={impact} />}
      </div>
      <DetailDevelopProject />
    </div>
  );
};

export default ProjectDetails;
