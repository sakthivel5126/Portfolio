import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Award, X } from 'lucide-react';
import styles from './CertificationCard.module.css';

function CertificationCard({ cert }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;

    const scrollY = window.scrollY;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      window.scrollTo(0, scrollY);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <article className={styles.card}>
        <div className={styles.header}>
          <div className={styles.icon}><Award size={22} /></div>
          <div>
            <h3 className={styles.title}>{cert.name}</h3>
            <p className={styles.issuer}>{cert.issuer}</p>
            <span className={styles.year}>{cert.year}</span>
          </div>
        </div>

        {cert.file && (
          <button
            type="button"
            className={styles.viewButton}
            onClick={() => setIsOpen(true)}
          >
            Click here to view
          </button>
        )}
      </article>

      {isOpen && createPortal(
        <div
          className={styles.overlay}
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`${cert.name} certificate`}
        >
          <button
            type="button"
            className={styles.closeButton}
            onClick={() => setIsOpen(false)}
            aria-label="Close certificate preview"
          >
            <X size={22} />
          </button>

          <div
            className={styles.imageFrame}
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={cert.file}
              alt={`${cert.name} certificate from ${cert.issuer}`}
              className={styles.certificateImage}
            />
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}

export default CertificationCard;
