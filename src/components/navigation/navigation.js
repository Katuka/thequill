import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import logo from "../../img/feather.svg";
import face from "../../img/face.svg";
import menu from "../../img/menu.svg";
import Modal from "../modal/modal";
import Navlinks from "../navlinks/navlinks";
import Backdrop from "../backdrop/backdrop";

import "./navigation.css";

const Navigation = () => {
  const [openModal, setOpenModal] = useState(false);

  const onModalOpen = () => setOpenModal(true);
  const onModalClose = () => setOpenModal(false);

  return (
    <>
      {openModal && <Backdrop />}
      {openModal && (
        <Modal close={onModalClose}>
          <Navlinks />
        </Modal>
      )}
      <header className="navigation">
        <NavLink to="/">
          <img src={logo} alt="Feather" className="navigation__logo" />
        </NavLink>
        <div className="navigation__nav">
          <Navlinks />
        </div>
        <img
          src={menu}
          alt="Menu"
          className="navigation__hum"
          onClick={onModalOpen}
        />
      </header>
    </>
  );
};

export default Navigation;
