import { Check } from 'lucide-react';
import { WA_MESSAGES, WhatsAppIcon, waLink } from '../whatsapp';
import { PLAN_MENSUAL } from '../message';
import styles from './Precios.module.css';

const INCLUYE = ['Diseño y programación', 'SEO básico', 'Carga rápida'];
const PLAN = ['Hosting', 'Gestión del dominio', 'Hasta 2 modificaciones por mes'];

export default function Precios() {
  return (
    <section id="precios" className="section">
      <div className="sectionHead">
        <h2>Cuánto sale?</h2>
        <p>Valores de nuestros servicios.</p>
      </div>

      <div className={styles.grid}>
        <article className={styles.landing}>
          <h3 className={styles.name}>Landing page</h3>
          <p className={styles.desc}>Una página pensada para que tus clientes te encuentren y te escriban.</p>

          <p className={styles.price}>
            <span className={styles.from}>A partir de:</span>
            $80.000
          </p>
          <p className={styles.terms}>Puede variar según la complejidad del proyecto.</p>

          <ul className={styles.list}>
            {INCLUYE.map((item) => (
              <li key={item}>
                <Check size={18} strokeWidth={2.25} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <div className={styles.plan}>
            <div className={styles.planHead}>
              <h4 className={styles.planName}>Mantenimiento mensual</h4>
              <p className={styles.planPrice}>{PLAN_MENSUAL}<span> por mes</span></p>
            </div>
            <ul className={styles.planList}>
              {PLAN.map((item) => (
                <li key={item}>
                  <Check size={16} strokeWidth={2.25} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <a className={`btn btnWa ${styles.action}`} href={waLink(WA_MESSAGES.landing)} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon />
            Consultar por WhatsApp
          </a>
        </article>

        <article className={styles.app}>
          <h3 className={styles.name}>App a medida</h3>
          <p className={styles.desc}>Para cuando tu negocio necesita algo que una página no resuelve.</p>

          <p className={styles.quote}>A presupuesto</p>
          <p className={styles.terms}>Contanos qué necesitás y te pasamos un número.</p>

          <a className={`btn btnQuiet ${styles.action}`} href={waLink(WA_MESSAGES.app)} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon />
            Pedir presupuesto
          </a>
        </article>
      </div>
    </section>
  );
}
