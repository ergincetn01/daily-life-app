import React from "react";
import { useSelector } from "react-redux";
import LoginModal from "../Modals/AuthModals/LoginModal";
import SignupModal from "../Modals/AuthModals/SignupModal";

export default function ModalManager() {
  const modalRepo = {
      LoginModal,
      SignupModal,
    
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
