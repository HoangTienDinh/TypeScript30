var endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
var cities = [];
fetch(endpoint)
    .then(function (blob) { return blob.json(); })
    .then(function (data) { return cities.push.apply(cities, data); });
function findMatches(wordToMatch, cities) {
    return cities.filter(function (place) {
        var regexp = new RegExp(wordToMatch, 'gi');
        return place.city.match(regexp) || place.state.match(regexp);
    });
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
function displayMatches() {
    var _this = this;
    var matchArray = findMatches(this.value, cities);
    var html = matchArray.map(function (place) {
        var regexp = new RegExp(_this.value, 'gi');
        var cityName = place.city.replace(regexp, "<span class=\"hl\">" + _this.value + "</span>");
        var stateName = place.state.replace(regexp, "<span class=\"hl\">" + _this.value + "</span>");
        return ("\n      <li>\n        <span class=\"name\">" + cityName + ", " + stateName + "</span>\n        <span class=\"population\">" + numberWithCommas(place.population) + "</span>\n      </li>\n    ");
    }).join('');
    if (suggestions) {
        suggestions.innerHTML = html;
    }
    else {
        throw new Error('Suggestions block not found');
    }
}
var searchInput = document.querySelector('.search');
var suggestions = document.querySelector('.suggestions');
if (searchInput) {
    searchInput.addEventListener('change', displayMatches);
    searchInput.addEventListener('keyup', displayMatches);
}
else {
    throw new Error('Search input not found');
}
