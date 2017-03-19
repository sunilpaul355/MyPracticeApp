var
    timerId: number = -1,
    interval: number = 25,
    ms: number = 0,
    seconds: number = 0,
    minutes: number = 0,

    startTimer = function () {
        debugger;
        if (timerId == -1) {
            timerId = window.setInterval(turnTimerOn, interval);
        }
    },



    clearTimer = function ()
    {
        ms = 0;
        seconds = 0;
        minutes = 0;
        displayTimer();
    },



    displayTimer = function () {
        debugger;
        document.getElementById('millisecond').innerHTML = ms.toString();
        document.getElementById('second').innerHTML = seconds.toString();
        document.getElementById('minutes').innerHTML = minutes.toString();
    },



    turnTimerOn = function () {
        debugger;
        ms += interval;
        if (ms >= 1000) {
            ms = 0;
            seconds += 1;
        }

        if (seconds >= 60) {
            ms = 0;
            seconds = 0;
            minutes += 1;
        }

        displayTimer();
    },

    pauseTimer = function () {
        window.clearInterval(timerId);
        timerId = -1;
    },

    init: (s: string, p: string, c: string) => void
        = function (startButton, pauseButton, clearButton) {
            debugger;
            document.getElementById(startButton)
                .addEventListener("click", startTimer, false);
            document.getElementById(pauseButton)
                .addEventListener("click", pauseTimer, false);

            document.getElementById(clearButton)
               .addEventListener("click", clearTimer, false);

            displayTimer();
    };

window.onload = function ()
{
    debugger;
    init("startButton", "pauseButton","clearButton");
}


//var firstNumber: number;
//var secondNumber: number;
//var thirdNumber: number;
//var forNumber: number;

//document.getElementById('idFirstNumber');

//var init(f: number, s: number, t: number, f: number) =>
//     = function (first, second, third, four)
//{
//    return first + second + third + four;
//}

