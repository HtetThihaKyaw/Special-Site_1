(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', () => {
        const links = document.querySelectorAll('.popup-link2');
        let modal = null;

        console.log('Popup links found:', links.length);
        if (links.length === 0) {
            console.warn('No elements with class .popup-link found. Check your HTML.');
        }

        links.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                const figure = this.closest('figure');
                const header = figure.getAttribute('data-header');
                let description = figure.getAttribute('data-description');

                console.log('Raw description:', description);
                description = description.replace(/\n/g, '<br>');

                console.log('Processed description:', description);

                if (!modal) {
                    modal = document.createElement('div');
                    modal.className = 'popup-modal';
                    modal.innerHTML = `
                        <div class="popup-content">
                            <div class="popup-header">${header}</div>
                            <div class="popup-image"><img src="${figure.getAttribute('data-image')}" alt="${header}"></div>
                            <div class="popup-text">${description}</div>
                            <button class="popup-close">×</button>
                        </div>
                    `;
                    document.body.appendChild(modal);

                    modal.querySelector('.popup-close').addEventListener('click', () => modal.style.display = 'none');
                    modal.addEventListener('click', (e) => {
                        if (e.target === modal) modal.style.display = 'none';
                    });
                } else {
                    modal.querySelector('.popup-header').textContent = header;
                    modal.querySelector('.popup-image img').setAttribute('src', figure.getAttribute('data-image'));
                    modal.querySelector('.popup-image img').setAttribute('alt', header);
                    modal.querySelector('.popup-text').innerHTML = description;
                }

                modal.style.display = 'flex';
            });
        });

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
                new IntersectionObserver((entries, observer) => {
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