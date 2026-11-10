import styles from './Footer.module.css';

const LINKS = [
  { href: '#trabajos', label: 'Trabajos' },
  { href: '#precios', label: 'Precios' },
  { href: '#proceso', label: 'Cómo trabajamos' },
  { href: '#preguntas', label: 'Preguntas' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div>
          <a href="#inicio" className={styles.logo}>
            <img src="/LogoNewBlue.svg" alt="Álamo Estudio" width="150" height="20" />
          </a>
          <p className={styles.place}>Patagonia, Argentina</p>
        </div>
        <nav className={styles.nav} aria-label="Pie de página">
          {LINKS.map(({ href, label }) => (
            <a key={href} href={href} className={styles.link}>{label}</a>
          ))}
          <a href="mailto:sy@alamoestudio.com" className={styles.link}>sy@alamoestudio.com</a>
        </nav>
      </div>
      <p className={styles.copy}>© {new Date().getFullYear()} Álamo Estudio</p>
    </footer>
  );
}
