import PropTypes from "prop-types";
import styles from './modal-overlay.module.css'

const ModalOverlay = ({ closeClick }) => {
    return (
        <div className={styles.overlay} onClick={closeClick}>
        </div>
    );
}

export default ModalOverlay;

const modalOverlayPropsTypes = PropTypes.shape({
    onClick: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
});

ModalOverlay.propTypes = modalOverlayPropsTypes.isRequired;