import React from "react";
import ModalWrapper from "../../ModalController/ModalWrapper";
import Register from "../../Auth/Register";

export default function RegisterModal() {
  return (
    <ModalWrapper size="large" title="Register">
        <Register/>
    </ModalWrapper>
  );
}