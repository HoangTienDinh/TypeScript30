/**
 * JavaScript30 by Wes Bos, https://javascript30.com/
 * TypeScript implementation by Will Wager
 * Project: Array Cardio 2
 * Concepts: Array builtins - some, every, find, findIndex
 * Key takeaways: Practice, keep functions pure by spreads with slice instead of splice.
 * Sidenotes:
 *   Log name and value of boolean with an object literal in .log
 *   Find is not in es5, so I had to use --target es6
 */

// ## Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const isAdults = people.some(person => {
  const currentYear = (new Date()).getFullYear();
  return ((currentYear - person.year) >= 19);
});
console.log({ isAdults });

// Array.prototype.every() // is everyone 19 or older?
const allAdult = people.every(person => {
  const currentYear = (new Date()).getFullYear();
  return ((currentYear - person.year) >= 19);
});
console.log({ allAdult });

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const comment = comments.find(comment => comment.id === 823423);
console.log(comment);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
console.table(comments);

const index = comments.findIndex(comment => comment.id === 823423);
console.log({ index });

const newComments = [
  ...comments.slice(0, index),
  ...comments.slice(index + 1)
];
console.table(newComments);