document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = { threshold: 0.1 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // FIXED: Keep opacity at 1 so cards don't disappear
                entry.target.style.opacity = "1";
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply to all elements that should "reveal"
    document.querySelectorAll('.card, .project-card, .exp-item, .detail-card').forEach(el => {
        el.style.opacity = "0"; 
        observer.observe(el);
    });
});
