const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTime = 0;
let elapsedTime = 0;
let paused = true;
let intervalId;
let years = 0;
let months = 0;
let weeks = 0;
let days = 0;
let hrs = 0;
let mins = 0;
let secs = 0;
let mil = 0;

startBtn.addEventListener("click", () => {
    if (paused) {
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 1);
    }
});

pauseBtn.addEventListener("click", () => {
    if (!paused) {
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
});

resetBtn.addEventListener("click", () => {
    paused = true;
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    years = 0;
    months = 0;
    weeks = 0;
    days = 0;
    hrs = 0;
    mins = 0;
    secs = 0;
    mil = 0;
    timeDisplay.textContent = "00:00:00:00:00:00:00:000";
});

function updateTime() {
    elapsedTime = Date.now() - startTime;

    mil = Math.floor(elapsedTime % 1000);
    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / 1000 / 60) % 60);
    hrs = Math.floor((elapsedTime / 1000 / 60 / 60) % 24);
    days = Math.floor((elapsedTime / 1000 / 60 / 60 / 24) % 7);
    weeks = Math.floor((elapsedTime / 1000 / 60 / 60 / 24 / 7) % 4);
    months = Math.floor((elapsedTime / 1000 / 60 / 60 / 24 / 7 / 4) % 12);
    years = Math.floor(elapsedTime / 1000 / 60 / 60 / 24 / 7 / 4 / 12);

    mil = pad1(mil);
    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);
    days = pad(days);
    weeks = pad(weeks);
    months = pad(months);
    years = pad1(years);

    timeDisplay.textContent = `${years}:${months}:${weeks}:${days}:${hrs}:${mins}:${secs}:${mil}`;

    function pad(unit) {
        return String(unit).padStart(2, '0');
    }
    function pad1(unit) {
        return String(unit).padStart(3, '0');
    }
}