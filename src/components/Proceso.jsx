import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from './Proceso.module.css';

const steps = [
  {
    num: '01',
    title: 'Evaluación',
    desc: 'Analizamos tu negocio, tu competencia y el estado actual de tus campañas o sitio web para identificar oportunidades reales.',
  },
  {
    num: '02',
    title: 'Estrategia',
    desc: 'Diseñamos un plan de acción con objetivos concretos, KPIs definidos y un roadmap claro hacia el éxito.',
  },
  {
    num: '03',
    title: 'Ejecución',
    desc: 'Implementamos, configuramos y lanzamos con atención al detalle en cada paso del proceso.',
  },
  {
    num: '04',
    title: 'Optimización',
    desc: 'Medimos, ajustamos y reportamos resultados de forma transparente cada mes para escalar lo que funciona.',
  },
];

function StepCard({ step, index }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`${styles.step} ${isVisible ? styles.visible : ''}`}
      style={{ transitionDelay: `${index * 130}ms` }}
    >
      <div className={styles.stepLine}>
        <span className={styles.stepNum}>{step.num}</span>
        {index < steps.length - 1 && <div className={styles.connector} />}
      </div>
      <div className={styles.stepContent}>
        <h3 className={styles.stepTitle}>{step.title}</h3>
        <p className={styles.stepDesc}>{step.desc}</p>
      </div>
    </div>
  );
}

export default function Proceso() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  return (
    <section id="proceso" className={styles.section}>
      <div ref={titleRef} className={`${styles.titleWrap} ${titleVisible ? styles.titleVisible : ''}`}>
        <span className={styles.label}>Cómo trabajamos</span>
        <h2 className={styles.title}>Un proceso claro y efectivo.</h2>
      </div>

      <div className={styles.grid}>
        {steps.map((step, i) => (
          <StepCard key={step.num} step={step} index={i} />
        ))}
      </div>
    </section>
  );
}
