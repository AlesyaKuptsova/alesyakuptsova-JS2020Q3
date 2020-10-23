// DOM Elements
const time = document.querySelector('.time'),
  greeting = document.querySelector('.greeting'),
  name = document.querySelector('.name'),
  focus = document.querySelector('.focus');

let previoustext = '';
let previousfocus = '';
let previousHour = 24;
let indexImage = 0;

// Options
const showAmPm = true;

// Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();
    day = today.getDay();
    date = today.getDate();
    month = today.getMonth();

  // Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec)}<span>  </span>${getWeekDay(day)}<span>, </span>${date}<span> </span>${getMonthName(month)}`;

  setTimeout(showTime, 1000);

  if (previousHour !== hour ){
    previousHour = hour;
    indexImage = hour;
    setBgGreet();
  }
}

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function getWeekDay(d) {
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return days[d];
}

function getMonthName(m) {
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  return months[m];
}

// Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();
    viewBgImage(currentImages[previousHour]);
    if (hour < 6) {
      //Night
    greeting.textContent = 'Good Night, ';
    document.body.style.color = 'white';
    } else if (hour < 12) {
    // Morning
    greeting.textContent = 'Good Morning, ';
  } else if (hour < 18) {
    // Afternoon
    greeting.textContent = 'Good Afternoon, ';
  } else if (hour < 24) {
    // Evening
    greeting.textContent = 'Good Evening, ';
    document.body.style.color = 'white';
  }
}

// Get Name
function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]';
  } else if (localStorage.getItem('name') === '' || localStorage.getItem('name').length === 0 || !localStorage.getItem('name').trim()) {
    name.textContent = '[Enter Name]';
  }else {
    name.textContent = localStorage.getItem('name');
  }
}
name.addEventListener("click", function() {
  previoustext = name.textContent;
  name.textContent = "";
});

function onKeypress(e) {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      name.blur();
    }
}
function focusLost() {
  if(name.textContent.trim() === ''){
    name.textContent = previoustext;
  } else {
    localStorage.setItem('name', name.textContent);
  }
  previoustext = '';
}
// Get Focus
function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Focus]';
  } else if (localStorage.getItem('focus') === '' || localStorage.getItem('focus').length === 0 || !localStorage.getItem('focus').trim()) {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

focus.addEventListener("click", function() {
  previousfocus = focus.textContent;
  focus.textContent = "";
});

// Set Focus
function onKeypressFocus(e) {
    if (e.which == 13 || e.keyCode == 13) {
      focus.blur();
    }
}
function focusLostFocus() {
  if(focus.textContent.trim() === ''){
    focus.textContent = previousfocus;
  } else {
    localStorage.setItem('focus', focus.textContent);
  }
  previousfocus = '';
}

const baseEvening = 'assets/images/evening/';
const baseMorning = 'assets/images/morning/';
const baseNight = 'assets/images/night/';
const baseDay = 'assets/images/day/';

const allFolders = [
   baseNight, baseMorning, baseDay, baseEvening
]
const images = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];


const currentImages = listImages();

function viewBgImage(data) {
  const body = document.querySelector('body');
  const src = data;
  const img = document.createElement('img');
  img.src = src;
  img.onload = () => {
    body.style.backgroundImage = `url(${src})`;
  };
}
function getImage() {
  indexImage = (indexImage + 1) % currentImages.length;
  const imageSrc = currentImages[indexImage];
  viewBgImage(imageSrc);
  btn.disabled = true;
  setTimeout(function() { btn.disabled = false }, 1000);
}
function listImages() {
  let array = new Array();
  for(var folder in allFolders) {
   for(let i =0; i < 6; i++){
     const index = Math.floor(Math.random()*images.length);
     const imageSrc = allFolders[folder] + images[index];
     array.push(imageSrc);
   }
  }
  return array;
}
const btn = document.querySelector('.btn');
btn.addEventListener('click', getImage);

const blockquote = document.querySelector('blockquote');
const figcaption = document.querySelector('figcaption');
const btnone = document.querySelector('.btnone');
 
async function getQuote() {
  const url = 'https://quote-garden.herokuapp.com/api/v2/quotes/random';
  const res = await fetch(url);
  const data = await res.json();
  blockquote.textContent = data.quote.quoteText;
  figcaption.textContent = data.quote.quoteAuthor;
}
document.addEventListener('DOMContentLoaded', getQuote);
btnone.addEventListener('click', getQuote);

name.addEventListener('keypress', onKeypress);
name.addEventListener('blur', focusLost);
focus.addEventListener('keypress', onKeypressFocus);
focus.addEventListener('blur', focusLostFocus);

// Run
showTime();
setBgGreet();
getName();
getFocus();