const hourEl =document.querySelector(".hour");
const minuteEl =document.querySelector(".minute");
const secondsEl=document.querySelector(".seconds");

function updateClock() {
const currentDate = new Date();
const hour=currentDate.getHours();
const minute=currentDate.getMinutes(); 
const seconds = currentDate.getSeconds();
const hourDeg = (hour/12)*360;
hourEl.style.transform = `rotate(${hourDeg}deg)`;
const minuteDeg =(minute / 60)*360; 
minuteEl.style.transform = `rotate(${minuteDeg}deg)`;
const secondsDeg =(seconds / 60)* 360;
secondsEl.style.transform =`rotate(${secondsDeg}deg)`;
}

function clock() {
  var weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      d = new Date(),
      h = d.getHours(),
      m = d.getMinutes(),
      s = d.getSeconds(),
      date = d.getDate(),
      month = d.getMonth() + 1,
      year = d.getFullYear(),
           
      hDeg = h * 30 + m * (360/720),
      mDeg = m * 6 + s * (360/3600),
      sDeg = s * 6,
      
      hEl = document.querySelector('.hour'),
      mEl = document.querySelector('.minute'),
      sEl = document.querySelector('.second'),
      dateEl = document.querySelector('.date'),
      dayEl = document.querySelector('.day');
  
      var day = weekday[d.getDay()];
  
  if(month < 9) {
    month = "0" + month;
  }
  
  hEl.style.transform = "rotate("+hDeg+"deg)";
  mEl.style.transform = "rotate("+mDeg+"deg)";
  sEl.style.transform = "rotate("+sDeg+"deg)";
  dateEl.innerHTML = date+"/"+month+"/"+year;
  dayEl.innerHTML = day;
}

setInterval("clock()", 1000);
