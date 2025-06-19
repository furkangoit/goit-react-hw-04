import styles from './Modal.module.css';

function Modal({ image, onClose }) {
  if (!image) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <img
          src={image.urls.regular}
          alt={image.alt_description}
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
        <button className={styles.close} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
