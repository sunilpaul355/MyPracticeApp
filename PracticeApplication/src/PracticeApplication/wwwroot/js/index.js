var timerId = -1, interval = 25, ms = 0, seconds = 0, minutes = 0, startTimer = function () {
    if (timerId == -1) {
        timerId = window.setInterval(turnTimerOn, interval);
    }
}, clearTimer = function () {
    ms = 0;
    seconds = 0;
    minutes = 0;
    displayTimer();
}, displayTimer = function () {
    document.getElementById('millisecond').innerHTML = ms.toString();
    document.getElementById('second').innerHTML = seconds.toString();
    document.getElementById('minutes').innerHTML = minutes.toString();
}, turnTimerOn = function () {
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
}, pauseTimer = function () {
    window.clearInterval(timerId);
    timerId = -1;
}, init = function (startButton, pauseButton, clearButton) {
    document.getElementById(startButton)
        .addEventListener("click", startTimer, false);
    document.getElementById(pauseButton)
        .addEventListener("click", pauseTimer, false);
    document.getElementById(clearButton)
        .addEventListener("click", clearTimer, false);
    displayTimer();
};
window.onload = function () {
    init("startButton", "pauseButton", "clearButton");
};
///// Object types in typescript
var square = { h: 10, w: 20 };
var points = { h: 10, w: 20 };
var rect = {
    h: 20,
    w: 20,
    calArea: function () {
        return this.h * this.w;
    }
};
console.log(rect.calArea());
var squareIt1 = function (x) {
    return x * x;
};
var val1 = squareIt1('2');
console.log('the number is ' + val1);
var val2 = squareIt1('sunil');
console.log('the number is ' + val2);
var squareIt = function (rect) {
    if (rect.w === undefined) {
        return rect.h * rect.h;
    }
    else {
        return rect.h * rect.w;
    }
};
var sqr1 = squareIt({ h: 2 });
console.log('the square root for only height ' + sqr1);
var sqr2 = squareIt({ h: 40, w: 30 });
console.log('the square root for height and width  ' + sqr2);
var myFunc = function (h, w) {
    return h * w;
};
var MyFunc1 = function (h, w) { return (h * w); };
console.log('Return of function ' + myFunc(2, 4));
console.log('Return of function ' + MyFunc1(3, 4));
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
