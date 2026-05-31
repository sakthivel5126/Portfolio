import { profile } from '../../data/profile';
import styles from './Footer.module.css';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        &copy; {year} {profile.name}. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
