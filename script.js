function enableMobileSlider() {
    if (window.innerWidth <= 768) {  // Adjust breakpoint for your target mobile devices
      const slider = document.getElementById('clock-slider'); // Ensure this ID matches your HTML
      const hammertime = new Hammer(slider);
  
      hammertime.on('swipe', function(event) {
        if (event.direction === 4) { // Swipe right
          slider.scrollLeft -= slider.offsetWidth; // Scroll left
        } else if (event.direction === 2) { // Swipe left
          slider.scrollLeft += slider.offsetWidth; // Scroll right
        }
      });
    }
    hammertime.on('swipe', function(event) {
        const targetScroll = event.direction === 4 ? slider.scrollLeft - slider.offsetWidth : slider.scrollLeft + slider.offsetWidth;
    
        gsap.to(slider, {
            duration: 0.5, // Change duration if desired 
            scrollTo: targetScroll, 
            ease: "power2.out" // Customize easing 
        });
    }); 
  }
  
  // Initial call on page load
enableMobileSlider(); 
  
  // Call again on window resize for responsiveness
window.addEventListener('resize', enableMobileSlider);