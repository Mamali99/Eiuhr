
const btn = document.getElementById('btn');
const min = document.getElementById('minuten');
let timer = 0;
var refreshIntervalId;
btn.addEventListener('click', () => {
    if (btn.className === "start") {
        
        document.getElementById("btn").src = "img\\ende.png";
        btn.className = "ende";
        startTimer(min.value * 60, document.getElementById("timer"));
        min.disabled = true;

    } else {
        clearInterval(refreshIntervalId);
        document.getElementById("timer").textContent = "00 : 00";
        document.getElementById("btn").src = "img\\start.png";   
        btn.className = "start";
        min.disabled = false;
        
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
            // timer = duration; // uncomment this line to reset timer automatically after reaching 0
        }
    }, 1000);
}
