(function() {
    'use strict';
    document.addEventListener("DOMContentLoaded", () => {
        const configs = [
            { selector: '#kv_head2', threshold: 0.05 },
            { selector: '.hr_manners', threshold: 0.05 },
            { selector: '.support_para', threshold: 0.05 },
            { selector: '.support_para2', threshold: 0.05 },
            { selector: '.support_para3', threshold: 0.05 },
            { selector: '#sup_catch', threshold: 0.05 }
        ];
        configs.forEach(config => {
            document.querySelectorAll(config.selector).forEach(element => {
                new IntersectionObserver(entries => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('visible');
                            observer.unobserve(entry.target);
                        }
                    });
                }, { threshold: config.threshold }).observe(element);
            });
        });

        const kvHead2 = document.querySelector('#kv_head2');
        const targetSections = document.querySelectorAll('.support_para, .support_para2, .support_para3');
        const navLinks = document.querySelectorAll('.nav li a');

        if (!kvHead2 || targetSections.length === 0) return;

        window.addEventListener('scroll', () => {
            const kvRect = kvHead2.getBoundingClientRect();
            const isKvAtTop = kvRect.top <= 0;
            const isKvPastBottom = kvRect.bottom <= 0;
            let anySectionInView = false;

            targetSections.forEach(section => {
                if (section.getBoundingClientRect().top <= 50 && section.getBoundingClientRect().bottom > 0) anySectionInView = true;
            });

            navLinks.forEach(link => {
                link.style.color = ((isKvAtTop && !isKvPastBottom) || anySectionInView) ? 'white' : '#494AE9';
            });
        });

        const kvInitialRect = kvHead2.getBoundingClientRect();
        let anySectionInViewInitial = false;
        targetSections.forEach(section => {
            if (section.getBoundingClientRect().top <= 100 && section.getBoundingClientRect().bottom > 0) anySectionInViewInitial = true;
        });

        navLinks.forEach(link => {
            link.style.color = ((kvInitialRect.top <= 0 && kvInitialRect.bottom > 0) || anySectionInViewInitial) ? 'white' : '#494AE9';
        });
    });
})();