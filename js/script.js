(function () {
  'use strict';

  const throttle = (func, limit) => {
    let inThrottle;
    return function (...args) {
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  };

  document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.popup-link');
    let modal = null;

    links.forEach((link) => {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const figure = this.closest('figure');
        const header = figure.getAttribute('data-header');
        let description = figure.getAttribute('data-description');
        description = description.replace(/\n/g, '<br>');

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

          modal.querySelector('.popup-close').addEventListener('click', () => (modal.style.display = 'none'));
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
      { selector: '.head_kv', threshold: 0.05 },
      { selector: '#head_para', threshold: 0.05 },
      { selector: '.advantages', threshold: 0.05 },
      { selector: '.home_manners', threshold: 0.05 },
      { selector: '.manners', threshold: 0.05 },
      { selector: '.slide', threshold: 0.05 },
      { selector: '.map', threshold: 0.05 },
      { selector: '.faqs', threshold: 0.05 },
      { selector: '.comment_1', threshold: 0.05 },
    ];

    configs.forEach((config) => {
      const elements = document.querySelectorAll(config.selector);
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
  });

 window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});

  document.addEventListener('DOMContentLoaded', () => {
    const intHead = document.querySelector('.int_head');
    const container1 = document.querySelector('#shitara');
    const intHeadElements = document.querySelectorAll('.int_head');
    const containerElements = document.querySelectorAll('.container_1, .container_2, .container_3, .container_4, .container_5');
    const friendsCatchElements = document.querySelectorAll('.friends_catch');

    if (!intHead && !container1) return;

    const observeSection = (elements, threshold = 0.05) => {
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold }
      );
      elements.forEach((el) => observer.observe(el));
    };

    if (intHeadElements.length > 0) observeSection(intHeadElements);
    if (containerElements.length > 0) observeSection(containerElements);
    if (friendsCatchElements.length > 0) observeSection(friendsCatchElements, 0.2);

    if (!intHead || !container1) return;

    const handleInterviewScroll = throttle(() => {
      const intHeadRect = intHead.getBoundingClientRect();
      const container1Rect = container1.getBoundingClientRect();
      const isNearTop = intHeadRect.top <= 30;
      const isIntHeadAtTop = intHeadRect.top <= 0;
      const isContainer1AtTop = container1Rect.top <= 0;

      // Scroll logic preserved but color/logo changes removed
    }, 100);

    window.addEventListener('scroll', handleInterviewScroll);
  });





  //Teacher Page

  document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.teacher_head, .teacher_1, .teacher_2, .teacher_3, .teachers_catch');
    if (elements.length === 0) {
        console.warn('No target elements found. Check your HTML.');
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

     document.querySelectorAll('.teachers a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute('href'); // Get the href 
        const targetElement = document.querySelector(targetId); // Find the target element

        if (targetElement) {
            const offset = 15; // 15px offset
            const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY; 
            const offsetPosition = elementPosition - offset; // Position 15px above

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});


     //Interview Page

     document.querySelectorAll('.icons a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute('href'); // Get the href 
        const targetElement = document.querySelector(targetId); // Find the target element

        if (targetElement) {
            const offset = 15; // 15px offset
            const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY; 
            const offsetPosition = elementPosition - offset; // Position 15px above

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});




  //Skills Page

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


document.querySelectorAll('.teams a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute('href'); // Get the href (e.g., "#event")
        const targetElement = document.querySelector(targetId); // Find the target element

        if (targetElement) {
            const offset = 150; // 15px offset
            const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY; 
            const offsetPosition = elementPosition - offset; // Position 15px above

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth' // Smooth scrolling
            });
        }
    });
});




//Support Page


document.addEventListener('DOMContentLoaded', () => {
        const links = document.querySelectorAll('.popup-link2');
        let modal = null;

        console.log('Popup links found:', links.length);
        if (links.length === 0) {
            console.warn('No elements with class .popup-link found. Check your HTML.');
        }

        links.forEach(link => {
            link.addEventListener('click', function (event) {
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
    });



//Return to Top Button

window.addEventListener('scroll', function() {
    const topButton = document.getElementById('top');
    if (window.scrollY >= 1000) {
        topButton.classList.add('visible');
    } else {
        topButton.classList.remove('visible');
    }
});


})();
