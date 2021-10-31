import { ButtonPrimary, ButtonService } from "../../helpers/Buttons";
import { getImgProject } from "../../helpers/getImgProject";

export const DetailsCard = (props) => {
  const { id, name, location, description, services, problem } = props;
  let img = getImgProject(id);

  return (
    <div className="detailsCard__container">
      <div className="detailsCard__ubication">
        <div className="detailsCard__left-section">
          <h5>{location}</h5>
          <h3>{name}</h3>
          {services
            ? services.map((service, index) => (
                <ButtonService text={service} key={index} component="detail" />
              ))
            : null}

          <p className="detailsCard__description">{description}</p>
        </div>
        <img src={img} className="detailsCard__img" alt="imagen del proyecto" />
      </div>
      <div className="detailsCard__problematic">
        <h5>Problemática</h5>
        <p>{problem}</p>
      </div>
    </div>
  );
};

export const DetailImpact = ({ impactData }) => {
  return (
    <div className="detailsImpact__container">
      <h3 className="detailsImpact__title">Impacto</h3>
      <div className="detailsImpact__cards">
        {impactData.map((impact, index) => (
          <div className="detailsImpact__card" key={index}>
            <div className="detailsImpact__card-value">{impact.value}</div>
            <div className="detailsImpact__card-name">{impact.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const DetailDevelopProject = () => {
  return (
    <div className="details__develop-project">
      <h4>Somos desarrolladores de proyectos</h4>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
      <div className="details__develop-project-btn">
        <ButtonPrimary text="Proponer un proyecto" color="black" />
      </div>
    </div>
  );
};
