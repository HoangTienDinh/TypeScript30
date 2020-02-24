var inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];
var people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
var fifteen = inventors.filter(function (inventor) { return inventor.year >= 1500 && inventor.year < 1600; });
console.table(fifteen);
var fullNames = inventors.map(function (inventor) { return inventor.first + " " + inventor.last; });
console.table(fullNames);
var ordered = inventors.sort(function (inventorA, inventorB) { return inventorA.year > inventorB.year ? 1 : -1; });
console.table(ordered);
var totalYears = inventors.reduce(function (total, inventor) { return total + (inventor.passed - inventor.year); }, 0);
console.log(totalYears);
var oldest = inventors.sort(function (inventorA, inventorB) { return ((inventorA.passed - inventorA.year) > (inventorB.passed - inventorB.year)) ? -1 : 1; });
console.table(oldest);
var alpha = people.sort(function (personA, personB) {
    var _a = personA.split(', '), lastA = _a[0], firstA = _a[1];
    var _b = personB.split(', '), lastB = _b[0], firstB = _b[1];
    return lastA > lastB ? 1 : -1;
});
console.table(alpha);
var data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
var transportation = data.reduce(function (obj, item) {
    if (!obj[item]) {
        obj[item] = 1;
    }
    else {
        obj[item]++;
    }
    return obj;
}, {});
console.log(transportation);