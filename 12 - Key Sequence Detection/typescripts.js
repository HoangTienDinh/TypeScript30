const pressed = [];
const secretCode = 'willwags';
window.addEventListener('keyup', (e) => {
    pressed.push(e.key);
    while (pressed.length > secretCode.length) {
        pressed.shift();
    }
    if (pressed.join('').includes(secretCode)) {
        cornify_add();
    }
    console.log(pressed);
});
