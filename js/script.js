(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', () => {
        // Pop-up Modal Functionality
        const links = document.querySelectorAll('.popup-link');
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
                description = description.replace(/\n/g, '<br>'); // Ensure \n is used in HTML
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

        // Intersection Observer Functionality
        const configs = [
            { selector: '.head_kv', threshold: 0.05 },
            { selector: '#head_para', threshold: 0.05 },
            { selector: '.advantages', threshold: 0.05 },
            { selector: '.home_manners', threshold: 0.05 },
            { selector: '.slide', threshold: 0.05 },
            { selector: '.map', threshold: 0.05 },
            { selector: '.faqs', threshold: 0.05 }
        ];

        configs.forEach(config => {
            const elements = document.querySelectorAll(config.selector);
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: config.threshold });

            elements.forEach(element => observer.observe(element));
        });
    });
})();

// Intersection Observer for .head_kv
//         const elements = document.querySelectorAll('.head_kv');
        
//         console.log('Elements with .head_kv:', elements.length);
//         if (elements.length === 0) {
//             console.warn('No elements with class .head_kv found. Check your HTML.');
//             return;
//         }

//         const observer = new IntersectionObserver((entries, observer) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     console.log('Intersection detected for:', entry.target);
//                     entry.target.classList.add('visible');
//                 }
//             });
//         }, { threshold: 0.3 });

//         elements.forEach(element => {
//             observer.observe(element);
//         });
//     });

//     document.addEventListener("DOMContentLoaded", function() {
//     const elements = document.querySelectorAll('#head_para');
    
//     const observer = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('visible');
//                 observer.unobserve(entry.target); 
//             }
//         });
//     }, { threshold: 0.2 }); 

//     elements.forEach(element => observer.observe(element));
// });