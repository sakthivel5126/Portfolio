import { profile } from '../../data/profile';
import RoleText from './RoleText';
import ProfileImage from './ProfileImage';
import AnimatedTextReveal from '../reactbits/AnimatedTextReveal';
import styles from './Hero.module.css';

function Hero() {
  return (
    <div className={styles.section}>
      <div className={styles.glow} />
      <div className={styles.grid}>
        <div className={styles.content}>
          <p className={styles.tagline}>{profile.heroTagline}</p>
          <h1 className={styles.title} aria-label={profile.heroHeading}>
            <AnimatedTextReveal text={profile.heroHeading} />
          </h1>
          <div className={styles.roles}>
            <RoleText roles={profile.roles} />
          </div>
          <p className={styles.description}>{profile.heroDescription}</p>
        </div>
        <div className={styles.imageCol}>
          <ProfileImage />
        </div>
      </div>
    </div>
  );
}

export default Hero;
