import ScrollReveal from '../ui/ScrollReveal';

function Timeline({ items }) {
  return (
    <div style={{ position: 'relative', borderLeft: '1px solid var(--color-border)', paddingLeft: '2rem' }}>
      {items.map((item, i) => (
        <ScrollReveal key={item.id} delay={i * 0.08}>
          <div style={{ position: 'relative', paddingBottom: i < items.length - 1 ? '2.5rem' : 0 }}>
            <span style={{
              position: 'absolute',
              left: 'calc(-2rem - 6px)',
              top: '6px',
              width: '0.75rem',
              height: '0.75rem',
              borderRadius: '50%',
              border: '2px solid var(--color-accent)',
              background: 'var(--color-white)',
            }} aria-hidden="true" />
            <span style={{ display: 'inline-block', marginBottom: '0.25rem', fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.05em', color: 'var(--color-accent)' }}>
              {item.period}
            </span>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-primary)' }}>
              {item.degree || item.role}
            </h3>
            <p style={{ marginTop: '0.25rem', fontSize: '0.9375rem', color: 'var(--color-muted)' }}>
              {item.school || item.company}
            </p>
            {item.description && (
              <p style={{ marginTop: '0.5rem', fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--color-muted)' }}>
                {item.description}
              </p>
            )}
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}

export default Timeline;
