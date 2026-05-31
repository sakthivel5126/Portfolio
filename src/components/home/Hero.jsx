import { profile } from '../../data/profile';
import RoleText from './RoleText';
import ProfileImage from './ProfileImage';
import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.glow} />
      <div className={styles.grid}>
        <div className={styles.content}>
          <p className={styles.tagline}>{profile.heroTagline}</p>
          <h1 className={styles.title}>{profile.heroHeading}</h1>
          <div className={styles.roles}>
            <RoleText roles={profile.roles} />
          </div>
          <p className={styles.description}>{profile.heroDescription}</p>
        </div>
        <div className={styles.imageCol}>
          <ProfileImage />
        </div>
      </div>
    </section>
  );
}

export default Hero;
