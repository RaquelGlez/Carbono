import { dataButtons } from "../assets/data";
const ButtonPrimary = ({ text, color, handle }) => {
  return (
    <button onClick={handle} className={`button-primary ${color}`}>
      {text}
    </button>
  );
};

const ButtonService = ({ text, component }) => {
  // component option:
  // card or detail
  return (
    <button className={`button-service ${component}`}>
      <img src={dataButtons.serviceIcon} alt="etiqueta de servicio" />
      <span className="button-service__text">{text}</span>
    </button>
  );
};

export { ButtonPrimary, ButtonService };
