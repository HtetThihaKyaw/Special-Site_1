(function(){
  'use strict';

document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('#kv_head3');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, { threshold: 0.05 }); // Trigger when 20% of the element is visible

    elements.forEach(element => observer.observe(element));
});


document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.project_teams');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.05 });

    elements.forEach(element => observer.observe(element));
});

document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.team_para');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.05 }); 

    elements.forEach(element => observer.observe(element));
});

document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('#skill_catch');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.05 }); 

    elements.forEach(element => observer.observe(element));
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


'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const kvHead3 = document.querySelector("#kv_head3");
    const targetSections = document.querySelectorAll('.event, .graphic, .seminar_t, .hotpage, .main');
    const allNavLinks = document.querySelectorAll('.nav li a');
    const specificNavItems = document.querySelectorAll('.nav_home, .nav_teacher, .nav_interview');

    if (!kvHead3 || targetSections.length === 0) {
        console.warn('Elements #kv_head3 or .event, .graphic, .seminar_t, .hotpage, .main not found. Check your HTML.');
        return;
    }

    window.addEventListener('scroll', () => {
        const kvRect = kvHead3.getBoundingClientRect();
        const isKvAtTop = kvRect.top <= 0;
        const isKvPastBottom = kvRect.bottom <= 0;

        let anySectionInView = false;
        targetSections.forEach(section => {
            const rect = section.getBoundingClientRect();
            // Trigger 100px before top reaches 0
            if (rect.top <= 100 && rect.bottom > 0) {
                anySectionInView = true;
            }
        });

        // Apply color for all nav links based on #kv_head3
        allNavLinks.forEach(link => {
            if (isKvAtTop && !isKvPastBottom) {
                link.style.color = 'white';
            } else if (anySectionInView) {
                link.style.color = 'white'; // Override with white for specific items
            } else {
                link.style.color = 'blue'; // Default color
            }
        });

        // Ensure specific items follow the target sections logic
        specificNavItems.forEach(item => {
            const link = item.querySelector('a');
            if (anySectionInView) {
                link.style.color = 'white';
            } else if (isKvAtTop && !isKvPastBottom) {
                link.style.color = 'white';
            } else {
                link.style.color = 'blue';
            }
        });
    });

    // Initial check
    const kvInitialRect = kvHead3.getBoundingClientRect();
    let anySectionInViewInitial = false;
    targetSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom > 0) {
            anySectionInViewInitial = true;
        }
    });

    if (kvInitialRect.top <= 0 && kvInitialRect.bottom > 0) {
        allNavLinks.forEach(link => {
            link.style.color = 'white';
        });
    } else if (anySectionInViewInitial) {
        specificNavItems.forEach(item => {
            item.querySelector('a').style.color = 'white';
        });
    } else {
        allNavLinks.forEach(link => {
            link.style.color = 'blue';
        });
    }
});

})();