import React from "react";
import { useDispatch } from "react-redux";
import { Modal } from "antd";
import { closeModal } from "../../Store/Actions/ModalActions";

export default function ModalWrapper({
  children,
  size,
  title,
  setWidth,
}) {
  const dispatch = useDispatch();
  return (
    <Modal
      width={setWidth}
      visible={true}
      onCancel={() => dispatch(closeModal())}
      size={size}
      footer=""
      title={title}
    >
      {children}
    </Modal>
  );
}
