import { useEffect, useRef, useState } from 'react';
import { CalendarCheck, MessageCircle, ShoppingBag } from 'lucide-react';
import styles from './Alerts.module.css';

// Ejemplos ilustrativos. No son clientes ni ventas reales.
const ALERTAS = [
  { Icon: MessageCircle, titulo: 'Nueva consulta', texto: '¿Tienen turno esta semana?' },
  { Icon: ShoppingBag, titulo: 'Nueva venta', texto: 'Campera impermeable, talle M' },
  { Icon: CalendarCheck, titulo: 'Nueva reserva', texto: 'Cabaña para 4, del 12 al 15' },
  { Icon: MessageCircle, titulo: 'Nueva consulta', texto: '¿Hacen envíos a Cipolletti?' },
  { Icon: ShoppingBag, titulo: 'Nueva venta', texto: 'Kit de herramientas x2' },
  { Icon: CalendarCheck, titulo: 'Nuevo turno', texto: 'Jueves a las 10:30' },
];

const CUANDO = ['ahora', 'hace 2 min', 'hace 5 min'];
const VISIBLES = CUANDO.length;
const INTERVALO = 2800;

export default function Alerts() {
  // `tick` only grows, so each alert keeps its React key while it moves down the stack.
  const [tick, setTick] = useState(ALERTAS.length * 2);
  const paused = useRef(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const timer = setInterval(() => {
      if (!paused.current && !document.hidden) setTick((value) => value + 1);
    }, INTERVALO);
    return () => clearInterval(timer);
  }, []);

  // One extra item stays mounted in the last slot so it can fade out.
  const slots = Array.from({ length: VISIBLES + 1 }, (_, slot) => ({ slot, id: tick - slot }));

  return (
    <figure
      className={styles.figure}
      onPointerEnter={() => { paused.current = true; }}
      onPointerLeave={() => { paused.current = false; }}
    >
      <ul className={styles.stack} aria-hidden="true">
        {slots.map(({ slot, id }) => {
          const { Icon, titulo, texto } = ALERTAS[id % ALERTAS.length];
          return (
            <li key={id} className={styles.alert} style={{ '--slot': slot }} data-gone={slot === VISIBLES || undefined}>
              <span className={styles.icon}><Icon size={22} strokeWidth={1.75} /></span>
              <span className={styles.body}>
                <span className={styles.title}>{titulo}</span>
                <span className={styles.text}>{texto}</span>
              </span>
              <span className={styles.when}>{CUANDO[slot] ?? ''}</span>
            </li>
          );
        })}
      </ul>
    </figure>
  );
}
