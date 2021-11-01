import React from "react";
import { tooltip_icon } from "../../assets/data";
import { useModal } from "../../helpers/useModal";
import ImplementationModal from "./ImplementationModal";

const ImplementationBtn = () => {
  const [isOpenModal, openModal, closeMOdal] = useModal(false);

  return (
    <>
      <button onClick={openModal}>
        <img src={tooltip_icon} alt="Icono de tooltip" />
      </button>
      <ImplementationModal isOpen={isOpenModal} closeModal={closeMOdal} />
    </>
  );
};

export default ImplementationBtn;
