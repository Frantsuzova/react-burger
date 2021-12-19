import React from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import styles from './modal.module.css';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from '../modal-overlay/modal-overlay.jsx'

const Modal = ({ closeModal, children }) => {

    React.useEffect(() => {
        const handleEscPress = (evt) => {
            if (evt.key === "Escape") closeModal();
        };
        document.addEventListener("keydown", handleEscPress);
        return () => document.removeEventListener("keydown", handleEscPress);
    }, [closeModal]);

    return createPortal(
        <>
            <ModalOverlay onClick={closeModal}>
                <div className={styles.modal__space}>
                    <div className={styles.modal__close_icon}>
                        <CloseIcon type="primary" onClick={closeModal} />
                    </div>
                    {children}
                </div>
            </ModalOverlay>
        </>,
        document.getElementById('modal-root')
    );
};

export default Modal;

const modalPropsTypes = PropTypes.shape({
    closeModal: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
});

Modal.propTypes = modalPropsTypes.isRequired;