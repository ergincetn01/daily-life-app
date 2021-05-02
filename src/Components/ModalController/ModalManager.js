import React from "react";
import { useSelector } from "react-redux";
import LoginModal from "../Modals/AuthModals/LoginModal";
import RegisterModal from "../Modals/AuthModals/RegisterModal";

export default function ModalManager() {
  const modalRepo = {
      LoginModal,
      RegisterModal,
    
  };
  const currentModal = useSelector((state) => state.modals);
  let renderedModal;
  if (currentModal) {
    const { modalType } = currentModal;
    const ModalComponent = modalRepo[modalType];
    renderedModal = <ModalComponent {...modalType} />;
  }

  return <span>{renderedModal}</span>;
}
