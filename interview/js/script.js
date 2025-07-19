(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', () => {
        const intHead = document.querySelector('.int_head');
        const container1 = document.querySelector('#shitara');
        const navLinks = document.querySelectorAll('.nav li a');
        const intHeadElements = document.querySelectorAll('.int_head');
        const containerElements = document.querySelectorAll('.container_1, .container_2, .container_3, .container_4, .container_5');
        const friendsCatchElements = document.querySelectorAll('.friends_catch');

        if (intHeadElements.length === 0) {
            console.warn('No elements with class .int_head found. Check your HTML.');
        } else {
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.05 });

            intHeadElements.forEach(element => observer.observe(element));
        }

        if (containerElements.length === 0) {
            console.warn('No elements with classes .container_1, .container_2, .container_3, .container_4, or .container_5 found. Check your HTML.');
        } else {
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.05 });

            containerElements.forEach(element => observer.observe(element));
        }

        if (friendsCatchElements.length === 0) {
            console.warn('No elements with class .friends_catch found. Check your HTML.');
        } else {
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.2 });

            friendsCatchElements.forEach(element => observer.observe(element));
        }

        if (!intHead) {
            console.warn('Element with class .int_head not found. Check your HTML.');
            return;
        }
        if (!container1) {
            console.warn('Element with id #shitara not found. Check your HTML.');
            return;
        }
        if (navLinks.length === 0) {
            console.warn('No navigation links with class .(nav li a found. Check your HTML.');
            return;
        }

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
            const intHeadRect = intHead.getBoundingClientRect();
            const container1Rect = container1.getBoundingClientRect();
            const isNearTop = intHeadRect.top <= 40;
            const isIntHeadAtTop = intHeadRect.top <= 0;
            const isContainer1AtTop = container1Rect.top <= 0;

            navLinks.forEach(link => {
                if (isNearTop && (!isIntHeadAtTop || (isIntHeadAtTop && !isContainer1AtTop))) {
                    link.style.color = 'white';
                } else {
                    link.style.color = '#494AE9';
                }
            });
        }, 100);

        window.addEventListener('scroll', handleScroll);

        const initialIntHeadRect = intHead.getBoundingClientRect();
        const initialContainer1Rect = container1.getBoundingClientRect();
        if (initialIntHeadRect.top <= 40 && (initialIntHeadRect.top > 0 || initialContainer1Rect.top > 0)) {
            navLinks.forEach(link => {
                link.style.color = 'white';
            });
        } else {
            navLinks.forEach(link => {
                link.style.color = '#494AE9';
            });
        }
    });
})();