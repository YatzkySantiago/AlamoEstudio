import { ImageIcon } from 'lucide-react';
import styles from './Trabajos.module.css';

// Cuando haya un trabajo real, completá nombre, url e imagen (ruta dentro de /public).
const TRABAJOS = [
  { nombre: null, url: null, imagen: null },
  { nombre: null, url: null, imagen: null },
  { nombre: null, url: null, imagen: null },
];

function Frame({ trabajo }) {
  const dominio = trabajo.url ? new URL(trabajo.url).hostname : 'tu-negocio.com.ar';
  const body = (
    <>
      <div className={styles.bar} aria-hidden="true">
        <span className={styles.dots}><i /><i /><i /></span>
        <span className={styles.address}>{dominio}</span>
      </div>
      {trabajo.imagen ? (
        <img className={styles.shot} src={trabajo.imagen} alt={`Sitio de ${trabajo.nombre}`} loading="lazy" />
      ) : (
        <div className={styles.empty}>
          <ImageIcon size={24} strokeWidth={1.5} aria-hidden="true" />
          <p>Proyecto por publicar</p>
        </div>
      )}
    </>
  );

  return trabajo.url ? (
    <a className={styles.frame} href={trabajo.url} target="_blank" rel="noopener noreferrer">{body}</a>
  ) : (
    <div className={styles.frame}>{body}</div>
  );
}

export default function Trabajos() {
  return (
    <section id="trabajos" className="section">
      <div className="sectionHead">
        <h2>Nuestro trabajo.</h2>
        <p>Estamos preparando esta sección. Pronto vas a ver acá proyectos reales.</p>
      </div>
      <div className={styles.grid}>
        {TRABAJOS.map((trabajo, index) => (
          <Frame key={trabajo.url ?? index} trabajo={trabajo} />
        ))}
      </div>
    </section>
  );
}
