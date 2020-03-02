var hero = document.querySelector('.hero');
var text = hero.querySelector('h1');
var maxWalk = 200;
function shadow(e) {
    var target = e.target;
    var x = e.offsetX, y = e.offsetY;
    var width = hero.offsetWidth, height = hero.offsetHeight;
    if (target && this !== e.target) {
        x = x + target.offsetLeft;
        y = y + target.offsetTop;
    }
    var xWalk = Math.round((x / width * maxWalk) - (maxWalk / 2));
    var yWalk = Math.round((y / height * maxWalk) - (maxWalk / 2));
    text.style.textShadow = "\n    " + xWalk + "px " + yWalk + "px 2px red,\n    " + -xWalk + "px " + -yWalk + "px 2px blue,\n    " + yWalk + "px " + xWalk + "px 2px green,\n    " + -yWalk + "px " + -xWalk + "px 2px green\n  ";
}
hero.addEventListener('mousemove', shadow);
