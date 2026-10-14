import styles from './Strip.module.css';

const items = [
  'Google Ads',
  'Diseño Web',
  'Landing Pages',
  'Analítica & Reportes',
  'SEO On-page',
  'Optimización de anuncios',
  'E-Commerce',
  'Core Web Vitals',
  'Performance Max',
  'UX / UI',
];

const TrackItems = () => (
  <div className={styles.track} aria-hidden="true">
    {items.map((item) => (
      <div key={item} className={styles.item}>
        <span className={styles.dot} />
        {item}
      </div>
    ))}
  </div>
);

export default function Strip() {
  return (
    <div className={styles.strip} aria-label="Servicios">
      {/* Dos copias idénticas en JSX → el keyframe anima al -50% = loop perfecto */}
      <div className={styles.trackWrapper}>
        <TrackItems />
        <TrackItems />
      </div>
    </div>
  );
}
