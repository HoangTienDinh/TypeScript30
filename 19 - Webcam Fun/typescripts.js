var video = document.querySelector('.player');
var canvas = document.querySelector('.photo');
var ctx = canvas.getContext('2d');
var strip = document.querySelector('.strip');
var snap = document.querySelector('.snap');
function redEffect(pixels) {
    for (var i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i + 0] += 100;
        pixels.data[i + 1] += -50;
        pixels.data[i + 2] *= 0.5;
    }
    return pixels;
}
function rgbSplit(pixels) {
    for (var i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i - 150] = pixels.data[i + 0];
        pixels.data[i + 100] = pixels.data[i + 1];
        pixels.data[i - 150] = pixels.data[i + 2];
    }
    return pixels;
}
function greenScreen(pixels) {
    var levels = {};
    var inputs = document.querySelectorAll('.rgb input');
    if (!inputs)
        return pixels;
    inputs.forEach(function (input) { return levels[input.name] = Number(input.value); });
    for (var i = 0; i < pixels.data.length; i = i + 4) {
        var red = pixels.data[i + 0];
        var green = pixels.data[i + 1];
        var blue = pixels.data[i + 2];
        if (red >= levels.rmin
            && green >= levels.gmin
            && blue >= levels.bmin
            && red <= levels.rmax
            && green <= levels.gmax
            && blue <= levels.bmax) {
            pixels.data[i + 3] = 0;
        }
    }
    return pixels;
}
function paintToCanvas() {
    var width = video.videoWidth;
    var height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;
    function paintVideoLoop() {
        if (!ctx)
            return;
        ctx.drawImage(video, 0, 0, width, height);
        var pixels = ctx.getImageData(0, 0, width, height);
        pixels = greenScreen(pixels);
        ctx.putImageData(pixels, 0, 0);
        requestAnimationFrame(paintVideoLoop);
    }
    paintVideoLoop();
}
function getVideo() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(function (localMediaStream) {
        video.srcObject = localMediaStream;
        video.onloadedmetadata = function () {
            video.play();
            paintToCanvas();
        };
    })
        .catch(function (err) { return console.error("\uD83D\uDE2C I'm gonna need your webcam for this...", err); });
}
getVideo();
function takePhoto() {
    snap.currentTime = 0;
    snap.play();
    var data = canvas.toDataURL('image/jpeg');
    var link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'handsome');
    link.innerHTML = "<img src=\"" + data + "\" alt=\"Photo booth photo\" />";
    strip.insertBefore(link, strip.firstChild);
}
