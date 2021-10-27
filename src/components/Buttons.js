import { dataButtons } from "../assets/data";
const ButtonPrimary = ({ text, color, handle }) => {
  // console.log(text, color);
  return (
    <button
      //onClick={handle}
      className={`button-primary ${color}`}
    >
      {text}
    </button>
  );
};

const ButtonService = ({ text }) => {
  // console.log(text);
  return (
    <button className={`button-service`}>
      <img src={dataButtons.serviceIcon} alt="etiqueta de servicio" />
      <span className="button-service__text">{text}</span>
    </button>
  );
};

export { ButtonPrimary, ButtonService };
