import axios from 'axios';

console.log('Hallo daar!');

async function fetchCountries() {
    try {
        const result = await axios.get('https://restcountries.com/v2/all');
        const countries = result.data;
        console.log(result.data);

        sortCountries(countries);
        createCountryList(countries);

    } catch(e) {
        console.error(e);
    };
};

fetchCountries();


function sortCountries(countryArray) {
    countryArray.sort((a, b) => a.population - b.population);
};


function createCountryList(countryArray) {

    const country = document.getElementById('country');

    const listCountries = countryArray.map((countries) => {
        return `<li class="border">
                    <img class = "flag" src="${countries.flag}" alt="Country flag">
                    <p class = "${(findContinentColor(countries))}">${countries.name}</p>
                    <p>Has a population of ${countries.population} people</p>
                </li>`;
    });
    country.innerHTML = `${listCountries.join('')}`;
};


function findContinentColor(countryArray) {

   let colour = '';

        switch (countryArray.region) {
            case 'Africa':
                console.log("Colour is blue")
                colour = 'blue'
                break;
            case 'Americas':
                console.log("Colour is green")
                colour = 'green'
                break;
            case 'Asia':
                console.log("Colour is red")
                colour = 'red'
                break;
            case 'Europe':
                console.log("Colour is yellow")
                colour = 'yellow'
                break;
            default:
                console.log("Colour is purple")
                colour = 'purple'
        }
    return colour
};

