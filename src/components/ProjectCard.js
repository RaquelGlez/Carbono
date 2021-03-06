import React from "react";
import { ButtonPrimary, ButtonService } from "../helpers/Buttons";
import { getImgProject } from "../helpers/getImgProject";

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

  let img = getImgProject(id);

  const viewProjectDetail = () => {
    handleDetail(id);
  };

  return (
    <article
      className={`projectCard__container ${mainComponent}`}
      onClick={mainComponent === "map-cards" ? viewProjectDetail : null}
    >
      <img src={img} className="projectCard__img" alt="imagen del proyecto" />
      <div className={`projectCard__content ${mainComponent}`}>
        <h6 className={`projectCard__location ${mainComponent}`}>{location}</h6>
        <h4 className={`projectCard__title ${mainComponent}`}>{name}</h4>
        <p className={`projectCard__description ${mainComponent}`}>
          {description}
        </p>
        <div className={`projectCard__services ${mainComponent}`}>
          {services.map((service, index) => (
            <ButtonService text={service} key={index} component="card" />
          ))}
        </div>
        <div className={`projectCard__btn-view-project ${mainComponent}`}>
          <ButtonPrimary
            color="white"
            text="ver proyecto completo"
            handle={viewProjectDetail}
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
