import { WA_MESSAGES, WhatsAppIcon, waLink } from '../whatsapp';
import Phone from './Phone';
import styles from './Hero.module.css';

const HEADLINE = 'Landing pages para negocios de la Patagonia.';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.copy}>
        <h1 className={styles.title}>
          {HEADLINE.split(' ').map((word, index) => (
            <span key={word} className={styles.word} style={{ '--word': index }}>{word} </span>
          ))}
        </h1>
        <p className={styles.sub}>
          Diseñamos y programamos páginas que llevan a tus clientes directo a tu WhatsApp. También hacemos apps a medida.
        </p>
        <div id="hero-acciones" className={styles.actions}>
          <a className={`btn btnWa ${styles.primary}`} href={waLink(WA_MESSAGES.general)} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon size={22} />
            Escribinos por WhatsApp
          </a>
          <a className="btn btnQuiet" href="#precios">Ver precios</a>
        </div>
        <p className={styles.price}>
          Landing pages <strong>desde $80.000</strong> + $25.000 por mes de hosting y mantenimiento.
        </p>
      </div>
      <div className={styles.visual}>
        <Phone />
      </div>
    </section>
  );
}
