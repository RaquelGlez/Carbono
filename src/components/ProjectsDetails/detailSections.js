import { ButtonService } from "../../helpers/Buttons";
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
