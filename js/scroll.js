// Scroll Animation
document.addEventListener("DOMContentLoaded", function() {

    const sections = document.querySelectorAll(".about-header, .governance-overview, .organizational-structure, .leadership-team, .history-overview, .timeline, .legacy, .management-card, .about-overview, .our-values, .our-mission,.contact,.aboutUs,.Services,.latest-news,.firstgalla,.secondgalla,.thirdgalla,.btn1,.btn2,.btn3,.btn4,.btn5");


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