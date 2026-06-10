import styles from './SkillCategoryCard.module.css';

function SkillCategoryCard({ category }) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <span className={styles.accent} aria-hidden="true" />
        <h3 className={styles.title}>{category.title}</h3>
      </div>

      <ul className={styles.list}>
        {category.skills.map((skill) => (
          <li key={skill.name} className={styles.skillRow}>
            <span className={styles.skillName}>{skill.name}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default SkillCategoryCard;
