import { useId, useState } from 'react';
import { Plus } from 'lucide-react';
import styles from './FAQ.module.css';

const PREGUNTAS = [
  {
    q: '¿Cuánto sale una landing page?',
    a: 'Desde $80.000, y tienen un costo operativo y de mantenimiento mensual de $25.000. El precio final depende de la complejidad del proyecto.',
  },
  {
    q: '¿Qué incluye el plan mensual?',
    a: 'El hosting, la gestión del dominio y hasta 2 modificaciones por mes.',
  },
  {
    q: '¿Ustedes se encargan del diseño y la programación?',
    a: 'Diseñamos la página y después la programamos. Podés estar tan involucrado como prefieras.',
  },
  {
    q: '¿Necesito tener una página web previa?',
    a: 'No es necesario. Si todavía no tenés ninguna, empezamos desde cero.',
  },
  {
    q: '¿Y si ya tengo una página web?',
    a: 'En ese caso podemos hacer un diagnostico de la misma, optimizarla y modernizarla!',
  },
  {
    q: '¿Qué incluye el SEO básico?',
    a: 'Dejamos la página preparada para que los buscadores la entiendan, siguiendo los mas altos estándares de velocidad.',
  },
  {
    q: '¿Qué es una app a medida?',
    a: 'Un desarrollo pensado para algo puntual de tu negocio que una página no resuelve. Contanos la idea y te pasamos un presupuesto.',
  },
];

function Item({ item, open, onToggle }) {
  const id = useId();
  return (
    <div className={styles.item} data-open={open || undefined}>
      <h3>
        <button type="button" className={styles.question} aria-expanded={open} aria-controls={id} onClick={onToggle}>
          {item.q}
          <Plus className={styles.icon} size={22} strokeWidth={1.75} aria-hidden="true" />
        </button>
      </h3>
      <div id={id} className={styles.answer}>
        <div>
          <p>{item.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="preguntas" className={`section ${styles.section}`}>
      <h2 className={styles.heading}>Preguntas frecuentes.</h2>
      <div className={styles.list}>
        {PREGUNTAS.map((item, index) => (
          <Item
            key={item.q}
            item={item}
            open={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
          />
        ))}
      </div>
    </section>
  );
}
