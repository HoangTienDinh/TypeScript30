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
console.groupCollapsed('Arrays');
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
console.log('players:');
console.table(players);
const team = players;
console.log('team', team);
team[0] = 'Will';
console.log('team', team);
console.log('players', players);
console.warn('Oops!');
const players2 = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
console.log('players2:');
console.table(players2);
const team2 = players2.slice();
console.log('team2', team2);
team2[0] = 'Will';
console.log('team2', team2);
const team3 = [].concat(players2);
console.log('team3', team3);
team3[0] = 'Will';
console.log('team3', team3);
const team4 = [...players2];
console.log('team4', team4);
team4[0] = 'Will';
console.log('team4', team4);
const team5 = Array.from(players2);
console.log('team5', team5);
team5[0] = 'Will';
console.log('team5', team5);
console.log('players2', players2);
console.info('Noice');
console.groupEnd();
console.groupCollapsed('Objects');
const person = {
    name: 'Wes Bos',
    age: 80
};
console.log('person', person);
const captain = person;
captain.number = 99;
console.log('captain', captain);
console.log('person', person);
console.warn('Oops!');
const per2 = {
    name: 'Wes Bos',
    age: 80
};
const cap2 = Object.assign({}, per2, { number: 99, age: 12 });
console.log('cap2', cap2);
const cap3 = Object.assign({}, per2);
cap3.name = 'Will Wager';
cap3.age = 28;
console.log('cap3', cap3);
console.log('per2', per2);
console.info('Noice');
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
