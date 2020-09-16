import React, { useState } from "react";
import { Link } from "react-router-dom";

import pen from "../../img/featherlight.svg";
import Backdrop from "../backdrop/backdrop";
import AuthModal from "../modal/authmodal";
import AuthReminder from "../forms/authreminder";
import "./fab.css";

const Fab = () => {
  const [show, setShow] = useState(false);

  const onShow = () => setShow(true);
  const onClose = () => setShow(false);

  return (
    <React.Fragment>
      {show && <Backdrop onClick={onClose} />}
      {show && (
        <AuthModal close={onClose}>
          <AuthReminder />
        </AuthModal>
      )}
      <div className="fab" onClick={onShow}>
        <Link>
          <img
            src={pen}
            alt="Pen"
            className="fab__icon"
            style={{ color: "white" }}
          />
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Fab;
