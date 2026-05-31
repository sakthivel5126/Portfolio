import { useState, useEffect } from 'react';
import styles from './ScrollProgress.module.css';

function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setWidth(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return <div className={styles.bar} style={{ width: `${width}%` }} aria-hidden="true" />;
}

export default ScrollProgress;
