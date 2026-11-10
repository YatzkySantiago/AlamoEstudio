import styles from './Proceso.module.css';

const PASOS = [
  { titulo: 'Nos escribís', texto: 'Nos contás a qué se dedica tu negocio y qué necesitás.' },
  { titulo: 'Te pasamos el presupuesto', texto: 'Según la complejidad del proyecto, con el precio claro antes de empezar.' },
  { titulo: 'Diseñamos y programamos', texto: 'Nos encargamos de todo, y podés participar tanto como quieras.' },
  { titulo: 'Publicamos tu sitio', texto: 'Lo dejamos online, listo para que te encuentren.' },
];

const CHARLA = [
  { de: 'vos', texto: 'Hola, Álamo Estudio. Quiero una landing page para mi negocio.' },
  { de: 'alamo', texto: '¡Hola! Contanos a qué se dedica tu negocio y qué necesitás.' },
  { de: 'alamo', texto: 'Con eso te pasamos el presupuesto, con el precio claro antes de empezar.' },
  { de: 'vos', texto: 'Perfecto, arranquemos.' },
  { de: 'alamo', texto: 'Mientras lo diseñamos, podés participar tanto como quieras.' },
  { de: 'alamo', texto: '¡Listo! Tu sitio ya está online.' },
];

export default function Proceso() {
  return (
    <section id="proceso" className={`section ${styles.section}`}>
      <div>
        <h2>Cómo trabajamos.</h2>
        <ol className={styles.steps}>
          {PASOS.map((paso, index) => (
            <li key={paso.titulo} className={styles.step}>
              <span className={styles.mark} aria-hidden="true">{index + 1}</span>
              <h3 className={styles.title}>{paso.titulo}</h3>
              <p className={styles.text}>{paso.texto}</p>
            </li>
          ))}
        </ol>
      </div>

      <figure className={styles.chat}>
        <figcaption className={styles.chatBar}>
          <img src="/logoShort2.svg" alt="" width="36" height="36" className={styles.avatar} />
          <span>
            <span className={styles.chatName}>Álamo Estudio</span>
            <span className={styles.chatMeta}>Ejemplo de conversación</span>
          </span>
        </figcaption>
        <ul className={styles.wall}>
          {CHARLA.map((mensaje) => (
            <li key={mensaje.texto} className={mensaje.de === 'vos' ? styles.out : styles.in}>
              <span className="srOnly">{mensaje.de === 'vos' ? 'Vos: ' : 'Álamo Estudio: '}</span>
              {mensaje.texto}
            </li>
          ))}
        </ul>
      </figure>
    </section>
  );
}
