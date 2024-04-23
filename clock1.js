const targetDate1 = new Date("2024-06-08T08:00:00");

const clockContainer1 = document.getElementById("clock1"); // Reference the container
const daysElement1 = document.createElement("span"); // Create a new element for days
const hoursElement1 = document.createElement("span"); // Create a new element for hours
const minutesElement1 = document.createElement("span"); // Create a new element for minutes
const secondsElement1 = document.createElement("span"); // Create a new element for seconds

function updateCountdown1() {
  const now = new Date();
  const timeDifference = targetDate1 - now;

  if (timeDifference > 0) {
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    daysElement1.textContent = `${days.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
    })} ngày `;
    hoursElement1.textContent = `${hours.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
    })} giờ `;
    minutesElement1.textContent = `${minutes.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
    })} phút `;
    secondsElement1.textContent = `${seconds.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
    })} giây`;

    // Update the main time element with the formatted string (optional)
    // const timeString = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    // timeElement1.textContent = timeString;

    // Add the elements to the container (adjust as needed)
    clockContainer1.appendChild(daysElement1);
    clockContainer1.appendChild(hoursElement1);
    clockContainer1.appendChild(minutesElement1);
    clockContainer1.appendChild(secondsElement1);
  } else {
    // Handle what happens when countdown reaches zero
  }
}

setInterval(updateCountdown1, 1000); // Update every second
updateCountdown1(); // Initial call
