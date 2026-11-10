import { createContext, useContext, useMemo, useState } from 'react';

export const PLAN_MENSUAL = '$25.000';

export const NEEDS = [
  {
    id: 'landing',
    label: 'Landing page',
    short: 'Landing',
    priceLabel: 'Landing page',
    price: 'desde $80.000',
    priceNote: `+ ${PLAN_MENSUAL} por mes`,
    ask: 'Quiero una landing page',
    close: '.',
    tail: ' ¿Me pasan un presupuesto?',
  },
  {
    id: 'app',
    label: 'App a medida',
    short: 'App',
    priceLabel: 'App a medida',
    price: 'Solicitá una cotización',
    priceNote: 'Te pasamos un número según lo que necesites',
    ask: 'Quiero una app a medida',
    close: '.',
    tail: ' ¿Me pasan un presupuesto?',
  },
  {
    id: 'nose',
    label: 'No sé',
    short: 'No sé',
    priceLabel: '¿No sabés qué necesitás?',
    price: 'Te ayudamos',
    priceNote: 'Contanos tu negocio y lo definimos juntos',
    ask: 'Necesito algo digital',
    close: ', pero no sé bien qué me conviene.',
    tail: ' ¿Me ayudan a definirlo?',
  },
];

function buildSegments(need, business, city) {
  const name = business.trim();
  const place = city.trim();
  return [
    { key: 'hello', text: 'Hola, Álamo Estudio. ' },
    { key: need.ask, text: `${need.ask} para mi negocio` },
    ...(name ? [{ key: 'business', text: ` (${name})` }] : []),
    ...(place ? [{ key: 'city', text: `, en ${place}` }] : []),
    { key: need.close, text: need.close },
    { key: need.tail, text: need.tail },
  ];
}

const MessageContext = createContext(null);

export function MessageProvider({ children }) {
  const [needId, setNeedId] = useState('landing');
  const [business, setBusiness] = useState('');
  const [city, setCity] = useState('');
  const [edited, setEdited] = useState(false);

  const value = useMemo(() => {
    const need = NEEDS.find((item) => item.id === needId);
    const segments = buildSegments(need, business, city);
    const touch = (setter) => (next) => {
      setEdited(true);
      setter(next);
    };
    return {
      need,
      needIndex: NEEDS.indexOf(need),
      business,
      city,
      edited,
      segments,
      message: segments.map((segment) => segment.text).join(''),
      setNeedId: touch(setNeedId),
      setBusiness: touch(setBusiness),
      setCity: touch(setCity),
    };
  }, [needId, business, city, edited]);

  return <MessageContext.Provider value={value}>{children}</MessageContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const useMessage = () => useContext(MessageContext);
