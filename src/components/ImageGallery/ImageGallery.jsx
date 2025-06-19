import styles from './ImageGallery.module.css';

function ImageGallery({ images, onImageClick }) {
  if (!images || images.length === 0) return null;

  return (
    <ul className={styles.gallery}>
      {images.map(image => (
        <li key={image.id}>
          <div onClick={() => onImageClick(image)} style={{ cursor: 'pointer' }}>
            <img src={image.urls.small} alt={image.alt_description || ''} />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;