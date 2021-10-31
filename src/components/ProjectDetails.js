import React, { useState, useEffect } from "react";
import { ButtonPrimary, ButtonService } from "../helpers/Buttons";
import { getImgProject } from "../helpers/getImgProject";
import { getProject } from "../helpers/getProjects";
import {
  DetailDevelopProject,
  DetailsCard,
} from "./ProjectsDetails/detailSections";
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

  let img = getImgProject(projectId);

  return (
    <div className="details__container" id="detail">
      <DetailsCard {...project} />
      <div className="details__implementation">
        <h3>Implementación</h3>
        <div>Aquí va o se llama al modal</div>
        <h5>Actividades de restauracion</h5>
        <div className="details__accordion">
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
        <h3>Impacto</h3>
        <div>... Aqui van las tarjetas con los puntos de impacto</div>
      </div>
      <DetailDevelopProject />
    </div>
  );
};

export default ProjectDetails;
