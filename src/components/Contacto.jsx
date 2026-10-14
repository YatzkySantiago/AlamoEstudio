import { useState, useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from './Contacto.module.css';

const FORMSPREE = 'https://formspree.io/f/mykooqzv';

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

function FloatingInput({ id, name, label, type = 'text', required, pattern, title, as }) {
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const props = {
    id, name, type, required, pattern, title,
    onFocus: () => setFocused(true),
    onBlur: (e) => { setFocused(false); setHasValue(!!e.target.value); },
    onChange: (e) => setHasValue(!!e.target.value),
    className: styles.input,
  };

  const isActive = focused || hasValue;

  return (
    <div className={`${styles.field} ${isActive ? styles.fieldActive : ''}`}>
      {as === 'textarea'
        ? <textarea {...props} rows={4} className={`${styles.input} ${styles.textarea}`} />
        : <input {...props} />
      }
      <label htmlFor={id} className={`${styles.label} ${isActive ? styles.labelActive : ''}`}>
        {label}
      </label>
      <div className={styles.fieldLine} />
    </div>
  );
}

export default function Contacto() {
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const formRef = useRef(null);
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation();
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    const data = new FormData(formRef.current);
    try {
      const res = await fetch(FORMSPREE, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        formRef.current?.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contacto" className={styles.section}>
      <div className={styles.inner}>
        {/* Left */}
        <div ref={leftRef} className={`${styles.left} ${leftVisible ? styles.visible : ''}`}>
          <span className={styles.sectionLabel}>Contacto</span>
          <h2 className={styles.title}>
            ¿Listo para hacer <span>crecer</span> tu negocio?
          </h2>
          <p className={styles.intro}>
            Contanos sobre tu proyecto y en menos de 24 hs nos ponemos en contacto.
          </p>

          <div className={styles.contactItems}>
            {[
              { icon: '📩', text: 'sy@alamoestudio.com' },
              { icon: '📍', text: 'Patagonia, Argentina' },
            ].map(({ icon, text }) => (
              <div key={text} className={styles.contactItem}>
                <span className={styles.contactIcon}>{icon}</span>
                <span>{text}</span>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/542996746759"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.wppBtn}
          >
            <WhatsAppIcon />
            Escribinos por WhatsApp
          </a>
        </div>

        {/* Right — Form */}
        <div ref={rightRef} className={`${styles.right} ${rightVisible ? styles.visible : ''}`}>
          {status === 'success' ? (
            <div className={styles.success}>
              <div className={styles.checkCircle}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3>¡Mensaje enviado!</h3>
              <p>Nos pondremos en contacto en menos de 24 horas.</p>
              <button onClick={() => setStatus('idle')} className={styles.resetBtn}>
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className={styles.form} noValidate>
              <FloatingInput id="nombre" name="nombre" label="Nombre" required />
              <FloatingInput id="email" name="email" label="Email" type="email" required />
              <FloatingInput
                id="telefono"
                name="telefono"
                label="Teléfono"
                type="tel"
                pattern="[0-9+ ]{8,18}"
                title="Ingresá un número de teléfono válido"
                required
              />
              <FloatingInput id="mensaje" name="mensaje" label="Mensaje" as="textarea" required />

              {status === 'error' && (
                <p className={styles.errorMsg}>Hubo un error. Intentá de nuevo o escribinos por WhatsApp.</p>
              )}

              <button type="submit" className={styles.submitBtn} disabled={status === 'loading'}>
                {status === 'loading' ? (
                  <>
                    <span className={styles.spinner} />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar mensaje
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
