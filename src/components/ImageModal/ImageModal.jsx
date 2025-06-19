
import ReactModal from "react-modal";
import styles from "./ImageModal.module.css";

ReactModal.setAppElement("#root");

function ImageModal({ image, isOpen, onRequestClose }) {
  if (!image) return null;

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <img
        src={image.urls.regular}
        alt={image.alt_description || ""}
        className={styles.img}
      />
      <div className={styles.info}>
        <p>
          <strong>Author:</strong> {image.user.name}
        </p>
        <p>
          <strong>Likes:</strong> {image.likes}
        </p>
        {image.description && (
          <p>
            <strong>Description:</strong> {image.description}
          </p>
        )}
        {image.alt_description && (
          <p>
            <strong>Alt Description:</strong> {image.alt_description}
          </p>
        )}
      </div>
      <button className={styles.close} onClick={onRequestClose}>
        Close
      </button>
    </ReactModal>
  );
}

export default ImageModal;
