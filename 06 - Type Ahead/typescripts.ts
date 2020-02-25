/**
 * JavaScript30 by Wes Bos, https://javascript30.com/
 * TypeScript implementation by Will Wager
 * Project: Type Ahead
 * Concepts: AJAX, Fetch API
 * Key takeaways: Get the data first, then worry about displaying it.
 * Sidenotes:
 *   Fetch API uses Promises, but --target es5 does not cause errors...
 *   I've no idea how that comma adding regexp works...
 */

interface City {
  city: string;
  state: string;
  population: number;
}

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities: City[] = [];

fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...(data as City[])));

function findMatches(wordToMatch: string, cities: City[]) {
  return cities.filter(place => {
    const regexp = new RegExp(wordToMatch, 'gi');
    return place.city.match(regexp) || place.state.match(regexp);
  });
}

function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray.map(place => {
    const regexp = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regexp, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regexp, `<span class="hl">${this.value}</span>`);
    return (`
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `);
  }).join('');

  if (suggestions) {
    suggestions.innerHTML = html;
  } else {
    throw new Error('Suggestions block not found');
  }
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

if (searchInput) {
  searchInput.addEventListener('change', displayMatches);
  searchInput.addEventListener('keyup', displayMatches);
} else {
  throw new Error('Search input not found');
}
