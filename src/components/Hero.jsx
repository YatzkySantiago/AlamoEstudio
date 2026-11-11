import { WA_MESSAGES, WhatsAppIcon, waLink } from '../whatsapp';
import Alerts from './Alerts';
import styles from './Hero.module.css';

const HEADLINE = 'Landing pages para PYMEs.';

function Lead() {
  return (
    <>
      <h1 className={styles.title}>
        {HEADLINE.split(' ').map((word, index) => (
          <span key={word} className={styles.word} style={{ '--word': index }}>{word} </span>
        ))}
      </h1>
      <p className={styles.sub}>
        Desarrollamos páginas que llevan a tus clientes directo a tu WhatsApp, o desarrollamos aplicaciones a medida para tu negocio.
      </p>
    </>
  );
}

function Action() {
  return (
    <>
      <div id="hero-acciones" className={styles.actions}>
        <a className={`btn btnWa ${styles.primary}`} href={waLink(WA_MESSAGES.general)} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon size={22} />
          Escribinos por WhatsApp
        </a>
        <a className="btn btnQuiet" href="#precios">Ver precios</a>
      </div>
    </>
  );
}

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Alerts />
      <div className={styles.copy}>
        <Lead />
        <Action />
      </div>
    </section>
  );
}
