import { createPortal } from "react-dom";
import styles from './modal.module.css';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from '../modal-overlay/modal-overlay.jsx';
import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from "../../services/actions";

const Modal = ({ children }) => {
    const dispatch = useDispatch();
    const { allClose } = useSelector(state => state.modalInfo)
    const escapeClosed = useCallback(
        (e) => {
            if (e.key === "Escape") {
                dispatch(closeModal())
            }
        },
        []
    );

    useEffect(() => {
        document.addEventListener("keydown", escapeClosed);
        return () => {
            document.removeEventListener("keydown", escapeClosed);
        };
    }, []);

    if (allClose) {
        return null
    }

    return createPortal(
        <>
            <ModalOverlay closeClick={() => dispatch(closeModal())} />
            <div className={styles.modal__space}>
                <div className={styles.modal__close_icon}>
                    <CloseIcon type="primary" onClick={() => dispatch(closeModal())} />
                </div>
                {children}
            </div>

        </>,
        document.getElementById('modal-root')
    );
};

export default Modal;
