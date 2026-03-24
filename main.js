// Fade-up on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                // stagger siblings
                const siblings = e.target.parentElement.querySelectorAll('.fade-up');
                siblings.forEach((el, i) => {
                    setTimeout(() => el.classList.add('visible'), i * 100);
                });
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));