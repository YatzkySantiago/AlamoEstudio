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
    header.classList.toggle('header-scrolled', window.scrollY > 50);
}, { passive: true });

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

// Manejo del Formulario de Contacto
const contactForm = document.getElementById('contactForm');
const mensajeExito = document.getElementById('mensaje-exito');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        try {
            const response = await fetch(contactForm.action, {
                method: contactForm.method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            if (response.ok) {
                contactForm.style.transition = 'opacity 0.5s ease';
                contactForm.style.opacity = '0';
                setTimeout(() => {
                    contactForm.style.display = 'none';
                    mensajeExito.style.display = 'flex';
                    mensajeExito.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 500);
                contactForm.reset();
            } else {
                const data = await response.json();
                alert(data.errors ? data.errors.map(err => err.message).join(", ") : "Error al enviar");
            }
        } catch (error) {
            alert("Hubo un error de conexión: " + error.message);
        }
    });
}