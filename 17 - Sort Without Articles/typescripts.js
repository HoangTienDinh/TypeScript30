var bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
var articleRegExp = /^(a |the |an )/i;
var sortedBands = bands.sort(function (a, b) {
    return a.replace(articleRegExp, '').trim() > b.replace(articleRegExp, '').trim() ? 1 : -1;
});
document.querySelector('#bands').innerHTML = sortedBands.map(function (band) { return "<li>" + band + "</li>"; }).join('');
