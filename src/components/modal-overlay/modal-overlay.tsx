import PropTypes from "prop-types";
import styles from './modal-overlay.module.css';
import { FunctionComponent } from "react";

const ModalOverlay: FunctionComponent<{ closeClick: any }> = ({ closeClick }) => {
    return (
        <div className={styles.overlay} onClick={closeClick}>
        </div>
    );
}

export default ModalOverlay;


