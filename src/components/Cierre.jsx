import MessageBuilder from './MessageBuilder';
import styles from './Cierre.module.css';

export default function Cierre() {
  return (
    <section id="cierre" className={styles.cierre}>
      <div className={styles.copy}>
        <h2 className={styles.title}>Armá tu mensaje y escribinos.</h2>
        <p className={styles.sub}>
          Rellená el formulario y contactanos por whatsapp!
        </p>
      </div>
      <MessageBuilder />
    </section>
  );
}
