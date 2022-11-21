
const btn = document.getElementById('btn');
const min = document.getElementById('minuten');
var strat = true;
btn.addEventListener('click', () => {
    if (btn.className === "start") {
        
        document.getElementById("btn").src = "img\\ende.png";
        btn.className = "ende";
        startTimer(min.value * 60, document.getElementById("timer"));
        min.disabled = true;
    } else {
        document.getElementById("btn").src = "img\\start.png";
        stopTimer();
        btn.className = "start";
        min.disabled = false;
        strat = false;
    }
}, false);

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {

        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0 && strat) {
            timer = 0;
            document.getElementById("btn").src = "img\\start.png";
            min.disabled = false;
            // timer = duration; // uncomment this line to reset timer automatically after reaching 0
        }
    }, 1000);
}
