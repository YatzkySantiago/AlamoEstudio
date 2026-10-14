import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from './FAQ.module.css';

const faqs = [
  {
    q: '¿Tengo que contratar todos los servicios juntos?',
    a: 'Para nada. Nuestros servicios son modulares. Podés empezar solo con el desarrollo de una web, o con la gestión de Google Ads, o combinar ambos según la etapa en la que se encuentre tu negocio.',
  },
  {
    q: '¿Ustedes se encargan del diseño y la programación?',
    a: 'Sí, ofrecemos una solución integral. Diseñamos la interfaz enfocada en la experiencia de usuario (UX) y luego la desarrollamos con código limpio para garantizar la máxima velocidad. El cliente puede estar tan involucrado como prefiera en el proceso de diseño.',
  },
  {
    q: '¿Es necesario tener una página web previa para anunciar?',
    a: 'No es estrictamente necesario. Si no tenés una, podemos desarrollar una Landing Page optimizada específicamente para convertir el tráfico de tus anuncios en clientes potenciales.',
  },
  {
    q: '¿Es muy caro anunciar en Google?',
    a: 'En Álamo somos especialistas en trabajar con cualquier presupuesto. No se trata de cuánto invertís, sino de qué tan inteligente es la estrategia detrás. Google Ads nos permite empezar desde montos muy bajos y escalar. Nosotros nos encargamos de que cada peso de tu inversión esté optimizado para atraer clientes.',
  },
  {
    q: '¿Cuánto tiempo tarda en ver resultados?',
    a: 'Con Google Ads los resultados son prácticamente inmediatos, ya que comenzás a aparecer en búsquedas desde el primer día. En desarrollo web, el tiempo varía según la complejidad del proyecto, pero típicamente entre 2 y 6 semanas.',
  },
];

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`${styles.item} ${open ? styles.open : ''} ${isVisible ? styles.visible : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <button className={styles.question} onClick={() => setOpen(!open)} aria-expanded={open}>
        <span className={styles.qText}>{faq.q}</span>
        <span className={`${styles.icon} ${open ? styles.iconOpen : ''}`}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="7" y1="0" x2="7" y2="14" />
            <line x1="0" y1="7" x2="14" y2="7" />
          </svg>
        </span>
      </button>
      <div className={styles.answer}>
        <p>{faq.a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  return (
    <section id="faq" className={styles.section}>
      <div ref={titleRef} className={`${styles.titleWrap} ${titleVisible ? styles.titleVisible : ''}`}>
        <span className={styles.label}>FAQ</span>
        <h2 className={styles.title}>Preguntas Frecuentes</h2>
      </div>

      <div className={styles.list}>
        {faqs.map((faq, i) => (
          <FAQItem key={i} faq={faq} index={i} />
        ))}
      </div>
    </section>
  );
}
