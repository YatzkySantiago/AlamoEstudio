import { ImageIcon } from 'lucide-react';
import styles from './Trabajos.module.css';

// Cada trabajo: nombre, url e imagen (ruta dentro de /public). El primero ocupa la columna grande.
const TRABAJOS = [
  { nombre: 'Uriarte & Lavalle Abogados', url: 'https://uriartelavalle.vercel.app', imagen: '/trabajos/uriartelavalle.jpg' },
  { nombre: 'Taller Orsal', url: 'https://tallerorsal.vercel.app', imagen: '/trabajos/tallerorsal.jpg' },
  { nombre: 'Nought', url: 'https://nought616.vercel.app', imagen: '/trabajos/nought616.jpg' },
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
        <p>Algunos sitios que diseñamos. Tocá cualquiera para verlo funcionando.</p>
      </div>
      <div className={styles.grid}>
        {TRABAJOS.map((trabajo, index) => (
          <Frame key={trabajo.url ?? index} trabajo={trabajo} />
        ))}
      </div>
    </section>
  );
}
