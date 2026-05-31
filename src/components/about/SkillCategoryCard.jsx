import { useRef, useEffect, useState } from 'react';
import styles from './SkillCategoryCard.module.css';

function SkillCategoryCard({ category, index = 0 }) {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setAnimate(true); obs.disconnect(); } },
      { rootMargin: '-60px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <article ref={ref} className={styles.card}>
      <div className={styles.header}>
        <span className={styles.accent} aria-hidden="true" />
        <h3 className={styles.title}>{category.title}</h3>
      </div>

      <ul className={styles.list}>
        {category.skills.map((skill, i) => (
          <li key={skill.name} className={styles.skillRow}>
            <div className={styles.skillMeta}>
              <span className={styles.skillName}>{skill.name}</span>
              <span className={styles.skillPct}>{skill.level}%</span>
            </div>
            <div className={styles.track}>
              <div
                className={styles.fill}
                style={{
                  width: animate ? `${skill.level}%` : 0,
                  transitionDelay: animate ? `${index * 0.1 + i * 0.07}s` : '0s',
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default SkillCategoryCard;
