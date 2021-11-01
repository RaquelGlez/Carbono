import React, { useState } from "react";
import { accordion } from "../../assets/data";

export const RestAccordion = ({ name, description }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="restAccordion__item">
      <div
        className="restAccordion__item-title"
        onClick={() => setIsActive(!isActive)}
      >
        <h6>{name}</h6>
        <div>
          {isActive ? (
            <img src={accordion.chevronUp} alt="Icono de apertura" />
          ) : (
            <img src={accordion.chevronDown} alt="Icono de cierre" />
          )}
        </div>
      </div>
      {isActive && (
        <div className="restAccordion__item-content">{description}</div>
      )}
    </div>
  );
};
