import { createPortal } from "react-dom";
import styles from './modal.module.css';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from '../modal-overlay/modal-overlay';
import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from "../../services/actions";
import { FunctionComponent } from "react";
import { RootState } from '../../services/reducers/index';


const modalRoot = document.getElementById("modal-root")!;

const Modal: FunctionComponent<{ children: React.ReactNode }> = ({ children }) => {
    const dispatch = useDispatch();
    const { allClose } = useSelector((state: RootState) => state.modalInfo)
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
        modalRoot

    );

};

export default Modal;
