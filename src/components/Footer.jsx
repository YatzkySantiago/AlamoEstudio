import { WA_MESSAGES, WhatsAppIcon, waLink } from '../whatsapp';
import styles from './Footer.module.css';

const LINKS = [
  { href: '#trabajos', label: 'Trabajos' },
  { href: '#precios', label: 'Precios' },
  { href: '#proceso', label: 'Cómo trabajamos' },
  { href: '#preguntas', label: 'Preguntas' },
];

const SERVICIOS = [
  { href: '#precios', label: 'Landing page' },
  { href: '#precios', label: 'Página institucional' },
  { href: '#precios', label: 'App a medida' },
];

const EMAIL = 'sy@alamoestudio.com';
const YEAR = new Date().getFullYear();

function Logo() {
  return (
    <a href="#inicio" className={styles.logo}>
      <img src="/LogoNewWhite.svg" alt="Álamo Estudio" width="150" height="20" />
    </a>
  );
}

function LinkList({ items }) {
  return (
    <ul className={styles.list}>
      {items.map(({ href, label }) => (
        <li key={label}><a href={href} className={styles.link}>{label}</a></li>
      ))}
    </ul>
  );
}

function Contacto() {
  return (
    <ul className={styles.list}>
      <li>
        <a href={waLink(WA_MESSAGES.general)} className={styles.link} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon size={16} />
          WhatsApp
        </a>
      </li>
      <li><a href={`mailto:${EMAIL}`} className={styles.link}>{EMAIL}</a></li>
      <li><span className={styles.text}>Patagonia, Argentina</span></li>
    </ul>
  );
}

function Columnas() {
  return (
    <>
      <div className={styles.colsTop}>
        <div className={styles.brand}>
          <Logo />
        </div>
        <nav className={styles.cols} aria-label="Pie de página">
          <div>
            <h2 className={styles.colTitle}>Sitio</h2>
            <LinkList items={LINKS} />
          </div>
          <div>
            <h2 className={styles.colTitle}>Servicios</h2>
            <LinkList items={SERVICIOS} />
          </div>
          <div>
            <h2 className={styles.colTitle}>Contacto</h2>
            <Contacto />
          </div>
        </nav>
      </div>
      <div className={styles.bottom}>
        <p>© {YEAR} Álamo Estudio</p>
        <a href="#inicio" className={styles.link}>Volver arriba ↑</a>
      </div>
    </>
  );
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`page ${styles.inner}`}>
        <Columnas />
      </div>
    </footer>
  );
}
