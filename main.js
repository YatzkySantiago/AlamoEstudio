//Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === "#") return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

//Fade-Up On-Scroll
const fadeInOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};
const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeInObserver.unobserve(entry.target);
        }
    });
}, fadeInOptions);
document.querySelectorAll('.servicio, .proceso-box, .faq-item, .contenedor-contacto, .form-group').forEach(el => {
    el.classList.add('fade-in');
    fadeInObserver.observe(el);
});

//Header Background on Scroll
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    // Usamos toggle con un booleano para mayor eficiencia
    header.classList.toggle('header-scrolled', window.scrollY > 50);
}, { passive: true }); // 'passive' ayuda a que el scroll sea más fluido

//Acordeon FAQ
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        document.querySelectorAll('.faq-item').forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        item.classList.toggle('active');
    });
});

// Manejo del Formulario de Contacto (Netlify + Animación)
const contactForm = document.getElementById('contactForm');
const mensajeExito = document.getElementById('mensaje-exito');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita que Netlify recargue la página

        const formData = new FormData(contactForm);

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        })
            .then(() => {
                // Animación de salida para el formulario
                contactForm.style.transition = 'opacity 0.5s ease';
                contactForm.style.opacity = '0';

                setTimeout(() => {
                    contactForm.style.display = 'none'; // Quitamos el formulario
                    mensajeExito.style.display = 'flex'; // Mostramos el tilde verde

                    // Hacemos scroll suave al mensaje por si quedó muy abajo
                    mensajeExito.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 500);
            })
            .catch((error) => {
                alert("Error al enviar: " + error);
            });
    });
}