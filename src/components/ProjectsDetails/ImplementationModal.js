import React from "react";
import { ButtonPrimary } from "../../helpers/Buttons";
import { imgImp } from "../../assets/data";

const ImplementationModal = ({ isOpen, closeModal }) => {
  const checkmark = String.fromCharCode(26);
  return (
    <div className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="impModal__container">
        <button className="impModal__close" onClick={closeModal}>
          <img src={imgImp.iconClose} alt="Imagen de modal" />
        </button>
        <img src={imgImp.imgModal} alt="Imagen de modal" />
        <div className="impModal__content">
          <div className="impModal__content-title">
            <img src={imgImp.serviceIcon} alt="Imagen de modal" />
            <h4>Restauración ecológica</h4>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <h6>¿Cómo lo hacemos?</h6>
          <ul className="impModal__content-bullets">
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting .
            </li>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting .
            </li>
            <li>Lorem Ipsum is simply dummy text of the printing.</li>
            <li>Lorem Ipsum is simply dummy text of the printing.</li>
            <li>Lorem Ipsum is simply dummy text of the printing.</li>
            <li>Lorem Ipsum is simply dummy text of the printing.</li>
            <li>Lorem Ipsum is simply dummy text of the printing.</li>
          </ul>
          <div className="impModal__content-buttons">
            <ButtonPrimary text="Proponé un proyecto" color="black" />
            <ButtonPrimary text="Ver los proyectos  →" color="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImplementationModal;
