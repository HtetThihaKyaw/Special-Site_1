(function(){
'use distict';


document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('#kv_head2');
    
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
    const elements = document.querySelectorAll('.hr_manners');
    
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
    const elements = document.querySelectorAll('.support_para');
    
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
    const elements = document.querySelectorAll('.support_para2');
    
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
    const elements = document.querySelectorAll('.support_para3');
    
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
    const elements = document.querySelectorAll('#sup_catch');
    
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

})();