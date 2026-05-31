import { GraduationCap } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

function EducationCard({ item, index = 0 }) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <article style={{
        height: '100%',
        borderRadius: '1.5rem',
        border: '1px solid var(--color-border)',
        background: 'var(--color-white)',
        padding: '2rem',
        boxShadow: 'var(--shadow-soft)',
        transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
      }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-hover)'; e.currentTarget.style.borderColor = 'rgba(45,18,18,0.15)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = 'var(--shadow-soft)'; e.currentTarget.style.borderColor = 'var(--color-border)'; }}
      >
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: '3rem', height: '3rem', flexShrink: 0,
            borderRadius: '0.75rem', background: 'rgba(45, 18, 18, 0.08)',
            color: 'var(--color-accent)',
          }}>
            <GraduationCap size={22} strokeWidth={1.75} />
          </div>
          <div>
            <span style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.05em', color: 'var(--color-accent)' }}>
              {item.period}
            </span>
            <h3 style={{ marginTop: '0.25rem', fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-primary)' }}>
              {item.degree}
            </h3>
            <p style={{ marginTop: '0.25rem', fontSize: '0.9375rem', fontWeight: 500, color: 'var(--color-muted)' }}>
              {item.school}
            </p>
          </div>
        </div>
        {item.description && (
          <p style={{
            marginTop: '1.25rem', paddingTop: '1.25rem',
            borderTop: '1px solid var(--color-border)',
            fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--color-muted)',
          }}>
            {item.description}
          </p>
        )}
      </article>
    </ScrollReveal>
  );
}

export default EducationCard;
