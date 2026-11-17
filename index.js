let elapsedtime = 0;
let timer;

const display = document.getElementById('Display');
const startbutton = document.getElementById('startbtn');
const pausebutton = document.getElementById('pausebtn');
const resetbutton = document.getElementById('resetbtn');



function updateDisplay() {
    let hours = Math.floor(elapsedtime / 3600);
    let minutes = Math.floor((elapsedtime % 3600) / 60);
    let seconds = elapsedtime % 60;
    display.textContent = `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`
}

startbutton.addEventListener('click', function() {
    if(!timer) {
        timer = setInterval(() => {
            elapsedtime++;
            updateDisplay();
        }, 1000);
    }
});

function pauseTimer() {
    if(timer) {
        clearInterval(timer);
        timer=null;
    }
}

pausebtn.addEventListener('click', pauseTimer);

function resetTimer() {
    pauseTimer();
    elapsedtime = 0;
    updateDisplay();
}

resetbtn.addEventListener('click', resetTimer);