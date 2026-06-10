import { ExternalLink } from 'lucide-react';
import { GitHubIcon } from '../ui/BrandIcons';
import styles from './ProjectCard.module.css';

function ProjectCard({ project }) {
  return (
    <div className={styles.cardStatic}>
      <article className={styles.card}>
        <div className={styles.body}>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.desc}>{project.description}</p>
          <ul className={styles.detailList}>
            {project.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
          <ul className={styles.techList}>
            {project.tech.map((t) => (
              <li key={t} className={styles.techTag}>{t}</li>
            ))}
          </ul>
          <div className={styles.actions}>
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.githubLink}
                aria-label={`View ${project.title} on GitHub`}
              >
                <GitHubIcon size={16} />
                View on GitHub
                <ExternalLink size={14} />
              </a>
            ) : (
              <span className={styles.collegeLabel}>College project</span>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}

export default ProjectCard;
