// Scroll Animation
document.addEventListener("DOMContentLoaded", function() {
  
  const sections = document.querySelectorAll(".about-header, .governance-overview, .organizational-structure, .leadership-team, .history-overview, .timeline, .legacy, .management-card, .about-overview, .our-values, .our-mission");


  function checkInView() {
    const triggerHeight = window.innerHeight / 1.3; // Trigger point for animation

    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      
      
      if (sectionTop < triggerHeight) {
        section.classList.add("show");
      }
    });
  }


  window.addEventListener("scroll", checkInView);
  
  checkInView();
});
