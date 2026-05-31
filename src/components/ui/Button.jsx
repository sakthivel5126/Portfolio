import styles from './Button.module.css';

const variants = { primary: styles.primary, outline: styles.outline, ghost: styles.ghost };
const sizes = { sm: styles.sm, md: styles.md, lg: styles.lg };

function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  external,
  className = '',
  ...props
}) {
  const classes = `${styles.base} ${variants[variant] ?? ''} ${sizes[size] ?? ''} ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  const { type = 'button', ...buttonProps } = props;
  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}

export default Button;
