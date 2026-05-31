import { useState } from 'react';
import { profile } from '../../data/profile';
import styles from './ProfileImage.module.css';

function ProfileImage() {
  const [imgError, setImgError] = useState(false);
  const initials = profile.firstName.charAt(0);

  return (
    <div className={styles.wrapper}>
      <div className={styles.frame}>
        {!imgError ? (
          <img
            src={profile.profileImage}
            alt={`${profile.name} profile`}
            className={styles.image}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className={styles.fallback}>
            <span className={styles.initial}>{initials}</span>
            <span className={styles.hint}></span> {/* add the photo here */}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileImage;
