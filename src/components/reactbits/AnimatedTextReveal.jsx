import styles from './ReactBits.module.css';

function AnimatedTextReveal({ text, className = '' }) {
  const words = text.split(' ');
  const segments = words.length > 3
    ? [...words.slice(0, -2), words.slice(-2).join(' ')]
    : words;

  return (
    <span className={`${styles.revealText} ${className}`.trim()} aria-hidden="true">
      {segments.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className={styles.revealWord}
          style={{ animationDelay: `${0.12 + index * 0.08}s` }}
          aria-hidden="true"
        >
          {word}
        </span>
      ))}
    </span>
  );
}

export default AnimatedTextReveal;
