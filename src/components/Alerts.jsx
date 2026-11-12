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
  { Icon: MessageCircle, titulo: 'Nueva consulta', texto: '¿Cuánto sale el envío?' },
  { Icon: CalendarCheck, titulo: 'Nueva reserva', texto: 'Mesa para 2, viernes 21 h' },
];

const INTERVALO = 1700;
const EDAD_MAXIMA = 12;
const DESENFOCADAS = ['f1', 'f2', 'f3', 'f4', 'f5', 'f6'];

// Order in which the slots receive a new alert, jumping from one side to the other.
const POSICIONES = {
  escritorio: ['a', 'e', 'c', 'd', 'b', 'f'],
  tablet: ['a', 'c', 'd', 'f'],
  celular: ['a'],
};

const CELULAR = '(max-width: 680px)';
const TABLET = '(max-width: 1239px)';

function leerPantalla() {
  if (window.matchMedia(CELULAR).matches) return 'celular';
  return window.matchMedia(TABLET).matches ? 'tablet' : 'escritorio';
}

function usePantalla() {
  const [pantalla, setPantalla] = useState('escritorio');

  useEffect(() => {
    const queries = [window.matchMedia(CELULAR), window.matchMedia(TABLET)];
    const update = () => setPantalla(leerPantalla());
    update();
    queries.forEach((query) => query.addEventListener('change', update));
    return () => queries.forEach((query) => query.removeEventListener('change', update));
  }, []);

  return pantalla;
}

function Tarjeta({ alerta, edad, saliendo, espera }) {
  const { Icon, titulo, texto } = alerta;
  return (
    <div className={`${styles.card} ${saliendo ? styles.out : ''}`} style={{ '--wait': `${espera}ms` }}>
      <span className={styles.icon}><Icon size={20} strokeWidth={1.75} /></span>
      <span className={styles.body}>
        <span className={styles.title}>{titulo}</span>
        <span className={styles.text}>{texto}</span>
      </span>
      <span className={styles.when}>{edad === 0 ? 'ahora' : `hace ${edad} min`}</span>
    </div>
  );
}

export default function Alerts() {
  // `tick` only grows; every tick replaces the alert of one slot, in turn.
  const [tick, setTick] = useState(0);
  const paused = useRef(false);
  const posiciones = POSICIONES[usePantalla()];

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const timer = setInterval(() => {
      if (!paused.current && !document.hidden) setTick((value) => value + 1);
    }, INTERVALO);
    return () => clearInterval(timer);
  }, []);

  const total = posiciones.length;

  // Generation 0 is the alert shown on load; generation n arrives at tick `posicion + 1 + (n - 1) * total`.
  const generacion = (posicion, numero) => {
    if (numero === 0) {
      return { alerta: ALERTAS[posicion], llegada: 0, edadInicial: total - 1 - posicion, espera: 350 + posicion * 110 };
    }
    const llegada = posicion + 1 + (numero - 1) * total;
    return { alerta: ALERTAS[(llegada + 5) % ALERTAS.length], llegada, edadInicial: 0, espera: 140 };
  };

  const edadDe = ({ llegada, edadInicial }) => Math.min(edadInicial + tick - llegada, EDAD_MAXIMA);

  return (
    <div className={styles.stage} aria-hidden="true">
      {DESENFOCADAS.map((nombre) => <i key={nombre} className={`${styles.far} ${styles[nombre]}`} />)}
      {posiciones.map((nombre, posicion) => {
        const numero = tick > posicion ? Math.floor((tick - posicion - 1) / total) + 1 : 0;
        const actual = generacion(posicion, numero);
        const anterior = numero > 0 && actual.llegada === tick ? generacion(posicion, numero - 1) : null;
        return (
          <div
            key={nombre}
            className={`${styles.slot} ${styles[nombre]}`}
            onPointerEnter={() => { paused.current = true; }}
            onPointerLeave={() => { paused.current = false; }}
          >
            {anterior && <Tarjeta key={numero - 1} alerta={anterior.alerta} edad={edadDe(anterior)} espera={0} saliendo />}
            <Tarjeta key={numero} alerta={actual.alerta} edad={edadDe(actual)} espera={actual.espera} />
          </div>
        );
      })}
    </div>
  );
}
