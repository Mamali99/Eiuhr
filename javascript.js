
const btn = document.getElementById('btn');
const min = document.getElementById('minute');
const sec = document.getElementById("second");
let timer = 0;
let audio = new Audio("audio/rang.mp3");
var refreshIntervalId;

btn.addEventListener('click', () => {
    if (btn.className === "start") {

        document.getElementById("btn").src = "img\\ende.png";
        btn.className = "ende";
        let time = parseInt(min.value*60) + parseInt(sec.value);
        startTimer(time, document.getElementById("timer"));
        min.disabled = true;
        sec.disabled = true;

    } else {
        clearInterval(refreshIntervalId);
        document.getElementById("timer").textContent = "00 : 00";
        document.getElementById("btn").src = "img\\start.png";
        btn.className = "start";
        min.disabled = false;
        sec.disabled = false;
    }
}, false);

function startTimer(duration, display) {
    timer = duration
    var minutes, seconds;
    refreshIntervalId = setInterval(function () {

        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0;
            document.getElementById("btn").src = "img\\start.png";
            min.disabled = false;
            sec.disabled = false;
            audio.play();
            clearInterval(refreshIntervalId);

        }
    }, 1000);
}
