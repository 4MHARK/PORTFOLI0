// 
  // Create a new IntersectionObserver instance
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // Check if the hero section is currently intersecting with the viewport
      if (entry.isIntersecting) {
        // If it is, add the 'is-visible' class to trigger the fade-in
        entry.target.querySelector('.hero-content').classList.add('is-visible');
        entry.target.querySelector('.hero-image').classList.add('is-visible');
      } else {
        // If it's not, remove the 'is-visible' class to trigger the fade-out
        entry.target.querySelector('.hero-content').classList.remove('is-visible');
        entry.target.querySelector('.hero-image').classList.remove('is-visible');
      }
    });
  });

  // Tell the observer to watch the hero section
  observer.observe(document.querySelector('.hero'));
// Animate Numbers on Scroll
gsap.utils.toArray(".stat-number").forEach(function(el) {
    let finalValue = parseInt(el.innerText); 
    let suffix = el.dataset.suffix || ""; 
  
    gsap.fromTo(el, 
      { innerText: 0 }, 
      {
        innerText: finalValue,
        duration: 2,
        ease: "power1.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
        snap: { innerText: 1 }, // makes it count in whole numbers
        onUpdate: function() {
          el.innerText = Math.floor(el.innerText) + suffix; 
        }
      }
    );
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const skills = document.querySelectorAll('.skill');
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const skill = entry.target;
          const skillFill = skill.querySelector('.skill-fill');
          const skillPercent = skill.querySelector('.skill-percent');
          const finalValue = skillFill.dataset.skill;
  
          // Set the CSS variable for the animation
          skillFill.style.setProperty('--skill-percent', `${finalValue}%`);
          
          // Add the class to trigger the CSS animation
          skillFill.classList.add('is-visible');
  
          // Animate the percentage number
          let startValue = 0;
          const duration = 1000; // 1 second
          const startTime = performance.now();
  
          function animate(currentTime) {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const value = Math.floor(progress * finalValue);
            skillPercent.textContent = `${value}%`;
  
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          }
          requestAnimationFrame(animate);
  
          // Stop observing once the animation has been triggered
          observer.unobserve(skill);
        }
      });
    });
  
    skills.forEach(skill => {
      observer.observe(skill);
    });
  });

  gsap.utils.toArray(".portfolio-box").forEach((box, index) => {
    gsap.from(box, {
      opacity: 0,
      y: 60,
      duration: 1,
      delay: index * 0.2,
      scrollTrigger: {
        trigger: box,
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });
  });
  gsap.utils.toArray(".testimonial-card").forEach((card, index) => {
    gsap.from(card, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: index * 0.2,
      scrollTrigger: {
        trigger: card,
        start: "top 90%",
        toggleActions: "play none none none"
      }
    });
  });
  gsap.from(".contact-info", {
    x: -100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".contact",
      start: "top 80%"
    }
  });
  
  gsap.from(".contact-form", {
    x: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".contact",
      start: "top 80%"
    }
  });
      
  