import { CalendarCheck, Check, Package, ShoppingBag, Users } from 'lucide-react';
import { WA_MESSAGES, WhatsAppIcon, waLink } from '../whatsapp';
import { PLAN_MENSUAL, PLAN_INSTITUCIONAL } from '../message';
import styles from './Precios.module.css';

const PLAN = ['Hosting', 'Gestión del dominio', 'Hasta 2 modificaciones por mes'];

const SERVICIOS = [
  {
    id: 'landing',
    nombre: 'Landing page',
    desc: 'Una página pensada para que tus clientes te encuentren y te escriban.',
    precio: '$120.800',
    incluye: ['Diseño y programación', 'SEO básico', 'Carga rápida'],
    mensual: PLAN_MENSUAL,
  },
  {
    id: 'institucional',
    nombre: 'Página institucional',
    desc: 'El sitio completo de tu empresa.',
    precio: '$232.300',
    incluye: ['Hasta 5 páginas', 'Diseño y programación', 'SEO básico', 'Carga rápida'],
    mensual: PLAN_INSTITUCIONAL,
  },
];

const IDEAS = [
  { Icon: CalendarCheck, titulo: 'Turnos y reservas', texto: 'Tus clientes eligen el horario.' },
  { Icon: Package, titulo: 'Listas de precios', texto: 'Unificás tus listas y armas pedidos.' },
  { Icon: ShoppingBag, titulo: 'Pedidos online', texto: 'Recibís y ordenás pedidos en un lugar.' },
  { Icon: Users, titulo: 'Panel de clientes', texto: 'Historial, datos y seguimiento de cada uno.' },
];

export default function Precios() {
  return (
    <section id="precios" className="section">
      <div className="sectionHead">
        <h2>Cuánto sale?</h2>
        <p>Valores de nuestros servicios.</p>
      </div>

      <div className={styles.grid}>
        {SERVICIOS.map((s) => (
          <article key={s.id} className={styles.card}>
            <h3 className={styles.name}>{s.nombre}</h3>
            <p className={styles.desc}>{s.desc}</p>

            <p className={styles.price}>
              <span className={styles.from}>A partir de:</span>
              {s.precio}
            </p>
            <p className={styles.terms}>Puede variar según la complejidad del proyecto.</p>

            <ul className={styles.list}>
              {s.incluye.map((item) => (
                <li key={item}>
                  <Check size={18} strokeWidth={2.25} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <div className={styles.plan}>
              <div className={styles.planHead}>
                <h4 className={styles.planName}>Mantenimiento mensual</h4>
                <p className={styles.planPrice}>{s.mensual}<span> por mes</span></p>
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

            <a className={`btn btnWa ${styles.action}`} href={waLink(WA_MESSAGES[s.id])} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              Consultar por WhatsApp
            </a>
          </article>
        ))}

        <article className={styles.app}>
          <div className={styles.appHead}>
            <div>
              <h3 className={styles.name}>App a medida</h3>
              <p className={styles.desc}>Un sistema hecho especificamente para tu negocio.</p>
            </div>
            <a className={`btn btnQuiet ${styles.appAction}`} href={waLink(WA_MESSAGES.app)} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              Contanos tu idea
            </a>
          </div>

          <ul className={styles.ideas} aria-label="Ejemplos de apps a medida">
            {IDEAS.map(({ Icon, titulo, texto }) => (
              <li key={titulo} className={styles.idea}>
                <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
                <strong>{titulo}</strong>
                <span>{texto}</span>
              </li>
            ))}
          </ul>

          <p className={styles.appNote}>
            Cada app es distinta, así que el precio se arma según las funciones que necesites.
          </p>
        </article>
      </div>
    </section>
  );
}
