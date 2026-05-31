import { useState, useEffect } from 'react';
import styles from './RoleText.module.css';

function RoleText({ roles }) {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState('visible');

  useEffect(() => {
    const timer = setInterval(() => {
      setPhase('exiting');
      setTimeout(() => {
        setIndex((i) => (i + 1) % roles.length);
        setPhase('entering');
        requestAnimationFrame(() =>
          requestAnimationFrame(() => setPhase('visible'))
        );
      }, 350);
    }, 3000);
    return () => clearInterval(timer);
  }, [roles.length]);

  return (
    <span className={styles.wrapper}>
      <span className={`${styles.role} ${styles[phase]}`}>{roles[index]}</span>
      <span className={styles.dot} aria-hidden="true">•</span>
    </span>
  );
}

export default RoleText;
