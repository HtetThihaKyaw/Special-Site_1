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






        
    });
})();