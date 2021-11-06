//this is javascript file
//this is javascript file
const monthEl = document.getElementById("months");
const daysEl = document.getElementById("days");

const festDay = "1 jan 2022";

function countdown() {
    const festDayFinal = new Date(festDay);
    const currentDate = new Date();
    const totalSeconds = (festDayFinal - currentDate) / 1000;
    const month = Math.floor(totalSeconds / 3600 / 24) /30 ;
    const months = (Math.round(month));
    const day = Math.floor(totalSeconds / 3600 / 24);
    const days = Math.round(day - 30);

    monthEl.innerHTML = months;
    daysEl.innerHTML = days;

}

// initial call of counter
countdown();

setInterval(countdown, 1000);


  
