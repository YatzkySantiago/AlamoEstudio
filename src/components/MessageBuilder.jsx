import { useEffect, useRef } from 'react';
import { CheckCheck } from 'lucide-react';
import { NEEDS, useMessage } from '../message';
import { WhatsAppIcon, waLink } from '../whatsapp';
import styles from './MessageBuilder.module.css';

export default function MessageBuilder() {
  const { need, needIndex, business, city, segments, message, setNeedId, setBusiness, setCity } = useMessage();

  // Segments present on first render stay still; only segments added later animate in.
  const settledRef = useRef(null);
  if (settledRef.current === null) settledRef.current = new Set(segments.map((segment) => segment.key));
  useEffect(() => {
    const present = new Set(segments.map((segment) => segment.key));
    settledRef.current.forEach((key) => { if (!present.has(key)) settledRef.current.delete(key); });
  });

  return (
    <div id="mensaje" className={styles.builder}>
      <fieldset className={styles.fieldset}>
        <legend className={styles.label}>¿Qué necesitás?</legend>
        <div className={styles.segmented} style={{ '--index': needIndex, '--count': NEEDS.length }}>
          <span className={styles.thumb} aria-hidden="true" />
          {NEEDS.map((item) => (
            <label key={item.id} className={styles.option} data-selected={item.id === need.id || undefined}>
              <input
                type="radio"
                name="necesidad"
                value={item.id}
                checked={item.id === need.id}
                onChange={(event) => setNeedId(event.target.value)}
                className="srOnly"
              />
              <span className={styles.long}>{item.label}</span>
              <span className={styles.short} aria-hidden="true">{item.short}</span>
            </label>
          ))}
        </div>
        <p className={styles.price} key={need.id}>
          <strong>{need.price}</strong> {need.price.startsWith('desde') ? need.priceNote : ''}
        </p>
      </fieldset>

      <fieldset className={`${styles.fieldset} ${styles.fields}`}>
        <legend className={styles.label}>Sobre tu negocio <span>(opcional)</span></legend>
        <div>
          <label className={styles.small} htmlFor="negocio">Rubro</label>
          <input
            id="negocio"
            className={styles.input}
            value={business}
            onChange={(event) => setBusiness(event.target.value)}
            maxLength={60}
            placeholder="Ej: ferretería"
            autoComplete="organization"
          />
        </div>
        <div>
          <label className={styles.small} htmlFor="ciudad">Ciudad</label>
          <input
            id="ciudad"
            className={styles.input}
            value={city}
            onChange={(event) => setCity(event.target.value)}
            maxLength={40}
            placeholder="Ej: Cipolletti"
            autoComplete="address-level2"
          />
        </div>
      </fieldset>

      <div className={styles.wall}>
        <p className="srOnly" aria-live="polite">Tu mensaje: {message}</p>
        <div className={styles.bubble} aria-hidden="true">
          <p className={styles.text}>
            {segments.map((segment) => (
              <span
                key={segment.key}
                className={styles.segment}
                data-settled={settledRef.current.has(segment.key) || undefined}
              >
                {segment.text}
              </span>
            ))}
          </p>
          <p className={styles.time}>
            Vista previa
            <CheckCheck size={15} strokeWidth={2} />
          </p>
        </div>
      </div>

      <div id="enviar">
        <a className={`btn btnWa ${styles.sendButton}`} href={waLink(message)} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon size={22} />
          Enviar por WhatsApp
        </a>
      </div>
    </div>
  );
}
