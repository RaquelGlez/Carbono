import React from "react";
import { ButtonPrimary, ButtonService } from "../helpers/Buttons";
import { imgProyects } from "../assets/data";

const ProjectCard = (props) => {
  const {
    id,
    location,
    name,
    description,
    services,
    mainComponent,
    handleDetail,
  } = props;
  const imgProject = {
    P001: imgProyects[0],
    P002: imgProyects[1],
    P003: imgProyects[2],
    P004: imgProyects[3],
  };

  const imgProjectDefault = imgProyects[0];
  let img = imgProject[id] || imgProjectDefault;

  return (
    <article
      className={`projectCard__container ${mainComponent}`}
      onClick={mainComponent === "map-cards" ? handleDetail : null}
    >
      <img src={img} className="projectCard__img" alt="imagen del proyecto" />
      <div className={`projectCard__content ${mainComponent}`}>
        <h6 className="projectCard__location">{location}</h6>
        <h4 className="projectCard__title">{name}</h4>
        <p className="projectCard__description">{description}</p>
        <div className={`projectCard__services ${mainComponent}`}>
          {services.map((service, index) => (
            <ButtonService text={service} key={index} component="card" />
          ))}
        </div>
        <div className={`projectCard__btn-view-project ${mainComponent}`}>
          <ButtonPrimary
            color="white"
            text="ver proyecto completo"
            handle={handleDetail}
          />
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;

// mainComponent options
// project-cards for proyect cards
// map-cards for map cards
