import { Download, Award, ExternalLink, Mail } from 'lucide-react';

import Navbar        from './components/layout/Navbar';
import Footer        from './components/layout/Footer';
import ScrollProgress from './components/ui/ScrollProgress';
import Hero          from './components/home/Hero';
import SectionHeading from './components/ui/SectionHeading';
import ScrollReveal  from './components/ui/ScrollReveal';
import SkillCategoryCard  from './components/about/SkillCategoryCard';
import EducationCard      from './components/about/EducationCard';
import ProfessionalLinks  from './components/about/ProfessionalLinks';
import ProjectCard   from './components/projects/ProjectCard';
import Timeline      from './components/about/Timeline';
import Button        from './components/ui/Button';
import ContactForm   from './components/contact/ContactForm';

import { profile }       from './data/profile';
import { education }     from './data/education';
import { skillCategories } from './data/skills';
import { projects }      from './data/projects';
import { certifications, experience } from './data/certifications';

import s  from './App.module.css';
import layout from './styles/shared.module.css';

function App() {
  return (
    <div className={s.page}>
      <ScrollProgress />
      <Navbar />

      <main className={s.main}>

        {/* ── HOME ── */}
        <section id="home">
          <Hero />
        </section>

        {/* ── ABOUT ── */}
        <section id="about" className={s.sectionWhite}>
          <div className={layout.container}>
            <SectionHeading
              label="About"
              title="Get to Know Me"
              align="center"
            />

            <ScrollReveal>
              <div className={layout.card} style={{ marginBottom: '2rem' }}>
                <p style={{ fontSize: '1.0625rem', lineHeight: 1.85, color: 'var(--color-muted)' }}>
                  {profile.bio}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div
                className={layout.card}
                style={{ borderLeft: '4px solid var(--color-accent)', background: 'var(--color-surface)' }}
              >
                <p style={{ fontSize: '1.0625rem', lineHeight: 1.7, color: 'var(--color-muted)' }}>
                  {profile.objective}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section className={s.sectionSurface}>
          <div className={layout.container}>
            <SectionHeading
              label="Expertise"
              title="Skills"
              subtitle="Proficiency across languages, frameworks, and tools."
              align="center"
            />
            <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              {skillCategories.map((cat, i) => (
                <SkillCategoryCard key={cat.id} category={cat} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── EDUCATION ── */}
        <section className={s.sectionWhite}>
          <div className={layout.container}>
            <SectionHeading
              label="Education"
              title="Academic Background"
              subtitle="My educational journey and foundations."
              align="center"
            />
            <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              {education.map((item, i) => (
                <EducationCard key={item.id} item={item} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── PROFESSIONAL LINKS ── */}
        <section className={s.sectionSurface}>
          <div className={layout.container}>
            <SectionHeading
              label="Connect"
              title="Professional Links"
              subtitle="Find me on these platforms."
              align="center"
            />
            <ProfessionalLinks />
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section id="projects" className={s.sectionWhite}>
          <div className={layout.containerNarrow}>
            <SectionHeading
              label="Work"
              title="Projects"
              subtitle="Applications and tools I've built — from concept to deployment."
              align="center"
            />
            <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              {projects.map((project, i) => (
                <ScrollReveal key={project.id} delay={(i % 3) * 0.08}>
                  <ProjectCard project={project} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── RESUME ── */}
        <section id="resume" className={s.sectionSurface}>
          <div className={layout.containerNarrow}>
            <SectionHeading
              label="Resume"
              title="Training & Credentials"
              subtitle="Training undergone, certifications, and downloadable resume."
              align="center"
            />

            <ScrollReveal>
              <div className={layout.card} style={{ maxWidth: '48rem', margin: '0 auto 3rem' }}>
                <div className={s.resumeHeader}>
                  <div>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                      {profile.name}
                    </h2>
                    <p style={{ marginTop: '0.25rem', fontSize: '0.875rem', color: 'var(--color-muted)' }}>
                      {profile.email} | {profile.phone} | {profile.location}
                    </p>
                  </div>
                  <Button href={profile.resumePath} size="lg" download>
                    <Download size={18} /> Download Resume
                  </Button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div>
                    <h3 style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>
                      Summary
                    </h3>
                    <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--color-muted)' }}>{profile.bio}</p>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>
                      Objective
                    </h3>
                    <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--color-muted)' }}>{profile.objective}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <SectionHeading label="Training" title="Training Undergone" subtitle="In-plant training and learning programs completed." />
            <Timeline items={experience} />
          </div>
        </section>

        {/* ── CERTIFICATIONS ── */}
        <section className={s.sectionWhite}>
          <div className={layout.containerNarrow}>
            <SectionHeading
              label="Credentials"
              title="Certifications"
              subtitle="Industry-recognised certifications."
              align="center"
            />
            <div style={{ display: 'grid', gap: '1.25rem', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
              {certifications.map((cert, i) => (
                <ScrollReveal key={cert.id} delay={i * 0.08}>
                  <article className={s.certCard}>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <div className={s.certIcon}><Award size={22} /></div>
                      <div>
                        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, lineHeight: 1.3, color: 'var(--color-primary)' }}>
                          {cert.name}
                        </h3>
                        <p style={{ marginTop: '0.25rem', fontSize: '0.875rem', color: 'var(--color-muted)' }}>{cert.issuer}</p>
                        <span style={{ display: 'inline-block', marginTop: '0.5rem', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-accent)' }}>
                          {cert.year}
                        </span>
                      </div>
                    </div>
                    {cert.file && (
                      <a href={cert.file} target="_blank" rel="noopener noreferrer" className={s.certLink}>
                        <ExternalLink size={14} /> View certificate
                      </a>
                    )}
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className={s.sectionSurface}>
          <div className={layout.container}>
            <ScrollReveal>
              <div style={{ maxWidth: '42rem', margin: '0 auto 3rem', textAlign: 'center' }}>
                <span style={{ display: 'inline-block', marginBottom: '0.75rem', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-accent)' }}>
                  Contact
                </span>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--color-primary)' }}>
                  Get in touch
                </h2>
                <p style={{ marginTop: '0.75rem', fontSize: '1.0625rem', lineHeight: 1.7, color: 'var(--color-muted)' }}>
                  Have a question or opportunity? Send a message and I&apos;ll respond soon.
                </p>
              </div>
            </ScrollReveal>

            <div className={s.contactGrid}>
              <ScrollReveal>
                <div className={`${layout.card} ${s.contactInfoCard}`}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-primary)' }}>
                    Let&apos;s Connect
                  </h3>
                  <p style={{ marginTop: '1rem', fontSize: '1.0625rem', lineHeight: 1.7, color: 'var(--color-muted)' }}>
                    I&apos;m open to collaborations, opportunities, and meaningful conversations.
                  </p>
                  <div style={{ marginTop: '2rem', borderRadius: '1rem', border: '1px solid var(--color-border)', background: 'var(--color-surface)', padding: '1.5rem' }}>
                    <p style={{ marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-muted)' }}>
                      Direct Email
                    </p>
                    <a href={`mailto:${profile.email}`} className={s.emailRow}>
                      <span className={s.emailIcon}><Mail size={18} /></span>
                      <span style={{ fontSize: '0.9375rem', fontWeight: 500, wordBreak: 'break-all' }}>
                        {profile.email}
                      </span>
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <ContactForm />
              </ScrollReveal>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default App;
