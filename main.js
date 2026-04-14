// Fade-up en scroll
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return; // Early return, evita el bloque else implícito

            entry.target.classList.add('visible');

            entry.target.querySelectorAll('.fade-up').forEach((child, i) => {
                child.style.transitionDelay = `${i * 150}ms`;
                child.classList.add('visible');
            });

            observer.unobserve(entry.target);
        });
    }, {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px"
    });

    document.querySelectorAll(
        '.section-header, .services-grid, .process-grid, .features-container, .cta-left, .cta-right'
    ).forEach(el => observer.observe(el));
});