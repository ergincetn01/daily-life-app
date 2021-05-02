import React from "react";
import ModalWrapper from "../../ModalController/ModalWrapper";
import Login from "../../Auth/Login";

export default function LoginModal() {
  return (
    <ModalWrapper size="large" title="Login">
      <Login/>
    </ModalWrapper>
  );
}