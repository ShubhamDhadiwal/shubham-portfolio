document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = { threshold: 0.1 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // FORCE VISIBILITY: Prevent disappearing after animation
                entry.target.style.opacity = "1";
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply to all cards
    document.querySelectorAll('.card, .project-card, .detail-card').forEach(el => {
        el.style.opacity = "0"; // Initial state
        observer.observe(el);
    });
});
