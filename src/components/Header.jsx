import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { WA_MESSAGES, WhatsAppIcon, waLink } from '../whatsapp';
import styles from './Header.module.css';

const LINKS = [
  { href: '#trabajos', label: 'Trabajos' },
  { href: '#precios', label: 'Precios' },
  { href: '#proceso', label: 'Cómo trabajamos' },
  { href: '#preguntas', label: 'Preguntas' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const toggleRef = useRef(null);

  useEffect(() => {
    const sections = LINKS.map(({ href }) => document.querySelector(href)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
          else if (`#${entry.target.id}` === active) setActive('');
        });
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [active]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#inicio" className={styles.logoLink} onClick={() => setOpen(false)}>
          <img src="/LogoNewBlue.svg" alt="Álamo Estudio" width="150" height="20" />
        </a>

        <nav className={styles.nav} aria-label="Principal">
          {LINKS.map(({ href, label }) => (
            <a key={href} href={href} className={styles.link} aria-current={active === href ? 'true' : undefined}>
              {label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <a className={`btn btnWa ${styles.cta}`} href={waLink(WA_MESSAGES.general)} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon size={18} />
            WhatsApp
          </a>
          <button
            ref={toggleRef}
            type="button"
            className={styles.toggle}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={24} strokeWidth={1.75} /> : <Menu size={24} strokeWidth={1.75} />}
          </button>
        </div>
      </div>

      <nav id="menu-movil" className={`${styles.sheet} ${open ? styles.sheetOpen : ''}`} aria-label="Menú" inert={!open}>
        {LINKS.map(({ href, label }) => (
          <a key={href} href={href} className={styles.sheetLink} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
