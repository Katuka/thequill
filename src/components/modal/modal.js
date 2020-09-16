import React from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";

import closeicon from "../../img/close.svg";
import "./modal.css";

const Modal = ({ children, close }) => {
  const content = (
    <motion.div
      className="modal"
      layout
      initial={{ x: "-10vh" }}
      animate={{ x: 0 }}
    >
      <div className="modal__header" onClick={close}>
        <img src={closeicon} alt="Close icon" />
      </div>
      <div className="modal__body" onClick={close}>
        {children}
      </div>
    </motion.div>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal"));
};

export default Modal;
