import React from 'react'
import ReactDOM from "react-dom";

import closeicon from "../../img/close.svg";
import "./modal.css";

const Modal = ({children, close }) => {
    const content = (
        <div className="modal">
            <div className="modal__header">
                <img src={closeicon} alt="Close icon" onClick={close} />
            </div>
            <div className="modal__body">
                {children}
            </div>
        </div>
    )
    return (
        ReactDOM.createPortal(content, document.getElementById('modal'))
    )
}

export default Modal;