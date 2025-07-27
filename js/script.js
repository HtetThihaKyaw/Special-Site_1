(function () {
    'use strict';

    // Throttle utility for scroll events
    const throttle = (func, limit) => {
        let inThrottle;
        return (...args) => {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => (inThrottle = false), limit);
            }
        };
    };

    document.addEventListener('DOMContentLoaded', () => {
        // FAQ Section
        if (typeof $ !== 'undefined') {
            $('.faq_3 .faq-question-container').on('click', function () {
                const $faq = $(this).closest('.faq');
                const $answerBox = $faq.find('.answer-box');
                const isActive = $faq.hasClass('active');

                $('.faq').not($faq).removeClass('active').attr('aria-expanded', 'false');
                $('.faq').not($faq).find('.answer-box').css('max-height', '0');

                $faq.toggleClass('active').attr('aria-expanded', !isActive);
                $answerBox.css('max-height', isActive ? '0' : $answerBox[0].scrollHeight + 'px');
            });

            $('.faq_3 .faq-question-container').on('keydown', function (e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    $(this).trigger('click');
                }
            });
        } else {
            console.warn('jQuery not loaded. FAQ functionality disabled.');
        }

        // Popup Modals (Teacher/Support Pages)
        const popupLinks = document.querySelectorAll('.popup-link, .popup-link2');
        let modal = null;
        if (popupLinks.length) {
            popupLinks.forEach((link) => {
                link.addEventListener('click', (event) => {
                    event.preventDefault();
                    const figure = link.closest('figure');
                    if (!figure) {
                        console.warn('No parent figure found for popup link:', link);
                        return;
                    }
                    const header = figure.getAttribute('data-header') || 'No Header';
                    const description = (figure.getAttribute('data-description') || '').replace(/\n/g, '<br>');
                    const image = figure.getAttribute('data-image') || '';

                    if (!modal) {
                        modal = document.createElement('div');
                        modal.className = 'popup-modal';
                        modal.innerHTML = `
                            <div class="popup-content">
                                <div class="popup-header">${header}</div>
                                <div class="popup-image"><img src="${image}" alt="${header}"></div>
                                <div class="popup-text">${description}</div>
                                <button class="popup-close">×</button>
                            </div>
                        `;
                        document.body.appendChild(modal);
                        modal.querySelector('.popup-close').addEventListener('click', () => (modal.style.display = 'none'));
                        modal.addEventListener('click', (e) => {
                            if (e.target === modal) modal.style.display = 'none';
                        });
                    } else {
                        modal.querySelector('.popup-header').textContent = header;
                        modal.querySelector('.popup-image img').src = image;
                        modal.querySelector('.popup-image img').alt = header;
                        modal.querySelector('.popup-text').innerHTML = description;
                    }
                    modal.style.display = 'flex';
                });
            });
        }

        // Intersection Observers for all pages
        const observerConfigs = [
            { selector: '.head_kv', threshold: 0.05 },
            { selector: '#head_para', threshold: 0.05 },
            { selector: '.jobs', threshold: 0.05 },
            { selector: '.job_titles', threshold: 0.03 },
            { selector: '.advantages', threshold: 0.05 },
            { selector: '.advantages_img', threshold: 0.05 },
            { selector: '.home_manners', threshold: 0.05 },
            { selector: '.manners', threshold: 0.05 },
            { selector: '.slide', threshold: 0.05 },
            { selector: '.map', threshold: 0.05 },,
            { selector: '.faq_header  h3', threshold: 0.05 },
            { selector: '.faq_3', threshold: 0.05 }, 
            { selector: '.comment_1', threshold: 0.05 },
            { selector: '.int_head', threshold: 0.05 },
            { selector: '.container_1, .container_2, .container_3, .container_4, .container_5', threshold: 0.05 },
            { selector: '.friends_catch', threshold: 0.2 },
            { selector: '.teacher_head, .teacher_1, .teacher_2, .teacher_3, .teachers_catch', threshold: 0.2 },
            { selector: '#kv_head3', threshold: 0.05 },
            { selector: '.project_teams', threshold: 0.05 },
            { selector: '.team_para, .event, .graphic, .seminar_t, .hotpage, .main', threshold: 0.05 },
            { selector: '#skill_catch', threshold: 0.05 },
            { selector: '#kv_head2', threshold: 0.05 },
            { selector: '.hr_manners', threshold: 0.05 },
            { selector: '.support_para, .support_para2, .support_para3', threshold: 0.05 },
            { selector: '#sup_catch', threshold: 0.05 },
        ];

        observerConfigs.forEach((config) => {
            const elements = document.querySelectorAll(config.selector);
            if (!elements.length) {
                console.warn(`No elements found for selector: ${config.selector}`);
                return;
            }
            const observer = new IntersectionObserver(
                (entries, observer) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('visible');
                            observer.unobserve(entry.target);
                        }
                    });
                },
                { threshold: config.threshold }
            );
            elements.forEach((element) => observer.observe(element));
        });

        // Smooth Scrolling for Teacher, Interview, Skills
        const anchorSelectors = [
            { selector: '.teachers a', offset: 15 },
            { selector: '.icons a', offset: 15 },
            { selector: '.teams a', offset: 150 },
        ];
        anchorSelectors.forEach(({ selector, offset }) => {
            const anchors = document.querySelectorAll(selector);
            if (!anchors.length) {
                console.warn(`No anchors found for selector: ${selector}`);
                return;
            }
            anchors.forEach((anchor) => {
                anchor.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetId = anchor.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                        window.scrollTo({
                            top: elementPosition - offset,
                            behavior: 'smooth',
                        });
                    } else {
                        console.warn(`Target element not found for ID: ${targetId}`);
                    }
                });
            });
        });

        // Return to Top Button
        const topButton = document.getElementById('top');
        if (topButton) {
            window.addEventListener('scroll', () => {
                topButton.classList.toggle('visible', window.scrollY >= 1000);
            });
        } else {
            console.warn('Top button not found for ID: top');
        }

        // Reset scroll on load
        window.scrollTo(0, 0);
    });
})();