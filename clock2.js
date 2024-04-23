const targetDate2 = new Date("2024-06-08T14:00:00");

const clockContainer2 = document.getElementById("clock2"); // Reference the container
const daysElement2 = document.createElement("span"); // Create a new element for days
const hoursElement2 = document.createElement("span"); // Create a new element for hours
const minutesElement2 = document.createElement("span"); // Create a new element for minutes
const secondsElement2 = document.createElement("span"); // Create a new element for seconds

function updateCountdown1() {
  const now = new Date();
  const timeDifference = targetDate2 - now;

  if (timeDifference > 0) {
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    daysElement2.textContent = `${days.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
    })} ngày `;
    hoursElement2.textContent = `${hours.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
    })} giờ `;
    minutesElement2.textContent = `${minutes.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
    })} phút `;
    secondsElement2.textContent = `${seconds.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
    })} giây`;

    // Update the main time element with the formatted string (optional)
    // const timeString = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    // timeElement1.textContent = timeString;

    // Add the elements to the container (adjust as needed)
    clockContainer2.appendChild(daysElement2);
    clockContainer2.appendChild(hoursElement2);
    clockContainer2.appendChild(minutesElement2);
    clockContainer2.appendChild(secondsElement2);
  } else {
    // Handle what happens when countdown reaches zero
  }
}

setInterval(updateCountdown1, 1000); // Update every second
updateCountdown1(); // Initial call
