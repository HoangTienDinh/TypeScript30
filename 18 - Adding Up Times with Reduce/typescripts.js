const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
console.time('map and reduce');
const seconds = timeNodes
    .map((node) => node.dataset.time)
    .map(timeCode => {
    if (!timeCode)
        return 0;
    const [mins, secs] = timeCode.split(':').map(Number);
    return (mins * 60) + secs;
})
    .reduce((total, vidSeconds) => total + vidSeconds);
console.timeEnd('map and reduce');
let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;
const minutes = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;
console.log(`Map and reduce: ${hours}:${minutes}:${secondsLeft}`);
console.time('just reduce');
const redSeconds = timeNodes.reduce((totalSeconds, node) => {
    const [mins, secs] = node.dataset.time.split(':').map(Number);
    return totalSeconds + mins * 60 + secs;
}, 0);
console.timeEnd('just reduce');
console.log(`Just reduce: ${Math.floor(redSeconds / 3600)}:${Math.floor((redSeconds % 3600) / 60)}:${redSeconds % 60}`);
