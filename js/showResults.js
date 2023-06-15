const resultsYear = document.querySelector('[data-years]');
const resultsMonths = document.querySelector('[data-months]');
const resultsDays = document.querySelector('[data-days]');


export function showAge(results) {
    increment(0, results[0], resultsYear);
    increment(0, results[1], resultsMonths);
    increment(0, results[2], resultsDays);
}

function increment(i, max, element) {
    if (i > max) return;
    setTimeout(function () {
        element.innerText = Math.round(i);
        increment(i + (max/100), max, element);
    }, 10)
}