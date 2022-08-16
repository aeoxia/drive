import { loadCountries } from './countries.js';

const sortTheCountries = (countries, numberOfCountries) => {
    return countries.sort((left, right) => {
        return right.population - left.population
    }).slice(0, numberOfCountries)
}

const result = sortTheCountries(loadCountries(), 2)

result.forEach(country => {
    console.log(country)
})
