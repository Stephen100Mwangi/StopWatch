let [milliSec,sec,minutes,hours]= [0,0,0,0];
let timer = null;

function stopwatch() {
        milliSec++;
        if (milliSec == 100) {
            milliSec = 0;
            sec++;
            if (sec == 60) {
                sec = 0;
                minutes++;
                if (minutes == 60) {
                    minutes = 0;
                    hours++;
                }
            }
        }
        let h = hours < 10 ? "0" + hours : hours;
        let m = minutes < 10 ? "0" + minutes : minutes;
        let s = sec < 10 ? "0" + sec : sec;
        let ms = milliSec < 10 ? "0" + milliSec : milliSec;

        document.getElementById("hour").innerHTML = h;
        document.getElementById("minutes").innerHTML = m;
        document.getElementById("seconds").innerHTML = s;
        document.getElementById("millisec").innerHTML = ms;
       
    }

function watchStop() {
    clearInterval(timer);
    
}
function watchReset() {
    clearInterval(timer);

    [milliSec,sec,minutes,hours]= [0,0,0,0];
    
    document.getElementById("hour").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
    document.getElementById("millisec").innerHTML = "00";
}
function watchStart() {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(stopwatch,10);
}
