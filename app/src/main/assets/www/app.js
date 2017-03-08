var time = 0
var running = false

function startPause() {
 console.log("here")
    if(running == false){
        running = true;
        increment();
        document.getElementById("startPause").innerHTML = "Pause";
    } else {
        running = false;
        document.getElementById("startPause").innerHTML = "Resume";
    }
}

function clearTimer() {
    running = false;
    time= 0;
    document.getElementById("time").innerHTML = time;
    document.getElementById("startPause").innerHTML ="Start";
}

function increment() {
    if(running == true) {
        setTimeout(function() {
        time++;
        var mins = Math.floor(time/10/60);
        var seconds = Math.floor(time/10 % 60);
        var decimals = time % 10;
        document.getElementById("time").innerHTML = mins + ":" + seconds + "." + decimals;
        increment();
        }, 100)
    }
}

