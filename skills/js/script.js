(function() {
    'use strict';
    document.addEventListener("DOMContentLoaded", () => {
        const configs = [
            { selector: '#kv_head3', threshold: 0.05 },
            { selector: '.project_teams', threshold: 0.05 },
            { selector: '.team_para', threshold: 0.05 },
            { selector: '#skill_catch', threshold: 0.05 }
        ];
        configs.forEach(config => {
            const elements = document.querySelectorAll(config.selector);
            const observer = new IntersectionObserver(entries => {
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

document.addEventListener('DOMContentLoaded', () => {
    // Select all sections within .team_para
    const sections = document.querySelectorAll('.event, .graphic, .seminar_t, .hotpage, .main');
    
    console.log('Sections found:', sections.length);

    if (sections.length === 0) {
        console.warn('No sections found. Check your HTML.');
        return;
    }

    // Create Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Section visible:', entry.target);
                entry.target.classList.add('visible');
                // Uncomment to stop observing after first trigger
                // observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.05 }); // Trigger when 30% is visible

    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });
});

})();