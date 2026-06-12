import { useMagnetButton } from '../reactbits/useMagnetButton';
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
  loading = false,
  ...props
}) {
  const { ref, magnetStyle, magnetHandlers } = useMagnetButton();
  const classes = `${styles.base} ${variants[variant] ?? ''} ${sizes[size] ?? ''} ${className}`.trim();
  const { style, onMouseMove, onMouseLeave, ...restProps } = props;
  const interactiveProps = {
    ref,
    style: { ...style, ...magnetStyle },
    onMouseMove: (event) => {
      magnetHandlers.onMouseMove(event);
      onMouseMove?.(event);
    },
    onMouseLeave: (event) => {
      magnetHandlers.onMouseLeave(event);
      onMouseLeave?.(event);
    },
  };

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        {...restProps}
        {...interactiveProps}
      >
        {children}
      </a>
    );
  }

  const { type = 'button', disabled, ...buttonProps } = restProps;
  return (
    <button type={type} className={classes} disabled={loading || disabled} {...buttonProps} {...interactiveProps}>
      {loading && <span className={styles.spinner} aria-hidden="true" />}
      {children}
    </button>
  );
}

export default Button;
