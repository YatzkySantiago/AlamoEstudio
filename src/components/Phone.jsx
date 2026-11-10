import { useEffect, useRef } from 'react';
import { Clock, MapPin, Menu } from 'lucide-react';
import { WhatsAppIcon } from '../whatsapp';
import styles from './Phone.module.css';

const prefersMotion = () =>
  typeof window !== 'undefined' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Negocio de ejemplo para la landing de muestra. No es un cliente real.
const SERVICIOS = ['Limpieza', 'Ortodoncia', 'Implantes', 'Urgencias'];

export default function Phone() {
  const stageRef = useRef(null);

  // Gentle tilt toward the pointer, only for fine pointers with motion allowed.
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || !prefersMotion() || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return undefined;
    let frame;
    const hero = stage.closest('section') ?? stage;
    const onMove = (event) => {
      const rect = stage.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        stage.style.setProperty('--ry', `${Math.max(-6, Math.min(6, x * 8)).toFixed(2)}deg`);
        stage.style.setProperty('--rx', `${Math.max(-5, Math.min(5, -y * 6)).toFixed(2)}deg`);
      });
    };
    const onLeave = () => {
      stage.style.setProperty('--ry', '0deg');
      stage.style.setProperty('--rx', '0deg');
    };
    hero.addEventListener('pointermove', onMove);
    hero.addEventListener('pointerleave', onLeave);
    return () => {
      cancelAnimationFrame(frame);
      hero.removeEventListener('pointermove', onMove);
      hero.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return (
    <figure ref={stageRef} className={styles.stage}>
      <div className={styles.phone} aria-hidden="true">
        <div className={styles.screen}>
          <div className={styles.status}>
            <span>9:41</span>
            <span className={styles.island} />
            <span className={styles.battery} />
          </div>

          <div className={styles.notice}>
            <span className={styles.noticeIcon}><WhatsAppIcon size={18} /></span>
            <span className={styles.noticeBody}>
              <span className={styles.noticeTop}>
                <b>WhatsApp</b>
                <span>ahora</span>
              </span>
              <span className={styles.noticeTitle}>Nueva consulta</span>
              <span className={styles.noticeText}>Hola, vi la página. ¿Tienen turno esta semana?</span>
            </span>
          </div>

          <div className={styles.site}>
            <div className={styles.siteNav}>
              <span className={styles.siteLogo}>
                <span className={styles.siteMark} />
                Odontología
              </span>
              <Menu size={18} strokeWidth={2} />
            </div>
            <div className={styles.siteHero}>
              <p className={styles.siteKicker}><MapPin size={13} strokeWidth={2.25} />Neuquén</p>
              <p className={styles.siteTitle}>Turnos para toda la familia, sin esperas.</p>
              <span className={styles.siteButton}>
                <WhatsAppIcon size={16} />
                Pedir turno por WhatsApp
              </span>
            </div>
            <div className={styles.siteBody}>
              <ul className={styles.siteServices}>
                {SERVICIOS.map((servicio) => <li key={servicio}>{servicio}</li>)}
              </ul>
              <div className={styles.siteHours}>
                <Clock size={16} strokeWidth={2} />
                <span>
                  <b>Lunes a viernes</b>
                  <span>9 a 19 h · Sábados 9 a 13 h</span>
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <figcaption className={styles.caption}>
        (Ejemplo de diseño para un consultorio)
      </figcaption>
    </figure>
  );
}
