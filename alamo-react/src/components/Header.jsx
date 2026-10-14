import { useState, useEffect } from 'react';
import styles from './Header.module.css';

const navLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#faq', label: 'FAQ' },
];

function scrollTo(href) {
  if (href === '#top') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
  const target = document.querySelector(href);
  if (!target) return;
  const top = target.getBoundingClientRect().top + window.scrollY - 72;
  window.scrollTo({ top, behavior: 'smooth' });
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Header shrink on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Bloquear scroll del body cuando el menú mobile está abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Cerrar menú con Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    setTimeout(() => scrollTo(href), menuOpen ? 350 : 0);
  };

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        {/* Logo */}
        <a href="#top" onClick={(e) => handleNav(e, '#top')} className={styles.logoLink}>
          <img src="/LogoNewBlue.svg" alt="Álamo Estudio" className={styles.logo} />
        </a>

        {/* Nav desktop */}
        <nav className={styles.navDesktop}>
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} className={styles.navLink} onClick={(e) => handleNav(e, href)}>
              {label}
            </a>
          ))}
          <a href="#contacto" onClick={(e) => handleNav(e, '#contacto')} className={styles.navCta}>
            Contacto
          </a>
        </nav>

        {/* Burger */}
        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </header>

      {/* Overlay mobile */}
      <div
        className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Nav mobile — fuera del header para evitar stacking context */}
      <nav className={`${styles.navMobile} ${menuOpen ? styles.navMobileOpen : ''}`} aria-hidden={!menuOpen}>
        <div className={styles.mobileLogoWrap}>
          <img src="/LogoNewBlue.svg" alt="Álamo Estudio" className={styles.mobileLogo} />
        </div>
        <div className={styles.mobileLinks}>
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} className={styles.mobileLink} onClick={(e) => handleNav(e, href)} tabIndex={menuOpen ? 0 : -1}>
              {label}
            </a>
          ))}
        </div>
        <a href="#contacto" onClick={(e) => handleNav(e, '#contacto')} className={styles.mobileCta} tabIndex={menuOpen ? 0 : -1}>
          Contacto
        </a>
      </nav>
    </>
  );
}
