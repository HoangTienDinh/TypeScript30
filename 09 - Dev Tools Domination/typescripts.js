var dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
function makeGreen() {
    var p = document.querySelector('p');
    debugger;
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}
console.clear();
console.log('hello');
console.log('Hello, I am a %s string', '💩');
console.log('%c I am some great text', 'font-size: 50px; background-color: red; text-shadow: 2px 2px 4px blue;');
console.warn('OH NOOO');
console.error('Shoot!');
console.info('Crocodiles eat 3-4 people per year');
var p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong!');
console.log(p);
dogs.forEach(function (dog) {
    console.groupCollapsed("This is " + dog.name);
    console.log(dog.name + " is " + dog.age + " years old.");
    console.log(dog.name + " is " + dog.age * 7 + " dog years old");
    console.groupEnd();
});
console.count('Will');
console.count('Will');
console.count('Will');
console.count('Wags');
console.count('Will');
console.count('Wags');
console.count('Will');
console.count('Wags');
console.count('Wags');
console.count('Wags');
console.time('fetching data');
fetch('https://api.github.com/users/wwags33')
    .then(function (data) { return data.json(); })
    .then(function (data) {
    console.timeEnd('fetching data');
    console.log(data);
});
console.table(dogs);
