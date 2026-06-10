import { profile } from '../../data/profile';
import { education } from '../../data/education';
import { skillCategories } from '../../data/skills';
import { certifications, experience } from '../../data/certifications';
import styles from './ResumeViewer.module.css';

function ResumePreview() {
  return (
    <article className={styles.resumeDocument}>
      <header className={styles.resumeDocHeader}>
        <h3 className={styles.resumeDocName}>{profile.name}</h3>
        <p className={styles.resumeDocContact}>
          {profile.email} · {profile.location}
        </p>
      </header>

      <section className={styles.resumeDocSection}>
        <h4 className={styles.resumeDocHeading}>Summary</h4>
        <p className={styles.resumeDocText}>{profile.bio}</p>
      </section>

      <section className={styles.resumeDocSection}>
        <h4 className={styles.resumeDocHeading}>Objective</h4>
        <p className={styles.resumeDocText}>{profile.objective}</p>
      </section>

      <section className={styles.resumeDocSection}>
        <h4 className={styles.resumeDocHeading}>Education</h4>
        <ul className={styles.resumeDocList}>
          {education.map((item) => (
            <li key={item.id} className={styles.resumeDocItem}>
              <strong>{item.degree}</strong>
              <span>{item.school} · {item.period}</span>
              {item.description && <span>{item.description}</span>}
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.resumeDocSection}>
        <h4 className={styles.resumeDocHeading}>Skills</h4>
        <div className={styles.resumeDocSkills}>
          {skillCategories.map((category) => (
            <div key={category.id}>
              <strong>{category.title}</strong>
              <p>{category.skills.map((skill) => skill.name).join(', ')}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.resumeDocSection}>
        <h4 className={styles.resumeDocHeading}>Training</h4>
        <ul className={styles.resumeDocList}>
          {experience.map((item) => (
            <li key={item.id} className={styles.resumeDocItem}>
              <strong>{item.role}</strong>
              <span>{item.company} · {item.period}</span>
              {item.description && <span>{item.description}</span>}
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.resumeDocSection}>
        <h4 className={styles.resumeDocHeading}>Certifications</h4>
        <ul className={styles.resumeDocList}>
          {certifications.map((cert) => (
            <li key={cert.id} className={styles.resumeDocItem}>
              <strong>{cert.name}</strong>
              <span>{cert.issuer} · {cert.year}</span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

export default ResumePreview;
