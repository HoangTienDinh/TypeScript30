var divs = document.querySelectorAll('div');
var button = document.querySelector('button');
function logText(e) {
    console.log(this.classList.value);
}
divs.forEach(function (div) { return div.addEventListener('click', logText, {
    capture: false,
    once: true,
}); });
button.addEventListener('click', function () {
    console.log('Click!!!');
}, {
    once: true,
});
