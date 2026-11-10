import MessageBuilder from './MessageBuilder';
import styles from './Cierre.module.css';

export default function Cierre() {
  return (
    <section id="cierre" className={styles.cierre}>
      <div className={styles.copy}>
        <h2 className={styles.title}>Armá tu mensaje y escribinos.</h2>
        <p className={styles.sub}>
          Elegí qué necesitás, sumá tu negocio si querés, y se abre WhatsApp con todo listo para enviar.
        </p>
        <p className={styles.phone}>O escribinos directo al +54 299 674 6759</p>
      </div>
      <MessageBuilder />
    </section>
  );
}
