/**
 * JavaScript30 by Wes Bos, https://javascript30.com/
 * TypeScript implementation by Will Wager
 * Project: Dev Tools Domination
 * Concepts:  Console methods
 * Key takeaways: Lots of options to log effectively; grouping, counting, and timing is simple
 * Sidenotes: DOM Mutation Breakpoints did not work for me in Firefox on Linux, but the debugger command does.
 * Compilation command:
 *   tsc --removeComments --strictNullChecks --noImplicitAny --target es5 typescripts.ts
 */
const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p')!;
  debugger; // Adds a breakpoint in the code.
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

console.clear();
// Regular
console.log('hello');

// Interpolated
console.log('Hello, I am a %s string', '💩');

// Styled
console.log('%c I am some great text', 'font-size: 50px; background-color: red; text-shadow: 2px 2px 4px blue;');

// warning!
console.warn('OH NOOO');

// Error :|
console.error('Shoot!');

// Info
console.info('Crocodiles eat 3-4 people per year');

// Testing
const p = document.querySelector('p')!;

console.assert(p.classList.contains('ouch'), 'That is wrong!');

// clearing
// console.clear();

// Viewing DOM Elements
console.log(p);
// console.dir(p);

// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old.`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd();
});

// counting
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


// timing
console.time('fetching data');
fetch('https://api.github.com/users/wwags33')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });

console.table(dogs);
