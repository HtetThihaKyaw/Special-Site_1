(function(){
    'use strict';

    document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.int_head');
    
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
    const elements = document.querySelectorAll('.container_1, .container_2, .container_3, .container_4, .container_5');
    
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
    const elements = document.querySelectorAll('.friends_catch');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, { threshold: 0.2 }); // Trigger when 20% of the element is visible

    elements.forEach(element => observer.observe(element));
});



document.addEventListener('DOMContentLoaded', () => {
    const targetSection = document.querySelector(".int_head");
    const navLinks = document.querySelectorAll('.nav li a');

    if (!targetSection) {
        console.warn('Element with class .int_head not found. Check your HTML.');
        return;
    }

    window.addEventListener('scroll', () => {
        const rect = targetSection.getBoundingClientRect();
        const isAtTop = rect.top <= 0;

        navLinks.forEach(link => {
            if (isAtTop) {
                link.style.color = 'white';
            } else {
                link.style.color = ''; // Reset to default or original color
            }
        });
    });

    // Initial check
    const initialRect = targetSection.getBoundingClientRect();
    if (initialRect.top <= 0) {
        navLinks.forEach(link => {
            link.style.color = 'white';
        });
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const intHead = document.querySelector(".int_head");
    const container1 = document.querySelector("#shitara");
    const navLinks = document.querySelectorAll('.nav li a');

    if (!intHead || !container1) {
        console.warn('Elements .int_head or #shitara not found. Check your HTML.');
        return;
    }

    window.addEventListener('scroll', () => {
        const intHeadRect = intHead.getBoundingClientRect();
        const container1Rect = container1.getBoundingClientRect();
        const isIntHeadAtTop = intHeadRect.top <= 0;
        const isContainer1AtTop = container1Rect.top <= 0;

        navLinks.forEach(link => {
            if (isIntHeadAtTop && !isContainer1AtTop) {
                link.style.color = 'white';
            } else {
                link.style.color = '#494AE9'; // Original color, adjust as needed
            }
        });
    });

    // Initial check
    const initialIntHeadRect = intHead.getBoundingClientRect();
    const initialContainer1Rect = container1.getBoundingClientRect();
    if (initialIntHeadRect.top <= 0 && initialContainer1Rect.top > 0) {
        navLinks.forEach(link => {
            link.style.color = 'white';
        });
    } else {
        navLinks.forEach(link => {
            link.style.color = '#494AE9'; // Original color
        });
    }
});

})();