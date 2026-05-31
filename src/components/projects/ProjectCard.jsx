import { ExternalLink, Layers } from 'lucide-react';
import { GitHubIcon } from '../ui/BrandIcons';
import Button from '../ui/Button';
import styles from './ProjectCard.module.css';

function ProjectCard({ project }) {
  const initials = project.title
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2);

  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        {project.image ? (
          <img src={project.image} alt={project.title} loading="lazy" className={styles.image} />
        ) : (
          <div className={styles.placeholder} aria-hidden="true">
            <Layers size={32} strokeWidth={1.25} />
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 600, letterSpacing: '0.05em', opacity: 0.6 }}>
              {initials}
            </span>
          </div>
        )}
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.desc}>{project.description}</p>
        <ul className={styles.techList}>
          {project.tech.map((t) => (
            <li key={t} className={styles.techTag}>{t}</li>
          ))}
        </ul>
        <div className={styles.actions}>
          {project.github && (
            <Button href={project.github} variant="outline" size="sm" external>
              <GitHubIcon size={16} /> GitHub
            </Button>
          )}
          {project.demo ? (
            <Button href={project.demo} size="sm" external>
              <ExternalLink size={16} /> Live Demo
            </Button>
          ) : (
            <span className={styles.noDemo}>Demo Not Available</span>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
