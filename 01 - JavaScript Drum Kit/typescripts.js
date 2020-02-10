var keys = document.querySelector('.keys');
function handleKey(e) {
    var audio = document.querySelector("audio[data-key=\"" + e.keyCode + "\"]");
    if (!audio)
        return;
    var key = document.querySelector(".key[data-key=\"" + e.keyCode + "\"]");
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}
function handleEnd(e) {
    if (e.propertyName !== 'transform')
        return;
    e.target.classList.remove('playing');
}
document.addEventListener('keydown', handleKey);
keys.addEventListener('transitionend', handleEnd);
