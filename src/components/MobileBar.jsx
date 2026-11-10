import { useEffect, useState } from 'react';
import { WA_MESSAGES, WhatsAppIcon, waLink } from '../whatsapp';
import styles from './MobileBar.module.css';

export default function MobileBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const targets = ['#hero-acciones', '#enviar', '#cierre'].map((id) => document.querySelector(id)).filter(Boolean);
    const inView = new Set();
    let measured = false;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) inView.add(entry.target);
        else inView.delete(entry.target);
      });
      measured = true;
      setShow(measured && inView.size === 0);
    });
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`${styles.bar} ${show ? styles.show : ''}`} inert={!show}>
      <a className="btn btnWa" href={waLink(WA_MESSAGES.general)} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon size={22} />
        Escribinos por WhatsApp
      </a>
    </div>
  );
}
