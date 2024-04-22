const targetDates = [
    // Replace with your desired target dates in YYYY-MM-DD format
    new Date("2024-06-08T08:00:00"), // Target date 1
    new Date("2024-06-08T14:00:00"), // Target date 2
    new Date("2024-06-09T08:00:00"), // Target date 3
  ];
  const targetLinks = [
    "https://www.example.com/subject1", 
    "https://www.example.com/subject2", 
    "https://www.example.com/subject3" 
]; 
  const countdownElements = {
    days1: document.getElementById("days1"),
    hours1: document.getElementById("hours1"),
    minutes1: document.getElementById("minutes1"),
    seconds1: document.getElementById("seconds1"),
    days2: document.getElementById("days2"),
    hours2: document.getElementById("hours2"),
    minutes2: document.getElementById("minutes2"),
    seconds2: document.getElementById("seconds2"),
    days3: document.getElementById("days3"),
    hours3: document.getElementById("hours3"),
    minutes3: document.getElementById("minutes3"),
    seconds3: document.getElementById("seconds3")
  };
  
  function updateCountdown() {
    const now = new Date();
  
    for (let i = 0; i < targetDates.length; i++) {
      const timeDifference = targetDates[i] - now;
  
      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
        countdownElements[`days${i + 1}`].textContent = days < 10 ? "0" + days : days;
        countdownElements[`hours${i + 1}`].textContent = hours < 10 ? "0" + hours : hours;
        countdownElements[`minutes${i + 1}`].textContent = minutes < 10 ? "0" + minutes : minutes;
        countdownElements[`seconds${i + 1}`].textContent = seconds < 10 ? "0" + seconds : seconds;
      } else {
        // Customize what happens when countdown reaches zero
      }
    }
  }
  
  // Update the countdown every second:
  setInterval(updateCountdown, 1000); 
  
  // Initial update on page load
  updateCountdown();
  const countdownClocks = document.querySelectorAll('.countdown-clock');

countdownClocks.forEach(clock => {
  clock.addEventListener('click', function() {
    const href = this.querySelector('example.com').href; // Get the link URL 
    window.location.href = href; // Redirect to the link
  });
});
 
  