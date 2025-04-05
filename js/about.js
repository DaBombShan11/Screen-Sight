document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".testimonial-container");
    
    // Duplicate the testimonials to create a seamless infinite loop
    const testimonials = [...slider.children];

    testimonials.forEach(testimonial => {
        let clone = testimonial.cloneNode(true);
        slider.appendChild(clone);
    });

    // Ensures smooth infinite scroll by resetting the position
    let scrollAmount = 0;
    function slide() {
        scrollAmount -= 1; // Adjust speed by changing this value
        if (Math.abs(scrollAmount) >= slider.scrollWidth / 2) {
            scrollAmount = 0; // Reset to the beginning for seamless effect
        }
        slider.style.transform = `translateX(${scrollAmount}px)`;
        requestAnimationFrame(slide);
    }

    slide(); // Start the animation loop
});
