const targetDate3 = new Date("2024-06-09T08:00:00");

const clockContainer3= document.getElementById("clock3"); // Reference the container
const daysElement3 = document.createElement("span"); // Create a new element for days
const hoursElement3 = document.createElement("span"); // Create a new element for hours
const minutesElement3 = document.createElement("span"); // Create a new element for minutes
const secondsElement3 = document.createElement("span"); // Create a new element for seconds

function updateCountdown1() {
  const now = new Date();
  const timeDifference = targetDate3 - now;

  if (timeDifference > 0) {
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    daysElement3.textContent = `${days.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      })} ngày `;
    hoursElement3.textContent = `${hours.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      })} giờ `;
    minutesElement3.textContent = `${minutes.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      })} phút `;
    secondsElement3.textContent = `${seconds.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      })} giây`;

    // Update the main time element with the formatted string (optional)
    // const timeString = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    // timeElement1.textContent = timeString;

    // Add the elements to the container (adjust as needed)
    clockContainer3.appendChild(daysElement3);
    clockContainer3.appendChild(hoursElement3);
    clockContainer3.appendChild(minutesElement3);
    clockContainer3.appendChild(secondsElement3);
  } else {
    // Handle what happens when countdown reaches zero
  }
}

setInterval(updateCountdown1, 1000); // Update every second
updateCountdown1(); // Initial call
