import React from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";

import closeicon from "../../img/closedark.svg";
import logo from "../../img/feather.svg";
import "./authmodal.css";
import { Link } from "react-router-dom";

const AuthModal = ({ children, close }) => {
  const content = (
    <motion.div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <motion.div
        className="auth__modal"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      >
        <div className="auth__modal-header--wrapper">
          <img src={logo} alt="Close icon" className="" />
          <div className="auth__modal-header">
            <img
              src={closeicon}
              alt="Close icon"
              className="auth__modal-header--image"
              onClick={close}
            />
          </div>
        </div>
        <div className="modal__body">{children}</div>
      </motion.div>
    </motion.div>
  );
  return ReactDOM.createPortal(content, document.getElementById("auth-modal"));
};

export default AuthModal;
