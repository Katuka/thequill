import React from "react";
import ReactDOM from "react-dom";

import closeicon from "../../img/close.svg";
import "./modal.css";

const Modal = ({ children, close }) => {
  const content = (
    <div className="modal">
      <div className="modal__header" onClick={close}>
        <img src={closeicon} alt="Close icon" />
      </div>
      <div className="modal__body" onClick={close}>
        {children}
      </div>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal"));
};

export default Modal;
