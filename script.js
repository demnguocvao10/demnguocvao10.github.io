let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

let dd = document.getElementById('dd');
let hh = document.getElementById('hh');
let mm = document.getElementById('mm');
let ss = document.getElementById('ss');

let day_dot = document.querySelector('.day_dot');
let hr_dot = document.querySelector('.hr_dot');
let min_dot = document.querySelector('.min_dot');
let sec_dot = document.querySelector('.sec_dot');

let titleElement = document.querySelector('.h2'); // Select the title element

let endDate = '06/08/2024 08:00:00'; //date format i.e., mm/dd/yyyy

let x = setInterval(function(){
  let now = new Date(endDate).getTime();
  let countDown = new Date().getTime();
  let distance = now-countDown;

  //time calculation for remaining days, hours, minutes, and seconds
  let d = Math.floor(distance / (1000 * 60 * 60 * 24));
  let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60 ));
  let s = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in the elements with id
  days.innerHTML = d + "<br><span>NGÀY</span>";
  hours.innerHTML = h + "<br><span>GIỜ</span>";
  minutes.innerHTML = m + "<br><span>PHÚT</span>";
  seconds.innerHTML = s + "<br><span>GIÂY</span>";

  // Animate stroke
  dd.style.strokeDashoffset = 440 - (440 * d) / 40; // 365 days in a year
  hh.style.strokeDashoffset = 440 - (440 * h) / 24; // 24 hours in a day
  mm.style.strokeDashoffset = 440 - (440 * m) / 60; // 60 minutes in an hour
  ss.style.strokeDashoffset = 440 - (440 * s) / 60; // 60 seconds in a minute

  // Animate circle dots
  day_dot.style.transform = `rotateZ(${d * 9}deg)`; // 360deg / 365 days = 0.986
  hr_dot.style.transform = `rotateZ(${h * 15}deg)`; // 360deg / 24 hrs = 15
  min_dot.style.transform = `rotateZ(${m * 6}deg)`; // 360deg / 60 minutes = 6
  sec_dot.style.transform = `rotateZ(${s * 6}deg)`; // 360deg / 60 seconds = 6

  // RGB Color Change Logic
  titleElement.style.color = generateRandomColor();

  // Write some text if countdown is over
  if(distance < 0){
    clearInterval(x);
    document.getElementById("time").style.display = 'none';
    document.querySelector(".newYear").style.display = 'block';
  }
}, 1000); // Update every 1 second

// Helper Functions
function toHex(value) {
  let hex = Math.round(value).toString(16);
  return hex.length === 1 ? '0' + hex : hex; 
}

function generateRandomColor() {
  return '#' + toHex(Math.random() * 255) + toHex(Math.random() * 255) + toHex(Math.random() * 255);
}
