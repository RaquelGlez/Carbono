import React from "react";
import { useModal } from "../../helpers/useModal";
import ImplementationModal from "./ImplementationModal";

const ImplementationBtn = () => {
  const [isOpenModal, openModal, closeMOdal] = useModal(false);

  return (
    <>
      <button onClick={openModal}>boton de modal</button>
      <ImplementationModal isOpen={isOpenModal} closeModal={closeMOdal} />
    </>
  );
};

export default ImplementationBtn;
