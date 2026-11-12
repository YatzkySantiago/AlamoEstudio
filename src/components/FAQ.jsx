import { useId, useState } from 'react';
import { Plus } from 'lucide-react';
import styles from './FAQ.module.css';

const PREGUNTAS = [
  {
    q: '¿Para qué sirve una Landing Page?',
    a: 'Tener presencia online es cada vez más importante, todos buscamos productos y negocios en internet. Con una Landing Page podés captar esas ventas que hoy se te escapan.',
  },
  {
    q: '¿Qué incluye el mantenimiento mensual?',
    a: 'Incluye el hosting, la gestión del dominio y hasta 2 modificaciones por mes.',
  },
  {
    q: '¿Ustedes se encargan del diseño y la programación?',
    a: 'Nos encargamos de todo. Podés estar tan involucrado como prefieras.',
  },
  {
    q: '¿Necesito tener una página web previa?',
    a: 'No es necesario. Si todavía no tenés ninguna, empezamos desde cero.',
  },
  {
    q: '¿Y si ya tengo una página web?',
    a: 'En ese caso podemos hacer un diagnóstico de la misma, optimizarla y actualizarla.',
  },
  {
    q: '¿Qué es el SEO básico?',
    a: 'Consiste en dejar la página preparada para que los clientes te encuentren en internet.',
  },
  {
    q: '¿Qué es una aplicación a medida?',
    a: 'Una aplicación a medida puede servir para facilitar, optimizar o automatizar procesos de tu negocio. Contanos tu idea!',
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
