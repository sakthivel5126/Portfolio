import { GraduationCap } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';
import styles from './EducationCard.module.css';

function EducationCard({ item, index = 0 }) {
  return (
    <ScrollReveal delay={index * 0.1} className={styles.reveal}>
      <article className={styles.card}>
        <div className={styles.header}>
          <div className={styles.icon}>
            <GraduationCap size={22} strokeWidth={1.75} />
          </div>
          <div className={styles.body}>
            <span className={styles.period}>{item.period}</span>
            <h3 className={styles.degree}>{item.degree}</h3>
            <p className={styles.school}>{item.school}</p>
          </div>
        </div>

        {item.description && (
          <p className={styles.footer}>{item.description}</p>
        )}
      </article>
    </ScrollReveal>
  );
}

export default EducationCard;
