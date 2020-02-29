/**
 * JavaScript30 by Wes Bos, https://javascript30.com/
 * TypeScript implementation by Will Wager
 * Project: JavaScript Reference VS Copying
 * Concepts: Pass by reference, pass by value
 * Key takeaways: booleans, numbers, and strings are by value, arrays and objects by reference.
 * Sidenotes: Use a lib for optimized deep clone (or better, don't deep clone at all);
 *   I made the console output more readable.
 * Compilation command:
 *   tsc --removeComments --strictNullChecks --noImplicitAny --target es6 typescripts.ts
 */

// start with strings, numbers and booleans
console.groupCollapsed('Strings, numbers, and booleans');
let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

let myName = 'Will';
let myName2 = myName;
console.log(myName, myName2);
myName = 'William';
console.log(myName, myName2);

let bool = true;
let bool2 = bool;
console.log(bool, bool2);
bool = false;
console.log(bool, bool2);
console.groupEnd();


// Let's say we have an array
console.groupCollapsed('Arrays');
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
console.log('players:');
console.table(players);

// and we want to make a copy of it.
const team = players;
console.log('team', team);

// You might think we can just do something like this:
team[0] = 'Will';

// however what happens when we update that array?
console.log('team', team);

// now here is the problem!
console.log('players', players);
console.warn('Oops!');
// oh no - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const players2 = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
console.log('players2:');
console.table(players2);

// one way
const team2 = players2.slice();
console.log('team2', team2);
team2[0] = 'Will';
console.log('team2', team2);

// or create a new array and concat the old one in
const team3 = ([] as string[]).concat(players2);
console.log('team3', team3);
team3[0] = 'Will';
console.log('team3', team3);


// or use the new ES6 Spread
const team4 = [...players2];
console.log('team4', team4);
team4[0] = 'Will';
console.log('team4', team4);

// Array.from
const team5 = Array.from(players2);
console.log('team5', team5);
team5[0] = 'Will';
console.log('team5', team5);

// now when we update it, the original one isn't changed
console.log('players2', players2);
console.info('Noice');

console.groupEnd();


// The same thing goes for objects, let's say we have a person object
console.groupCollapsed('Objects');
// with Objects
const person = {
  name: 'Wes Bos',
  age: 80
};
console.log('person', person);

// and think we make a copy:
const captain: { name: string, age: number, number?: number } = person;
captain.number = 99;
console.log('captain', captain);
console.log('person', person);
console.warn('Oops!');

// how do we take a copy instead?
const per2 = {
  name: 'Wes Bos',
  age: 80
};

const cap2 = Object.assign({}, per2, { number: 99, age: 12 });
console.log('cap2', cap2);

// We will hopefully soon see the object ...spread
const cap3 = { ...per2 };
cap3.name = 'Will Wager';
cap3.age = 28;
console.log('cap3', cap3);

console.log('per2', per2);
console.info('Noice');

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const wes = {
  name: 'Wes',
  age: 100,
  social: {
    twitter: '@wesbos',
    facebook: 'wesbos.developer'
  }
};
console.log(JSON.stringify(wes));

const dev = Object.assign({}, wes, { name: 'Dev' });
dev.social.twitter = '@dev';
console.log(JSON.stringify(dev));

console.log(JSON.stringify(wes));
console.warn('Oops!');

// Easy, expensive deep clone
const wes2 = {
  name: 'Wes2',
  age: 100,
  social: {
    twitter: '@wesbos',
    facebook: 'wesbos.developer'
  }
};
console.log(JSON.stringify(wes2));

const dev2 = JSON.parse(JSON.stringify(wes2));
dev2.name = 'Dev2';
dev2.social.twitter = '@dev2';
console.log(JSON.stringify(dev2));
console.log(JSON.stringify(wes2));
console.info('Noice');

console.groupEnd();
