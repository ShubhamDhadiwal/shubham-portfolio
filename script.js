document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Smooth Scrolling for Navigation Links ---
    // Ensures when you click "Experience", it glides down smoothly.
    const links = document.querySelectorAll('.nav-links a');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            // Only apply to internal hash links
            if (link.hash !== "") {
                // Let the browser handle page changes normally if it's a different file
                // But for the same page, we animate.
                const target = document.querySelector(link.hash);
                if (target) {
                    e.preventDefault();
                    window.scrollTo({
                        top: target.offsetTop - 80, // Offset for the fixed navbar
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // --- 2. Scroll Reveal Observer (UI/UX Animation) ---
    // This triggers the Animate.css effects only when the element enters the screen.
    const observerOptions = {
        threshold: 0.15 // Trigger when 15% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the animation class
                entry.target.classList.add('animate__animated');
                
                // Determine which animation to play based on card type
                if (entry.target.classList.contains('card')) {
                    entry.target.classList.add('animate__fadeInUp');
                } else if (entry.target.classList.contains('project-card')) {
                    entry.target.classList.add('animate__zoomIn');
                }
                
                // Stop observing once the animation has played
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply observer to all cards and section titles
    const animateElements = document.querySelectorAll('.card, .project-card, .section-title, .detail-card');
    animateElements.forEach(el => {
        el.style.opacity = "0"; // Start hidden
        observer.observe(el);
    });

    // --- 3. Navbar Background Change on Scroll ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(11, 12, 16, 0.98)';
            navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
        } else {
            navbar.style.background = 'rgba(11, 12, 16, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
});
