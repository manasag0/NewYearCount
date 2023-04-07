let daysEl = document.getElementById('days')
let hoursEl = document.getElementById('hours')
let miniutsEl = document.getElementById('miniuts')
let secondsEl = document.getElementById('seconds')

let newYears = "1 Jan 2024";

function countdown(){
    let newYearDate = new Date(newYears);
    let todayDate = new Date();
    let seconds = (newYearDate-todayDate)/1000;

    let days = Math.floor(seconds/3600/24);
    let hours = Math.floor(seconds/3600)%24;
    let mins =Math.floor(seconds/60)%60;
    let second = Math.floor(seconds)%60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    miniutsEl.innerHTML = mins;
    secondsEl.innerHTML = second;

    console.log(mins)
}


countdown()

setInterval(countdown, 1000)