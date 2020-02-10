var secHand = document.querySelector('.second-hand');
var minHand = document.querySelector('.min-hand');
var hourHand = document.querySelector('.hour-hand');
function setDateLoop() {
    var now = new Date();
    var seconds = now.getSeconds();
    var secondsDegrees = (seconds / 60) * 360 + 90;
    if (secondsDegrees === 90) {
        secHand.style.transition = 'none';
    }
    else {
        secHand.style.transition = 'transform 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
    }
    secHand.style.transform = "rotate(" + secondsDegrees + "deg)";
    var mins = now.getMinutes();
    var minsDegrees = (mins / 60) * 360 + 90;
    if (minsDegrees === 90) {
        minHand.style.transition = 'none';
    }
    else {
        minHand.style.transition = 'transform 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
    }
    minHand.style.transform = "rotate(" + minsDegrees + "deg)";
    var hours = now.getHours();
    var hoursDegrees = (hours / 12) * 360 + 90;
    if (hoursDegrees === 90) {
        hourHand.style.transition = 'none';
    }
    else {
        hourHand.style.transition = 'transform 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
    }
    hourHand.style.transform = "rotate(" + hoursDegrees + "deg)";
    window.requestAnimationFrame(setDateLoop);
}
setDateLoop();
