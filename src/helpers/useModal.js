import { useState } from "react";

export const useModal = (initialValue = false) => {
  const [isOpen, setIsOpen] = useState(initialValue);

  const openModal = () => {
    console.log("se presiono abrir modal");
    setIsOpen(true);
  };
  const closeModal = () => setIsOpen(false);
  return [isOpen, openModal, closeModal];
};
