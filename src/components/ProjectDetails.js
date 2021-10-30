import React from "react";
import { ButtonPrimary } from "../helpers/Buttons";
import { IframeMap } from "./ProjectsDetails/IframeMap";

export const ProjectDetails = (props) => {
  console.log("props en projectsdetail:::", props);

  return (
    <div className="details__container" id="detail">
      <div className="details__card">Detalle de la tarjeta</div>
      <div className="details__implementation">
        <h3>Implementación</h3>
        <div>Aquí va o se llama al modal</div>
        <h5>Actividades de restauracion</h5>
        <div className="details__accordion">
          <div>Acordeon......</div>
        </div>
        <h5>Mapa de obras</h5>
        <div className="details__iframe-map">
          <IframeMap />
        </div>
        <h5>Galeria de imagenes</h5>
        <div className="details__carousel">
          <div>... Aquí va el corrousel</div>
        </div>
      </div>
      <div className="details__impact">
        <h3>Impacto</h3>
        <div>... Aqui van las tarjetas con los puntos de impacto</div>
      </div>
      <div className="details__develop-project">
        <h4>Somos desarrolladores de proyectos</h4>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <div className="details__develop-project-btn">
          <ButtonPrimary text="Proponer un proyecto" color="black" />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
