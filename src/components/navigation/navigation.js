import React, { useState} from "react";
import logo from "../../img/feather.svg";
import menu from "../../img/menu.svg";
import Modal from "../modal/modal";
import Navlinks from "../navlinks/navlinks";

import "./navigation.css";

const Navigation = () => {
  const [openModal, setOpenModal] = useState(false);

  const onModalOpen = () => setOpenModal(true);
  const onModalClose = () => setOpenModal(false);

  return (
    <>
    {openModal && <Modal close={onModalClose}>
        <h1>
          MODAL CONTENT
        </h1>
      </Modal>}
    <header className="navigation">
      <img src={logo} alt="Feather" className="navigation__logo" />
      <div className="navigation__nav">
        <Navlinks />
      </div>
      <img src={menu} alt="Menu" className="navigation__hum" onClick={onModalOpen} />
    </header>
    </>
  );
};

export default Navigation;
