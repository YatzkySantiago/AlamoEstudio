import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from './Servicios.module.css';

const services = [
  {
    num: '01',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        <path d="M11 8v6M8 11h6"/>
      </svg>
    ),
    title: 'Gestión de Google Ads',
    desc: 'Campañas de búsqueda y Performance Max, optimizadas para maximizar tu retorno. Estrategia, ejecución y reporte mensual con métricas claras.',
    tags: ['Search Ads', 'Performance Max', 'Remarketing'],
  },
  {
    num: '02',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
        <path d="m7 8 3 3-3 3"/>
        <path d="M13 14h4"/>
      </svg>
    ),
    title: 'Desarrollo Web',
    desc: 'Páginas diseñadas para convertir el tráfico en leads y ventas. Estructura orientada a UX, máxima velocidad de carga y código limpio.',
    tags: ['Landing Pages', 'E-Commerce', 'UX/UI'],
  },
  {
    num: '03',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Optimización SEO',
    desc: 'Auditoría y mejora de sitios web para dominar los resultados de búsqueda. SEO on-page y cumplimiento de estándares Core Web Vitals.',
    tags: ['SEO On-page', 'Core Web Vitals', 'Analítica'],
  },
];

function ServiceCard({ service, delay }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`${styles.card} ${isVisible ? styles.visible : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={styles.cardTop}>
        <div className={styles.iconBox}>{service.icon}</div>
        <span className={styles.num}>{service.num}</span>
      </div>
      <h3 className={styles.cardTitle}>{service.title}</h3>
      <p className={styles.cardDesc}>{service.desc}</p>
      <div className={styles.tags}>
        {service.tags.map((tag) => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default function Servicios() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  return (
    <section id="servicios" className={styles.section}>
      <div ref={titleRef} className={`${styles.header} ${titleVisible ? styles.headerVisible : ''}`}>
        <div className={styles.headerLeft}>
          <span className={styles.sectionLabel}>Servicios</span>
          <h2 className={styles.title}>Servicios que generan resultados.</h2>
        </div>
        <p className={styles.subtitle}>
          Cada servicio está diseñado para que tu negocio crezca de forma medible y sostenible.
        </p>
      </div>

      <div className={styles.grid}>
        {services.map((s, i) => (
          <ServiceCard key={s.num} service={s} delay={i * 120} />
        ))}
      </div>
    </section>
  );
}
