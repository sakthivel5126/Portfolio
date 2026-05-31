import ScrollReveal from './ScrollReveal';
import styles from './SectionHeading.module.css';

function SectionHeading({ label, title, subtitle, align = 'left', className = '' }) {
  return (
    <ScrollReveal>
      <header className={`${styles.header} ${align === 'center' ? styles.center : ''} ${className}`}>
        {label && <span className={styles.label}>{label}</span>}
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </header>
    </ScrollReveal>
  );
}

export default SectionHeading;
