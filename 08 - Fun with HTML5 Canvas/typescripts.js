var canvas = document.querySelector('#draw');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;
ctx.globalCompositeOperation = 'multiply';
var isDrawing = false;
var lastX = 0;
var lastY = 0;
var hue = 0;
var direction = true;
function draw(e) {
    if (!isDrawing)
        return;
    ctx.strokeStyle = "hsl(" + hue + ", 100%, 50%)";
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    lastX = e.offsetX;
    lastY = e.offsetY;
    hue++;
    if (hue >= 360) {
        hue = 0;
    }
    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
    }
    if (direction) {
        ctx.lineWidth++;
    }
    else {
        ctx.lineWidth--;
    }
}
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', function (e) {
    isDrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
});
canvas.addEventListener('mouseup', function () { return isDrawing = false; });
canvas.addEventListener('mouseout', function () { return isDrawing = false; });
