import React from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";

import "./backdrop.css";

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <motion.div
      layout
      className="backdrop"
      onClick={props.onClick}
    ></motion.div>,
    document.getElementById("backdrop")
  );
};

export default Backdrop;
