import React, { useState } from "react";
import { Link } from "react-router-dom";

import pen from "../../img/featherlight.svg";
import "./fab.css";

const Fab = () => {
  // const []

  return (
    <div className="fab">
      <Link>
        <img
          src={pen}
          alt="Pen"
          className="fab__icon"
          style={{ color: "white" }}
        />
      </Link>
    </div>
  );
};

export default Fab;
