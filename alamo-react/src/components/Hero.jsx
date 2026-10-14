import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

const WORDS = ['crecer', 'destacar', 'convertir', 'escalar'];

export default function Hero() {
  const wordRef = useRef(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const el = wordRef.current;
    if (!el) return;

    const cycle = () => {
      el.classList.add(styles.wordOut);
      setTimeout(() => {
        indexRef.current = (indexRef.current + 1) % WORDS.length;
        el.textContent = WORDS[indexRef.current];
        el.classList.remove(styles.wordOut);
        el.classList.add(styles.wordIn);
        setTimeout(() => el.classList.remove(styles.wordIn), 500);
      }, 400);
    };

    const interval = setInterval(cycle, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleScroll = (e) => {
    e.preventDefault();
    const target = document.querySelector('#servicios');
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.hero}>
      {/* Animated background blobs */}
      <div className={styles.blob1} />
      <div className={styles.blob2} />
      <div className={styles.blob3} />

      <div className={styles.content}>
        <div className={styles.badge}>✦ Agencia Digital · Patagonia, Argentina</div>

        <h1 className={styles.headline}>
          Hacé{' '}
          <span className={styles.wordWrap}>
            <span ref={wordRef} className={styles.word}>crecer.</span>
          </span>
          <br />
          tu negocio
        </h1>

        <p className={styles.sub}>
          Transformá tu presencia digital con <strong>Álamo Estudio.</strong>
          <br />
          Google Ads · Desarrollo Web · SEO
        </p>

        <div className={styles.actions}>
          <a href="#contacto" onClick={handleScroll} className={styles.btnPrimary}>
            Empezar ahora
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#servicios" onClick={handleScroll} className={styles.btnSecondary}>
            Ver servicios
          </a>
        </div>
      </div>
    </section>
  );
}
