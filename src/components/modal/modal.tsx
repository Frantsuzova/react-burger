import { createPortal } from "react-dom";
import styles from './modal.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay';
import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from '../../services/hooks';
import { closeModal } from "../../services/actions";
import { FunctionComponent } from "react";
import { useHistory, useRouteMatch, useLocation } from "react-router-dom";

const modalRoot = document.getElementById("modal-root")!;

const Modal: FunctionComponent<{ children: React.ReactNode }> = ({ children }) => {
    const location = useLocation<{ background: { pathname: string } }>()
    const { url } = useRouteMatch();
    const history = useHistory();
    const closeIngredient = () => {
        dispatch(closeModal());
        history.replace({ pathname: location.state ? `${location.state.background.pathname}` : `${url}` });
    };

    const dispatch = useDispatch();
    const { allClose } = useSelector((state) => state.modalInfo)
    const escapeClosed = useCallback(
        (e: KeyboardEvent) => {
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
            <ModalOverlay closeClick={() => closeIngredient()} />

            <div className={styles.modal__space}>

                <div className={styles.modal__close_icon} onClick={() => closeIngredient()}>
                </div>
                <div className={styles.modalBody}>
                    {children}
                </div>
            </div>

        </>,
        modalRoot

    );

};

export default Modal;
