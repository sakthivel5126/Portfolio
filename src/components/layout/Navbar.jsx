import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { profile } from '../../data/profile';
import styles from './Navbar.module.css';

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

const sectionToNavLink = {
  about: 'about',
  skills: 'about',
  education: 'about',
  credentials: 'about',
  links: 'about',
  projects: 'projects',
  resume: 'resume',
  contact: 'contact',
};

const observedSections = Object.keys(sectionToNavLink);

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      if (window.scrollY < 50) {
        setActiveSection('');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const intersectingSections = new Set();

    const observers = observedSections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            intersectingSections.add(id);
          } else {
            intersectingSections.delete(id);
          }

          if (intersectingSections.size > 0) {
            const activeId = Array.from(intersectingSections)[intersectingSections.size - 1];
            setActiveSection(sectionToNavLink[activeId] || '');
          } else {
            if (window.scrollY < 50) {
              setActiveSection('');
            }
          }
        },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNav = (id) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : styles.headerDefault}`}>
      <div className={styles.inner}>
        <button
          className={styles.logo}
          onClick={() => {
            setMenuOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <span className={styles.logoMark}>{profile.firstName.charAt(0)}</span>
          {profile.firstName}
        </button>

        {/* Desktop nav */}
        <nav className={styles.desktopNav} aria-label="Main navigation">
          {navLinks.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleNav(id)}
              className={`${styles.link} ${activeSection === id ? styles.linkActive : ''}`}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          type="button"
          className={styles.menuBtn}
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <nav className={`${styles.mobileNav} ${menuOpen ? styles.mobileNavOpen : ''}`} aria-label="Mobile navigation">
        <ul className={styles.mobileNavList}>
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <button
                className={`${styles.mobileLink} ${activeSection === id ? styles.mobileLinkActive : ''}`}
                onClick={() => handleNav(id)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {menuOpen && (
        <button
          type="button"
          className={styles.backdrop}
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}

export default Navbar;
