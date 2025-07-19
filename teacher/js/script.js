(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', () => {
        // IntersectionObserver for .teacher_head visibility
        const elements = document.querySelectorAll('.teacher_head');
        if (elements.length === 0) {
            console.warn('No elements with class .teacher_head found. Check your HTML.');
        } else {
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.2 });

            elements.forEach(element => observer.observe(element));
        }






        // Scroll event for navigation links
        const targetSection = document.querySelector('.teacher_head');
        const navLinks = document.querySelectorAll('.nav li a');

        if (!targetSection) {
            console.warn('Element with class .teacher_head not found. Check your HTML.');
            return;
        }
        if (navLinks.length === 0) {
            console.warn('No navigation links with class .nav li a found. Check your HTML.');
            return;
        }

        // Throttle function to limit scroll event frequency
        const throttle = (func, limit) => {
            let inThrottle;
            return (...args) => {
                if (!inThrottle) {
                    func.apply(this, args);
                    inThrottle = true;
                    setTimeout(() => inThrottle = false, limit);
                }
            };
        };

        const handleScroll = throttle(() => {
            const rect = targetSection.getBoundingClientRect();
            const isNearTop = rect.top <= 40; // Trigger 50px before top

            navLinks.forEach(link => {
                link.style.color = isNearTop ? 'white' : ''; // Revert to CSS-defined color
            });
        }, 100);

        window.addEventListener('scroll', handleScroll);
    });
})();